# Diagrama entidad-relación (notación texto)

[CLIENTES] 1 ────── N [PEDIDOS]
     │
     │ 1
     │
     1
[CLIENTES_PRIVADOS]

[ATENCIONES]  (entidad independiente, no ligada directamente a un cliente
               porque el chat puede usarse antes del registro)

Cardinalidades:
- Un cliente puede tener muchos pedidos (1:N).
- Un cliente tiene exactamente un registro de datos privados (1:1).
- Las atenciones se registran de forma anónima o asociada, según el flujo del chatbot.
