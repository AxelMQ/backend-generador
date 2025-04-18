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

## 🌱 Variables de Entorno

Crear un archivo `.env` en la raíz (no se sube al repo). Como guía, usar el `.env.example`:

```env
PORT=3000


---

## 📌 Estado del Proyecto

✅ Estructura inicial lista  
✅ Rutas y controladores básicos creados (mock)  
🗃️ Conexión a base de datos (por definir) 
🧠 Implementación lógica de generación de código (por definir)
---

## 👤 Autor

Axel Alexander Mamani Quispia  
📍 Santa Cruz, Bolivia  
🎓 Estudiante de Ingeniería Informática - UAGRM

---

## 🧠 Notas

- Recordá ejecutar `npm install` antes de correr el proyecto.
- Este proyecto está diseñado para ser modular y escalable.


