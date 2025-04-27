export function contactEmailTemplate({
  firstName,
  lastName,
  email,
  service,
  description,
}: {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  description: string;
}) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          background-color: #f8fafc;
          color: #1f2937;
          line-height: 1.6;
        }

        .email-wrapper {
          max-width: 640px;
          margin: 40px auto;
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .email-header {
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
          padding: 32px;
          text-align: center;
        }

        .email-header h1 {
          color: #ffffff;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .email-header p {
          color: #e0e7ff;
          font-size: 14px;
        }

        .email-content {
          padding: 32px;
        }

        .contact-info {
          background: #f8fafc;
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 24px;
        }

        .info-item {
          margin-bottom: 16px;
          display: flex;
          align-items: flex-start;
        }

        .info-item:last-child {
          margin-bottom: 0;
        }

        .info-label {
          font-weight: 600;
          color: #2563eb;
          width: 120px; /* Fixed width for all labels */
          flex-shrink: 0;
        }

        .info-value {
          color: #1f2937;
          flex: 1;
          word-wrap: break-word;
          max-width: calc(100% - 120px); /* Ensure value doesn't overflow */
        }

        .email-footer {
          padding: 24px 32px;
          background: #f8fafc;
          text-align: center;
          border-top: 1px solid #e5e7eb;
        }

        .footer-text {
          color: #6b7280;
          font-size: 12px;
        }

        .footer-link {
          color: #2563eb;
          text-decoration: none;
          font-weight: 600;
        }

        .footer-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 600px) {
          .email-wrapper {
            margin: 20px;
          }

          .email-header {
            padding: 24px;
          }

          .email-content {
            padding: 24px;
          }

          .info-item {
            flex-direction: column;
            align-items: flex-start;
          }

          .info-label {
            width: auto;
            margin-bottom: 8px;
          }

          .info-value {
            max-width: 100%;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <div class="email-header">
          <h1>Novo Contato Recebido</h1>
          <p>Uma nova mensagem foi enviada através do formulário</p>
        </div>
        <div class="email-content">
          <div class="contact-info">
            <div class="info-item">
              <span class="info-label">Nome:</span>
              <span class="info-value">${firstName} ${lastName}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Email:</span>
              <span class="info-value">${email}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Serviço:</span>
              <span class="info-value">${service}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Descrição:</span>
              <span class="info-value">${description}</span>
            </div>
          </div>
        </div>
        <div class="email-footer">
          <p class="footer-text">
            Este é um email automático gerado pelo sistema. 
            Para mais informações, visite 
            <a href="https://resend.com/emails" class="footer-link">Resend</a>.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}