┌──────────────────┐
│     USUARIOS     │
├──────────────────┤
│ _id              │
│ nombre           │
│ correo           │
│ password         │
│ rol              │
└────────┬─────────┘
         │ 1
         │
         │ N
┌────────▼─────────┐
│   REPOSITORIOS   │
├──────────────────┤
│ _id              │
│ nombre           │
│ descripcion      │
│ usuario_id       │
└────────┬─────────┘
         │ 1
         │
         │ N
┌────────▼─────────┐
│     CARPETAS     │
├──────────────────┤
│ _id              │
│ nombre           │
│ repositorio_id   │
│ carpeta_padre_id │
└────────┬─────────┘
         │ 1
         │
         │ N
┌────────▼─────────┐
│    DOCUMENTOS    │
├──────────────────┤
│ _id              │
│ nombre           │
│ tipo             │
│ extension        │
│ repositorio_id   │
│ carpeta_id       │
│ usuario_id       │
│ categoria        │
│ estado            │
└───────┬──────────┘
        │
        ├──────────────────┐
        │                  │
        ▼                  ▼
┌────────────────┐  ┌───────────────┐
│ PROCESAMIENTOS │  │    ERRORES    │
├────────────────┤  ├───────────────┤
│ _id            │  │ _id           │
│ documento_id   │  │ documento_id  │
│ tipo           │  │ tipo          │
│ estado         │  │ mensaje       │
│ fecha_inicio   │  │ fecha         │
│ fecha_fin      │  │ estado        │
└───────┬────────┘  └───────────────┘
        │
        ▼
┌────────────────────┐
│    RESULTADOS_IA   │
├────────────────────┤
│ _id                │
│ documento_id       │
│ procesamiento_id   │
│ categoria          │
│ resumen            │
│ informacion_extraida│
│ contenido_procesado│
│ embeddings         │
└────────────────────┘


┌──────────────────┐
│     USUARIOS     │
└────────┬─────────┘
         │
         │
         ▼
┌──────────────────┐
│    CONSULTAS     │
├──────────────────┤
│ _id              │
│ usuario_id       │
│ documento_id     │
│ pregunta         │
│ respuesta        │
│ fecha             │
└──────────────────┘
