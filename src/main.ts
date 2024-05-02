import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //*ruta fija global para todo el backend
  app.setGlobalPrefix('api/v2')


  await app.listen(3000);
}
bootstrap();
