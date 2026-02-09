import nodemailer from 'nodemailer';

export async function sendInquiryEmail(inquiry: {
    name: string;
    phone: string;
    message: string;
}) {
    // Create transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.ADMIN_EMAIL || 'jpramod1919@gmail.com',
        subject: '🔔 New Customer Inquiry - Action Required',
        html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .info-box { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #d97706; }
          .phone-number { font-size: 28px; font-weight: bold; color: #d97706; margin: 10px 0; }
          .call-button { display: inline-block; background: #d97706; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; margin: 20px 0; font-weight: bold; }
          .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏗️ New Customer Inquiry</h1>
            <p>A potential customer is waiting for your call!</p>
          </div>
          <div class="content">
            <div class="info-box">
              <h3>📋 Customer Details</h3>
              <p><strong>Name:</strong> ${inquiry.name}</p>
              <p><strong>Phone Number:</strong></p>
              <div class="phone-number">${inquiry.phone}</div>
              <a href="tel:${inquiry.phone}" class="call-button">📞 Call Now</a>
            </div>
            
            ${inquiry.message ? `
            <div class="info-box">
              <h3>💬 Message</h3>
              <p>${inquiry.message}</p>
            </div>
            ` : ''}
            
            <div class="info-box">
              <h3>⏰ Received At</h3>
              <p>${new Date().toLocaleString('en-IN', {
            dateStyle: 'full',
            timeStyle: 'short'
        })}</p>
            </div>
          </div>
          <div class="footer">
            <p>This is an automated notification from your CivilCraft website.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully to:', process.env.ADMIN_EMAIL);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
}
