import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  // 1. Habilitar CORS mejorado
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // 2. Prefijo global para la API de U Closset
  app.setGlobalPrefix('api');

  // 3. Configuración del Puerto y Host para Railway
  // Usar 0.0.0.0 asegura que la app escuche peticiones externas al contenedor
  const port = process.env.PORT || 3000;

  await app.listen(port, '0.0.0.0');

  // 4. Log informativo con la URL real
  const url = await app.getUrl();
  logger.log(`U Closset API is running on: ${url}`);
}
bootstrap();
