Enunciado del Ejercicio: Sistema de Gestión de Biblioteca

Desarrolla un sistema de gestión de una biblioteca utilizando Programación Orientada a Objetos en JavaScript. El sistema debe incluir las siguientes clases y funcionalidades:

Clase Libro

Propiedades:
título (string)
autor (string)
ISBN (string)
estado (booleano, que indica si el libro está prestado o disponible)
Métodos:
prestar(): Marca el libro como prestado.
devolver(): Marca el libro como disponible.
mostrarInfo(): Muestra la información completa del libro.
Clase Usuario

Propiedades:
nombre (string)
ID (string)
librosPrestados (array de objetos Libro)
Métodos:
prestarLibro(libro): Añade un libro a la lista de libros prestados del usuario.
devolverLibro(libro): Elimina un libro de la lista de libros prestados del usuario.
mostrarLibrosPrestados(): Muestra la información de todos los libros prestados por el usuario.
Clase Biblioteca

Propiedades:
nombre (string)
libros (array de objetos Libro)
usuarios (array de objetos Usuario)
Métodos:
agregarLibro(libro): Añade un nuevo libro al catálogo de la biblioteca.
agregarUsuario(usuario): Registra un nuevo usuario en la biblioteca.
prestarLibro(usuario, libro): Permite a un usuario prestar un libro, si está disponible.
devolverLibro(usuario, libro): Permite a un usuario devolver un libro prestado.
mostrarLibrosDisponibles(): Muestra la información de todos los libros disponibles en la biblioteca.
mostrarUsuarios(): Muestra la información de todos los usuarios registrados en la biblioteca.
Implementa estas clases en JavaScript y crea un pequeño script que demuestre su funcionamiento mediante la creación de varios objetos de cada clase y el uso de sus métodos.
