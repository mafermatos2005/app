CREATE DATABASE IF NOT EXISTS dulce_diva CHARACTER SET utf8mb4;
USE dulce_diva;

CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  telefono VARCHAR(20),
  email VARCHAR(100),
  creado_en DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE clientes_privados (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT NOT NULL,
  direccion VARCHAR(200),
  alergias VARCHAR(200),
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE pedidos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT NOT NULL,
  sabor VARCHAR(50),
  fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE atenciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  mensaje TEXT,
  respuesta TEXT,
  calificacion TINYINT CHECK (calificacion BETWEEN 1 AND 5),
  fecha DATETIME DEFAULT CURRENT_TIMESTAMP
);
