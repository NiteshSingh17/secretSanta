import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();
  const configService = app.get(ConfigService);
  const frontendBaseUrl = configService.get('FRONEND_URL') || 'http://localhost:3000/';
  app.enableCors({
    // origin: frontendBaseUrl
  });
  const port = configService.get('PORT') || 3001;
  await app.listen(port);
}
bootstrap();
