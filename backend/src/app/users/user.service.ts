// user.service.ts
import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase.service'; // Correct import path
import { UserDto } from './users.dto';

@Injectable()
export class UserService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async createUser(createUserDto: UserDto): Promise<any> {
    const { name, email, phone, zip_code ,roles } = createUserDto;
    const { data, error } = await this.supabaseService
      .getClient()
      .from('users')
      .insert([{ name, email, phone, zip_code,roles }]);
    if (error) {
      return error.message;
    }
    return data;
  }

  async getUser(): Promise<UserDto[]> {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('users')
      .select('*');
  
    if (error) {
      throw new Error(error.message);
    }
  
    return data as UserDto[]; // Assuming data is an array of UserDto objects
  }

  async editUser(userId: string, editUserDto: UserDto): Promise<any> {
    const { name, email, phone, zip_code, roles } = editUserDto;
    const { data, error } = await this.supabaseService
      .getClient()
      .from('users')
      .update({ name, email, phone, zip_code, roles })
      .eq('user_id', userId);

    if (error) {
      return error.message || 'An error occurred';
    }

    return data;
  }
  
  async saveUser(password: string): Promise<void> {
    await this.supabaseService
    .getClient()
    .from('users')
    .insert([{ password }]);
  }
  
  // Add more methods as needed
}
