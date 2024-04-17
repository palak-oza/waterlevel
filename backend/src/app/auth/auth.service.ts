// import { Injectable } from '@nestjs/common';
// import { SupabaseService } from '../supabase.service';
// import { EmailService } from './email.service';
// import { UserService } from '../users/user.service';
// @Injectable()
// export class AuthService {
//   constructor(
//     private readonly supabaseService: SupabaseService,
//     private readonly emailService: EmailService,
//     private readonly UserService: UserService
//   ) {}

//   async sendPasswordSettingLink(email: string): Promise<void> {
//     const token = await this.generateToken(email);
//     const setPasswordLink = `http/localhost:3000/set-password?token=${token}`;
//     await this.emailService.sendPasswordSettingEmail(email, setPasswordLink);
//   }

//   private async generateToken(email: string): Promise<string> {
//     // Generate token logic here (e.g., using JWT)
//     const token = /* generate token */;
//     return token;
//   }

//   async savePassword(email: string, password: string): Promise<void> {
//     await this.UserService.saveUser( password);
//   }
// }