import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Habilitar CORS (¡CRUCIAL!)
  // Esto permite que el puerto 5173 (Frontend) hable con el 3000 (Backend)
  app.enableCors();

  // 2. Agregar prefijo global
  // Esto hace que todas tus rutas empiecen con /api (ej: /api/products)
  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
