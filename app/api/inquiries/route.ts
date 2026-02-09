import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { sendInquiryEmail } from '@/lib/email';

// Fallback to file-based storage if Prisma fails
const DATA_FILE = path.join(process.cwd(), 'data', 'inquiries.json');

async function ensureDataDir() {
    const dataDir = path.join(process.cwd(), 'data');
    try {
        await fs.access(dataDir);
    } catch {
        await fs.mkdir(dataDir, { recursive: true });
    }
}

async function readInquiries() {
    try {
        await ensureDataDir();
        const data = await fs.readFile(DATA_FILE, 'utf-8');
        return JSON.parse(data);
    } catch {
        return [];
    }
}

async function writeInquiries(inquiries: any[]) {
    await ensureDataDir();
    await fs.writeFile(DATA_FILE, JSON.stringify(inquiries, null, 2));
}

export async function GET() {
    try {
        const inquiries = await readInquiries();
        return NextResponse.json(inquiries);
    } catch (error) {
        console.error('Error fetching inquiries:', error);
        return NextResponse.json({ error: 'Failed to fetch inquiries' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, message } = body;

        const inquiries = await readInquiries();

        const newInquiry = {
            id: inquiries.length + 1,
            name,
            phone,
            message: message || '',
            createdAt: new Date().toISOString(),
            status: 'new'
        };

        inquiries.unshift(newInquiry);
        await writeInquiries(inquiries);

        // Send email notification to admin
        try {
            await sendInquiryEmail({ name, phone, message: message || '' });
            console.log('Email notification sent successfully');
        } catch (emailError) {
            console.error('Failed to send email notification:', emailError);
            // Don't fail the request if email fails
        }

        return NextResponse.json(newInquiry);
    } catch (error) {
        console.error('Error creating inquiry:', error);
        return NextResponse.json({ error: 'Failed to create inquiry' }, { status: 500 });
    }
}
