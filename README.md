# U Closset - Backend (MVP)

Este es el núcleo de la plataforma e-commerce **U Closset**, encargado de gestionar la lógica de negocio, la persistencia de datos y el suministro de servicios mediante una API REST funcional.

## Stack Tecnológico

- **Framework:** [NestJS](https://nestjs.com/) (Node.js) para una arquitectura modular y escalable.
- **ORM:** [Prisma](https://www.prisma.io/) para el modelado y consultas a la base de datos.
- **Base de Datos:** PostgreSQL.
- **Lenguaje:** TypeScript para un desarrollo robusto con tipado estático.

## Estructura del Proyecto

```text
src/
├── main.ts          # Punto de entrada de la aplicación
├── app.module.ts    # Módulo raíz que integra la lógica del sistema
├── products/        # Gestión de catálogo de productos
├── orders/          # Procesamiento de órdenes de compra
└── prisma/          # Configuración del esquema y migraciones


Instalación y Configuración
Sigue estos pasos para levantar el entorno de desarrollo:

1. Clonar el repositorio
Bash

git clone [https://github.com/TU_USUARIO/u-closset-backend.git](https://github.com/TU_USUARIO/u-closset-backend.git)
cd u-closset-backend
2. Instalar dependencias
Bash

npm install
3. Configurar variables de entorno
Crea un archivo .env en la raíz del proyecto y define la conexión a tu base de datos:

Code snippet

DATABASE_URL="postgresql://USUARIO:PASSWORD@localhost:5432/u_closset_db?schema=public"
PORT=3000
4. Sincronizar la base de datos con Prisma
Ejecuta las migraciones para crear las tablas necesarias:

Bash

npx prisma migrate dev --name init
5. Iniciar la aplicación
Bash

# Modo desarrollo con auto-reload
npm run start:dev
Endpoints Principales (MVP)
GET /api/products: Obtiene la lista completa de productos.

GET /api/products/:id: Obtiene el detalle de un producto específico.

POST /api/orders: Registra una nueva orden de compra.

Notas de Desarrollo
Validación: Se utiliza class-validator para asegurar que los datos recibidos en la API sean correctos.

Seguridad: El archivo .env está excluido del control de versiones para proteger las credenciales de la base de datos.

Desarrollado por Joel Rodriguez como parte del ecosistema U Closset.
```
