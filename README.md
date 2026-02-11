# U Closset - Backend (Fullstack Training Prototype) 🚀

Este repositorio es el núcleo lógico de **U Closset**, un proyecto desarrollado exclusivamente con fines educativos y de práctica profesional. El objetivo principal es pulir habilidades de desarrollo Fullstack, abarcando desde el modelado de bases de datos hasta la integración de servicios externos en un entorno de e-commerce real.

## 🎯 Propósito del Proyecto

Este backend sirve como un prototipo experimental para:

- Dominar la arquitectura modular con **NestJS**.
- Implementar relaciones complejas y migraciones con **Prisma**.
- Practicar la manipulación y transformación de datos provenientes de APIs externas.
- Consolidar el flujo completo de una aplicación comercial (Frontend + Backend + DB).

## 🛠️ Stack Tecnológico

- **Framework:** [NestJS](https://nestjs.com/) (Node.js).
- **ORM:** [Prisma](https://www.prisma.io/).
- **Base de Datos:** PostgreSQL.
- **Lenguaje:** TypeScript.

## 📦 Integraciones Externas

Para este MVP y con el fin de agilizar el desarrollo del catálogo, el backend consume datos de:

- **[FakeStoreAPI](https://fakestoreapi.com/):** Utilizada como fuente inicial de productos y categorías para simular un entorno de inventario real sin necesidad de una carga manual masiva en esta etapa de desarrollo.

## 🚀 Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/TU_USUARIO/u-closset-backend.git](https://github.com/TU_USUARIO/u-closset-backend.git)
   cd u-closset-backend
   Instalar dependencias:
   ```

Bash

npm install
Variables de Entorno (.env):
Crea un archivo .env con tu cadena de conexión local:

Code snippet

DATABASE_URL="postgresql://USUARIO:PASSWORD@localhost:5432/u_closset_db?schema=public"
PORT=3000
Sincronización de Base de Datos:

Bash

npx prisma migrate dev --name init
Iniciar en modo desarrollo:

Bash

npm run start:dev
📡 Endpoints del Prototipo
GET /api/products: Listado de productos (Sincronizados/Basados en FakeStoreAPI).

GET /api/products/:id: Detalle del producto.

POST /api/orders: Endpoint para la persistencia de órdenes del MVP.

Desarrollado por Joel Miller | En constante aprendizaje y mejora.

---

### Cómo subirlo ahora:

Como ya conoces el flujo de Git, solo repite estos comandos en tu terminal de **Back-UC**:

1.  **Añadir el cambio:** `git add README.md`
2.  **Confirmar:** `git commit -m "docs: clarify project purpose and FakeStoreAPI integration"`
3.  **Subir:** `git push origin main`

¿Te gustaría que trabajemos en un script de **Seed** para que tu backend pueda descargar automáticamente los productos de FakeStoreAPI y guardarlos en tu propia base de datos PostgreSQL?

```

```
