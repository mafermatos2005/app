# Despliegue

**Entorno de desarrollo:** Node.js local (npm start).

**Entorno de producción (sugerido):**
- Hosting con soporte Node.js (por ejemplo Render, Railway o un VPS).
- Subir la carpeta backend/ completa (incluye server.js y package.json).
- Ejecutar npm install y luego npm start (o usar un gestor de procesos como PM2).
- El archivo dulcediva.db se genera solo en el servidor; considerar respaldos
  periódicos ya que SQLite guarda todo en ese único archivo.
- Activar HTTPS para proteger datos sensibles (dirección, alergias) en tránsito.
