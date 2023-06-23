import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFiles,
  Res,
  StreamableFile,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get() {
    return this.appService.get();
  }

  @Post('santa')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'emplyees', maxCount: 1 },
      { name: 'previousYear', maxCount: 1 },
    ]),
  )
  async secretSanta(@UploadedFiles() files: any){
    let file = await this.appService.santaFileHandler(files);
    return {file};
  }
}
