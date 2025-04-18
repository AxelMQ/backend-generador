# 🛠️ Backend Generador

Este es un backend básico desarrollado en **Node.js + TypeScript** usando **Express**, diseñado como estructura base para futuros módulos.

---


## 📁 Estructura del Proyecto
- backend-generador/  
  ├── src/  
  │   ├── app.ts               # Punto de entrada principal del servidor  
  │   ├── controllers/         # Lógica de negocio  
  │   └── routes/              # Definición de rutas  
  ├── .env.example             # Variables de entorno de ejemplo  
  ├── .gitignore               # Archivos y carpetas ignoradas por git  
  ├── package.json             # Configuración de dependencias y scripts  
  ├── tsconfig.json            # Configuración de TypeScript  
  └── README.md                # Este archivo 😄

---

## 🚀 Scripts Disponibles

- `npm run dev` → Levanta el servidor en modo desarrollo con recarga automática (usando `ts-node-dev`).
- `npm run build` → Compila el código TypeScript a JavaScript en la carpeta `dist/`.
- `npm start` → Ejecuta el código ya compilado (`dist/app.js`).

---

## 📦 Dependencias

### Producción
- `express` → Framework web para crear el servidor.
- `cors` → Para habilitar peticiones desde distintos orígenes.
- `dotenv` → Carga variables desde el archivo `.env`.
- `body-parser` → Procesa el cuerpo de las solicitudes HTTP.
- `typeorm` → ORM para interactuar con la base de datos.
- `pg` → Conector de PostgreSQL para Node.js.

### Desarrollo
- `typescript` → Soporte de TypeScript.
- `ts-node-dev` → Recarga automática en desarrollo.
- `@types/*` → Tipados para librerías de terceros.
- `eslint` → Linter para mantener el código limpio.

---


## 🔌 Endpoints definidos

Rutas y controladores implementados (mock):

- `GET /api/projects` → Lista proyectos
- `POST /api/projects` → Crea proyecto
- `GET /api/projects/:id` → Obtiene detalles de un proyecto
- `PUT /api/projects/:id` → Actualiza un proyecto
- `DELETE /api/projects/:id` → Elimina un proyecto
- `POST /api/generate` → Simula generación de frontend desde un diseño

---

## 📌 Estado del Proyecto

✅ Estructura inicial lista  
✅ Rutas y controladores básicos creados (mock)  
✅ Conexión a base de datos PostgreSQL implementada con TypeORM  
✅ Creación automática de tablas con `synchronize: true` 
✅ CRUD de proyectos implementado 
🧠 Implementación lógica de generación de código (por definir)
🚧 Futuras mejoras en la generación de código real

---

## 🛢️ Configuración de Base de Datos

Este backend utiliza **PostgreSQL** como motor de base de datos y **TypeORM** como ORM.

## 🌱 Variables de Entorno

Para configurar la conexión, crear un archivo `.env` (basado en `.env.example`) con lo siguiente:

  - .env
  
  PORT=3000
  DB_HOST=localhost
  DB_PORT=5432
  DB_USERNAME=postgres
  DB_PASSWORD=tu_contraseña
  DB_NAME=frontend_generator

---

## 👤 Autor

Axel Alexander Mamani Quispia  
📍 Santa Cruz, Bolivia  
🎓 Estudiante de Ingeniería Informática - UAGRM

---

## 🧠 Notas

- Recordá ejecutar `npm install` antes de correr el proyecto.
- Este proyecto está diseñado para ser modular y escalable.


