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
    this.libros.push(libro);

    return "'" + libro.titulo + "'" + " agregado con éxito";
  }
  agregarUsuario(usuario) {
    // Registra un nuevo usuario en la biblioteca.
    this.usuarios.push(usuario);

    return "Usuario: " + usuario.nombre + " (agregado con éxito)";
  }
  prestarLibro(usuario, libro) {
    // Permite a un usuario prestar un libro, si está disponible.
    if (libro.estado === "Disponible") {
      usuario.prestarLibro(libro);
      libro.prestar();
    } else {
      console.log("Libro no disponible");
    }

    return usuario.mostrarLibrosPrestados();
  }
  devolverLibro(usuario, libro) {
    // Permite a un usuario devolver un libro prestado.
    usuario.devolverLibro(libro);
    libro.estado = "Disponible";
    return "Libro: " + "'" + libro.titulo + "'" + " ha sido devuelto";
  }
  mostrarLibrosDisponibles() {
    // Muestra la información de todos los libros disponibles en la biblioteca.
    return this.libros
      .filter((element) => element.estado == "Disponible")
      .map((key) => ({ Titulo: key.titulo, Autor: key.autor }));
  }

  mostrarUsuarios() {
    // Muestra la información de todos los usuarios registrados en la biblioteca.

    return this.usuarios.map((key) => console.log(key));
  }
}

// Métodos de Libro
const nuevolibro = new Libro(
  "Lo que el viento se llevo",
  "Margaret Mitchell",
  "ABC12345",
  "Ocupado"
);

console.log(nuevolibro);
console.log(nuevolibro.prestar());
console.log(nuevolibro.devolver());
console.log(nuevolibro.mostrarInfo());
console.log(nuevolibro);

// Métodos de Usuario
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

// Métodos de Biblioteca
const nuevaBiblioteca = new Biblioteca("Casa del Libro");
console.log(nuevaBiblioteca.agregarLibro(nuevolibro));
console.log(
  nuevaBiblioteca.agregarLibro(
    new Libro(
      "Padre Rico Padre Pobre",
      "Robert Kiyosaki",
      "DFG54321",
      "Disponible"
    )
  )
);
console.log(nuevaBiblioteca.agregarUsuario(nuevoUsuario));
console.log(nuevaBiblioteca.prestarLibro(nuevoUsuario, nuevolibro));
console.log(nuevaBiblioteca.devolverLibro(nuevoUsuario, nuevolibro));
console.log(nuevaBiblioteca.mostrarLibrosDisponibles());
console.log(nuevaBiblioteca.mostrarUsuarios());
