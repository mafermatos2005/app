# Diagrama de clases (notación texto)

class Cliente {
  +int id
  +string nombre
  +string telefono
  +string email
  +registrar()
}

class DatosPrivados {
  +int id
  +int clienteId
  +string direccion
  +string alergias
}

class Pedido {
  +int id
  +int clienteId
  +string sabor
  +date fecha
}

class Atencion {
  +int id
  +string mensaje
  +string respuesta
  +int calificacion
  +generarSugerencia()
}

Cliente "1" -- "1" DatosPrivados
Cliente "1" -- "N" Pedido
