# Manual de instalación

1. Instala XAMPP (incluye PHP, MySQL y Apache): https://www.apachefriends.org
2. Copia la carpeta del proyecto dentro de `C:\xampp\htdocs\dulce-diva`.
3. Abre el panel de control de XAMPP e inicia los módulos **Apache** y **MySQL**.
4. Ve a `http://localhost/phpmyadmin`, crea una base de datos y ejecuta el
   script `base-de-datos/dulce_diva.sql`.
5. Abre `backend/conexion.php` y confirma usuario/clave de MySQL (por defecto
   `root` sin clave en XAMPP).
6. Abre en el navegador: `http://localhost/dulce-diva/frontend/index.html`.
