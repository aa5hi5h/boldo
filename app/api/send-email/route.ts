import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, project } = body;

    // Validate required fields
    if (!name || !email || !phone || !company || !project) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'Stellix Contact Form <info@stellix.io>', // Change this after domain verification
      to: 'info@stellix.io',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: #2D2DC3;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border: 1px solid #e0e0e0;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-left: 4px solid #2D2DC3;
              }
              .label {
                font-weight: bold;
                color: #2D2DC3;
                font-size: 12px;
                text-transform: uppercase;
                margin-bottom: 5px;
              }
              .value {
                color: #333;
                font-size: 16px;
              }
              .footer {
                margin-top: 20px;
                padding: 20px;
                text-align: center;
                font-size: 12px;
                color: #666;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">New Contact Form Submission</h1>
                <p style="margin: 5px 0 0 0;">Stellix Website</p>
              </div>
              
              <div class="content">
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value">
                    <a href="mailto:${email}" style="color: #2D2DC3; text-decoration: none;">
                      ${email}
                    </a>
                  </div>
                </div>
                
                <div class="field">
                  <div class="label">Phone</div>
                  <div class="value">
                    <a href="tel:${phone}" style="color: #2D2DC3; text-decoration: none;">
                      ${phone}
                    </a>
                  </div>
                </div>
                
                <div class="field">
                  <div class="label">Company</div>
                  <div class="value">${company}</div>
                </div>
                
                <div class="field">
                  <div class="label">Project Details</div>
                  <div class="value">${project}</div>
                </div>
              </div>
              
              <div class="footer">
                <p>This email was sent from the Stellix contact form</p>
                <p>You can reply directly to this email to respond to ${name}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Message sent successfully! We\'ll get back to you soon.',
        id: data?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}