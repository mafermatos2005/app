# Casos de prueba

| ID   | Caso                                             | Resultado esperado                                  |
|------|---------------------------------------------------|--------------------------------------------------------|
| CP01 | Registrar cliente con todos los campos válidos     | Mensaje "Registro exitoso" y fila creada en `clientes`. |
| CP02 | Registrar cliente sin marcar consentimiento        | El sistema bloquea el envío y muestra error.           |
| CP03 | Enviar mensaje al chatbot con la palabra "sabor"   | El chatbot responde con los sabores disponibles.       |
| CP04 | Calificar la atención con 5 estrellas               | Se guarda un registro en `atenciones` con calificacion=5.|
| CP05 | Generar el informe mensual sin datos aún            | Muestra 0 personas atendidas y promedio 0.              |
| CP06 | Cambiar idioma a inglés                             | Todos los textos con `data-en` cambian correctamente.  |
