import { Module } from '@nestjs/common';
import { SupabaseService } from '../supabase.service'; // Import SupabaseService
import { UserController } from './user.controller';
import {UserService} from './user.service'
@Module({
  providers: [UserService,SupabaseService], // Ensure SupabaseService is provided in the UsersModule
  controllers: [UserController],
  //exports: [SupabaseService], // If SupabaseService needs to be exported for dependency injection in other modules
})
export class UsersModule {}