# Arquitectura del sistema

Arquitectura cliente-servidor de 3 capas:

┌─────────────────────┐      HTTP/JSON      ┌─────────────────────┐      SQL      ┌──────────────┐
│  Frontend (cliente)  │ ───────────────────▶ │  Backend (servidor)  │ ─────────────▶ │  Base de datos │
│  index.html          │ ◀─────────────────── │  PHP (conexion.php,  │ ◀───────────── │  MySQL         │
│  styles.css           │                     │  clientes.php,        │               │  dulce_diva.sql│
│  script.js             │                    │  pedidos.php,          │              │                │
│                         │                    │  atencion.php)          │             │                │
└─────────────────────┘                      └─────────────────────┘               └──────────────┘

- El **frontend** consume el backend mediante `fetch()` en formato JSON.
- El **backend** en PHP valida los datos y ejecuta consultas preparadas sobre MySQL.
- La **base de datos** separa físicamente los datos públicos/semiprivados de los
  privados/sensibles en tablas distintas.
