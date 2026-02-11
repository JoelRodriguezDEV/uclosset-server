import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Habilitar CORS
  // Permite solicitudes desde cualquier origen (útil para que Vercel no sea bloqueado)
  app.enableCors({
    origin: '*', // Permite solicitudes desde cualquier origen//
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // 2. Agregar prefijo global
  // Tus rutas quedarán como: https://.../api/products
  app.setGlobalPrefix('api');

  // 3. Configuración del Puerto y Host (CRUCIAL PARA RAILWAY)
  // El '0.0.0.0' es obligatorio en contenedores Docker/Railway para evitar el error 502/503
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
