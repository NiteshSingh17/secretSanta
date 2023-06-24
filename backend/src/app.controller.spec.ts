import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SecretSantaService } from './secretSanta.service';
import { FileService } from './file.service';
import { ConfigModule } from '@nestjs/config';

describe('AppController', () => {
  let appController: AppController;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports : [
        ConfigModule.forRoot({
          envFilePath: '.env',
          isGlobal: true,
        }),],
      controllers: [AppController],
      providers: [AppService, SecretSantaService, FileService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.get()).toBe('Hello World!');
    });
  });
});
