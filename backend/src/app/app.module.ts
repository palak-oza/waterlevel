import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module'; // Import UsersModule
import { SupabaseService } from './supabase.service'; // Import SupabaseService
import { SensorModule } from './sensor/sensor.module';
import { AdminService } from './admin/admin.service';
import { AdminController } from './admin/admin.controller';
import { PredictionModule } from './model/model.module';
import { AppService } from './app.service';
@Module({
  imports: [UsersModule, SensorModule,PredictionModule ],
  providers: [SupabaseService],
  exports: [SupabaseService],
  controllers: [], // Ensure SupabaseService is exported for use in other modules
})
export class AppModule {}
