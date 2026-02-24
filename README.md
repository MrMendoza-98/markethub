This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# 📚 Directorio de Emprendimientos

Aplicación web desarrollada con **Next.js 15** que permite explorar emprendimientos por categoría, con filtros, búsqueda, paginación y experiencia responsive tipo aplicación móvil.

El proyecto está diseñado con principios **SOLID**, **DRY** y arquitectura modular para facilitar su evolución hacia API o base de datos persistente.

---

## ✨ Características

### 🔎 Exploración
- Listado de emprendimientos por categoría
- Vista en **galería** o **lista**
- Ordenamiento alfabético (A-Z / Z-A)
- Búsqueda por nombre o descripción
- Paginación de resultados

### 📱 Experiencia Responsive
- Barra de filtros horizontal en escritorio
- Barra flotante tipo app en móvil
- Modales centrados para filtros en pantallas pequeñas

### 🔗 Acciones por emprendimiento
Cada tarjeta puede tener una acción principal:
- Enviar email
- Llamar por teléfono
- Abrir WhatsApp
- Abrir Instagram
- Visitar sitio web

### 🧱 Arquitectura
- Componentes reutilizables con shadcn/ui
- Separación por capas (domain, application, infrastructure)
- Repositorio basado en JSON (temporal)
- Estado sincronizado con URL (SEO friendly)

---

## 🏗️ Estructura del Proyecto
