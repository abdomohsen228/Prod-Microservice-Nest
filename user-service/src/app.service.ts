import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private users = [];
  public async getAllUser() {
    return this.users;
  }
  public async createUser(user: any) {
    return this.users.push(user);
  }
}
