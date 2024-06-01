"use strict";

class Libro {
  constructor(titulo, autor, ISBN, estado) {
    this.titulo = titulo;
    this.autor = autor;
    this.isbn = ISBN;
    this.estado = estado;
  }

  prestar() {
    // Marca el libro como prestado.
  }

  devolver() {
    // Marca el libro como disponible.
  }

  mostrarInfo() {
    // Muestra la información completa del libro.
  }
}

class Usuario {
  constructor(nombre, id, librosPrestados) {
    this.nombre = nombre;
    this.id = id;
    this.librosPrestados = []; // array
  }

  prestarLibro(libro) {
    // Añade un libro a la lista de libros prestados del usuario.
  }

  devolverLibro(libro) {
    // Elimina un libro de la lista de libros prestados del usuario.
  }
  mostrarLibrosPrestados() {
    // Muestra la información de todos los libros prestados por el usuario.
  }
}

class Biblioteca {
  constructor(nombre, libros, usuarios) {
    this.nombre = nombre;
    this.libros = []; // array
    this.usuarios = []; //array
  }

  agregarLibro(libro) {
    // Añade un nuevo libro al catálogo de la biblioteca.
  }
  agregarUsuario(usuario) {
    // Registra un nuevo usuario en la biblioteca.
  }
  prestarLibro(usuario, libro) {
    // Permite a un usuario prestar un libro, si está disponible.
  }
  devolverLibro(usuario, libro) {
    // Permite a un usuario devolver un libro prestado.
  }
  mostrarLibrosDisponibles() {
    // Muestra la información de todos los libros disponibles en la biblioteca.
  }
  mostrarUsuario() {
    // Muestra la información de todos los usuarios registrados en la biblioteca.
  }
}
