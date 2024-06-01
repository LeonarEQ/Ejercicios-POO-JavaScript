# 📚 Sistema de Gestión de Biblioteca

## Descripción

Desarrolla un sistema de gestión para una biblioteca utilizando Programación Orientada a Objetos (POO) en JavaScript. Este sistema permitirá administrar libros, usuarios y las transacciones de préstamo y devolución de libros.

## Requisitos del Sistema

### Clase Libro

- **Propiedades:**

  - `título` (string): El título del libro.
  - `autor` (string): El autor del libro.
  - `ISBN` (string): El código ISBN del libro.
  - `estado` (boolean): Indica si el libro está prestado (true) o disponible (false).

- **Métodos:**
  - `prestar()`: Marca el libro como prestado.
  - `devolver()`: Marca el libro como disponible.
  - `mostrarInfo()`: Muestra la información completa del libro.

### Clase Usuario

- **Propiedades:**

  - `nombre` (string): El nombre del usuario.
  - `ID` (string): El identificador único del usuario.
  - `librosPrestados` (array de objetos `Libro`): Lista de libros prestados por el usuario.

- **Métodos:**
  - `prestarLibro(libro)`: Añade un libro a la lista de libros prestados del usuario.
  - `devolverLibro(libro)`: Elimina un libro de la lista de libros prestados del usuario.
  - `mostrarLibrosPrestados()`: Muestra la información de todos los libros prestados por el usuario.

### Clase Biblioteca

- **Propiedades:**

  - `nombre` (string): El nombre de la biblioteca.
  - `libros` (array de objetos `Libro`): Catálogo de libros disponibles en la biblioteca.
  - `usuarios` (array de objetos `Usuario`): Lista de usuarios registrados en la biblioteca.

- **Métodos:**
  - `agregarLibro(libro)`: Añade un nuevo libro al catálogo de la biblioteca.
  - `agregarUsuario(usuario)`: Registra un nuevo usuario en la biblioteca.
  - `prestarLibro(usuario, libro)`: Permite a un usuario prestar un libro, si está disponible.
  - `devolverLibro(usuario, libro)`: Permite a un usuario devolver un libro prestado.
  - `mostrarLibrosDisponibles()`: Muestra la información de todos los libros disponibles en la biblioteca.
  - `mostrarUsuarios()`: Muestra la información de todos los usuarios registrados en la biblioteca.

## Objetivo

Implementa estas clases en JavaScript y crea un pequeño script que demuestre su funcionamiento mediante la creación de varios objetos de cada clase y el uso de sus métodos.
