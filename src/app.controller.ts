import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

// Define el MessagePattern para este método 
  @MessagePattern('project-ms')
  getAllProjects(): string[] {
    return this.appService.getAllProjects();
  }
}
