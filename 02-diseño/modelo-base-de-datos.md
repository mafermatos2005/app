# ESTRUCTURA DE BASE DE DATOS – MONGODB

## 1. Nombre de la base de datos

La base de datos del Sistema Inteligente de Gestión y Análisis Documental se denominará:

`gestion_documental_ia`

## 2. Tecnología

Se utilizará MongoDB como sistema de gestión de base de datos NoSQL orientado a documentos.

MongoDB permitirá almacenar información relacionada con usuarios, repositorios, carpetas, documentos, procesamiento documental, resultados de Inteligencia Artificial, consultas y errores.

## 3. Colecciones

La base de datos estará compuesta inicialmente por las siguientes colecciones:

- usuarios
- repositorios
- carpetas
- documentos
- procesamientos
- resultados_ia
- consultas
- errores

## 4. Colección usuarios

Almacena la información de los usuarios que tienen acceso al sistema.

### Campos

- `_id`: Identificador único.
- `nombre`: Nombre del usuario.
- `correo`: Correo electrónico.
- `password`: Contraseña almacenada de forma segura.
- `rol`: Rol del usuario.
- `fecha_creacion`: Fecha de creación de la cuenta.
- `estado`: Estado de la cuenta.

## 5. Colección repositorios

Almacena los repositorios creados por los usuarios.

### Campos

- `_id`: Identificador del repositorio.
- `nombre`: Nombre del repositorio.
- `descripcion`: Descripción.
- `usuario_id`: Identificador del usuario propietario.
- `fecha_creacion`: Fecha de creación.
- `estado`: Estado del repositorio.

## 6. Colección carpetas

Permite organizar los documentos dentro de los repositorios.

### Campos

- `_id`: Identificador de la carpeta.
- `nombre`: Nombre de la carpeta.
- `repositorio_id`: Identificador del repositorio.
- `carpeta_padre_id`: Identificador de la carpeta padre cuando exista.
- `fecha_creacion`: Fecha de creación.

## 7. Colección documentos

Almacena los metadatos de los documentos cargados.

### Campos

- `_id`: Identificador del documento.
- `nombre`: Nombre interno.
- `nombre_original`: Nombre original del archivo.
- `tipo`: Tipo MIME.
- `extension`: Extensión.
- `tamano`: Tamaño del archivo.
- `ruta`: Ubicación del archivo.
- `repositorio_id`: Repositorio al que pertenece.
- `carpeta_id`: Carpeta correspondiente.
- `usuario_id`: Usuario que cargó el documento.
- `categoria`: Categoría asignada.
- `estado_procesamiento`: Estado actual.
- `fecha_carga`: Fecha de carga.

Los formatos mínimos soportados serán PDF, DOCX y TXT.

## 8. Colección procesamientos

Registra los procesos realizados sobre los documentos.

### Campos

- `_id`: Identificador.
- `documento_id`: Documento procesado.
- `tipo_procesamiento`: Tipo de procesamiento realizado.
- `estado`: Estado del procesamiento.
- `fecha_inicio`: Inicio del procesamiento.
- `fecha_fin`: Finalización.
- `error`: Información del error cuando corresponda.

## 9. Colección resultados_ia

Almacena los resultados generados mediante Inteligencia Artificial.

### Campos

- `_id`: Identificador.
- `documento_id`: Documento analizado.
- `procesamiento_id`: Procesamiento asociado.
- `categoria`: Categoría identificada.
- `resumen`: Resumen generado.
- `informacion_extraida`: Información relevante extraída.
- `contenido_procesado`: Contenido utilizado para el análisis.
- `embeddings`: Representaciones vectoriales cuando sean utilizadas.
- `fecha_procesamiento`: Fecha del análisis.

## 10. Colección consultas

Registra las preguntas realizadas por los usuarios.

### Campos

- `_id`: Identificador.
- `usuario_id`: Usuario que realizó la consulta.
- `documento_id`: Documento relacionado, cuando corresponda.
- `pregunta`: Pregunta realizada.
- `respuesta`: Respuesta generada.
- `fecha`: Fecha de la consulta.

## 11. Colección errores

Registra errores relacionados con el procesamiento documental.

### Campos

- `_id`: Identificador.
- `documento_id`: Documento relacionado.
- `tipo`: Tipo de error.
- `mensaje`: Descripción.
- `fecha`: Fecha del error.
- `estado`: Estado del error.

## 12. Relaciones lógicas

Las principales relaciones del sistema son:

Usuario → Repositorio

Repositorio → Carpetas

Carpeta → Documentos

Documento → Procesamientos

Procesamiento → Resultados de IA

Usuario → Consultas

Documento → Consultas

Documento → Errores

## 13. Justificación de MongoDB

MongoDB resulta adecuado para el proyecto debido a que permite almacenar información en documentos flexibles y facilita trabajar con información documental y resultados generados por Inteligencia Artificial.

La estructura puede evolucionar conforme se incorporen nuevas características al sistema sin depender de una estructura relacional rígida.
