import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private projects : string[] = ['Project1','Project2','Project3','Project4'];

  getAllProjects(): string[] {
    return this.projects;
  }
  
}
