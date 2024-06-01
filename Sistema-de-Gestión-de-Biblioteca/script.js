"use strict";

class Libro {
  constructor(titulo, autor, ISBN, estado) {
    this.titulo = titulo;
    this.autor = autor;
    this.isbn = ISBN;
    this.estado = estado;
  }

  prestar() {
    this.estado = "Prestado";
    // Marca el libro como prestado.
    return "El libro ahora está: " + this.estado;
  }

  devolver() {
    // Marca el libro como disponible.
    this.estado = "Disponible";
    return "El libro ahora está: " + this.estado;
  }

  mostrarInfo() {
    // Muestra la información completa del libro.
    return (
      "Título: " +
      this.titulo +
      "\nAutor: " +
      this.autor +
      "\nISBN: " +
      this.isbn +
      "\nEstado: " +
      this.estado
    );
  }
}

class Usuario {
  constructor(nombre, id) {
    this.nombre = nombre;
    this.id = id;
  }

  librosPrestados = [];

  prestarLibro(libro) {
    // Añade un libro a la lista de libros prestados del usuario.
    this.librosPrestados.push(libro);
    libro.prestar();
    return "'" + libro.titulo + "'" + " fue agregado a tu lista";
  }

  devolverLibro(libro) {
    // Elimina un libro de la lista de libros prestados del usuario.
    this.librosPrestados.splice(libro);
    return "'" + libro.titulo + "'" + " fue removido de tu lista";
  }
  mostrarLibrosPrestados() {
    // Muestra la información de todos los libros prestados por el usuario.
    return this.librosPrestados.map((element) => ({
      Titulo: element.titulo,
      Autor: element.autor,
      ISBN: element.isbn,
      Estado: element.estado,
    }));
  }
}

class Biblioteca {
  constructor(nombre) {
    this.nombre = nombre;
  }

  libros = [];
  usuarios = [];

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

const nuevolibro = new Libro(
  "Lo que el viento se llevo",
  "Margaret Mitchell",
  "ABC12345",
  "Disponible"
);

/*console.log(nuevolibro);
console.log(nuevolibro.prestar());
console.log(nuevolibro.devolver());
console.log(nuevolibro.mostrarInfo());
console.log(nuevolibro);*/

const nuevoUsuario = new Usuario("Pedro", "Y5640683Q");
console.log(nuevoUsuario);
console.log(nuevoUsuario.prestarLibro(nuevolibro));
console.log(
  nuevoUsuario.prestarLibro(
    new Libro(
      "Padre Rico Padre Pobre",
      "Robert Kiyosaki",
      "DFG54321",
      "Disponible"
    )
  )
);
console.log(nuevoUsuario.mostrarLibrosPrestados());

console.log(nuevoUsuario);
