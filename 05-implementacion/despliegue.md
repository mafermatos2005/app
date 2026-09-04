# Despliegue

**Entorno de desarrollo:** XAMPP local (Apache + MySQL + PHP).

**Entorno de producción (sugerido):**
- Hosting con soporte PHP + MySQL (por ejemplo Hostinger, cPanel).
- Subir `frontend/` y `backend/` al directorio público del hosting.
- Importar `dulce_diva.sql` desde phpMyAdmin del proveedor.
- Actualizar `conexion.php` con las credenciales reales de producción.
- Activar HTTPS para proteger el envío de datos sensibles (dirección, alergias).
- Restringir el acceso público a la carpeta `backend/` solo a peticiones desde
  el dominio del frontend.
