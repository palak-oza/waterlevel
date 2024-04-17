import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      secure: false,
      auth: {
        user: 'palak.s.oza@gmail.com',
        pass: 'palak.s.oza',
      },
    });
  }

  async sendPasswordSettingEmail(email: string, setPasswordLink: string): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: 'palak.s.oza@gmail.com',
        to: email,
        subject: 'Set Your Password',
        html: `<p>Please click on the following link to set your password: <a href="${setPasswordLink}">${setPasswordLink}</a></p>`,
      });
      console.log('Password setting email sent successfully');
    } catch (error) {
      console.error('Error sending password setting email:', error);
      throw new Error('Failed to send password setting email');
    }
  }
}
