// user.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './users.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('adduser')
  async createUser(@Body() createUserDto: UserDto): Promise<any> {
    return this.userService.createUser(createUserDto);
  }

  @Get('getuser')
  async getUser(): Promise<UserDto[]>{
    return this.userService.getUser();
  }

  @Post(':id')
  async editUser(@Param('id') userId: string, @Body() editUserDto: UserDto): Promise<any> {
    return await this.userService.editUser(userId, editUserDto);
  }

  // Add more routes as needed
}
export default UserController

