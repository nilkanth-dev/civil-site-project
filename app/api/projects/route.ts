import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Fallback to file-based storage if Prisma fails
const DATA_FILE = path.join(process.cwd(), 'data', 'projects.json');

async function ensureDataDir() {
    const dataDir = path.join(process.cwd(), 'data');
    try {
        await fs.access(dataDir);
    } catch {
        await fs.mkdir(dataDir, { recursive: true });
    }
}

async function readProjects() {
    try {
        await ensureDataDir();
        const data = await fs.readFile(DATA_FILE, 'utf-8');
        return JSON.parse(data);
    } catch {
        return [];
    }
}

async function writeProjects(projects: any[]) {
    await ensureDataDir();
    await fs.writeFile(DATA_FILE, JSON.stringify(projects, null, 2));
}

export async function GET() {
    try {
        const projects = await readProjects();
        return NextResponse.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, location, clientName, description, imageUrl } = body;

        const projects = await readProjects();

        const newProject = {
            id: projects.length + 1,
            title,
            location,
            clientName,
            description,
            imageUrl,
            createdAt: new Date().toISOString()
        };

        projects.unshift(newProject);
        await writeProjects(projects);

        return NextResponse.json(newProject);
    } catch (error) {
        console.error('Error creating project:', error);
        return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
    }
}
