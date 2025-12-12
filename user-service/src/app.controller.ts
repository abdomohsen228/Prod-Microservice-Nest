import { Body, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // message pattern in tcp is sync pattern (req - res)(blocking)
  @MessagePattern({ cmd: 'GET_ALL_USERS' })
  public async getAllUsers() {
    return this.appService.getAllUser();
  }
  @EventPattern('CREATE_USER')
  public async createUser(@Body() user: any) {
    return this.appService.createUser(user);
  }
}
