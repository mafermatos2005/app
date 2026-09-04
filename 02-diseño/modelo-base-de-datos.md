# Modelo de base de datos

**clientes** (datos públicos y semiprivados)
- id (PK)
- nombre
- telefono
- email
- creado_en

**clientes_privados** (datos privados y sensibles, tabla segregada)
- id (PK)
- cliente_id (FK → clientes.id)
- direccion
- alergias

**pedidos**
- id (PK)
- cliente_id (FK → clientes.id)
- sabor
- fecha

**atenciones** (interacciones del chatbot y calificaciones)
- id (PK)
- mensaje
- respuesta
- calificacion (1-5, puede ser NULL)
- fecha
