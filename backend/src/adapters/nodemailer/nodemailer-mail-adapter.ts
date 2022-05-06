import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7494796e4eed56",
    pass: "1e571b9880c57d"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <suporte@palamarsolutionit.com.br>",
      to: 'Aleksander Palamar <apalamar@live.com>',
      subject,
      html: body,
    })
  }
}