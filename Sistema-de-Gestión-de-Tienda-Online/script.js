"use strict";

class Producto {
  constructor(nombre, precio, cantidad, categoria) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.categoria = categoria;
  }

  actualizarPrecio(nuevoPrecio) {
    // Actualiza el precio del producto.

    return (this.precio = nuevoPrecio);
  }

  actualizarCantidad(nuevaCantidad) {
    // Actualiza la cantidad disponible del producto.
    return (this.cantidad = nuevaCantidad);
  }
  mostrarInfo() {
    // Muestra la información completa del producto.
    return (
      "Nombre: " +
      this.nombre +
      "\nPrecio: " +
      this.precio +
      "\nCantidad: " +
      this.cantidad +
      "\nCategoría: " +
      this.categoria
    );
  }
}

let producto = new Producto("Abanico", 15, 1, "Accesorios");
let producto2 = new Producto("Aretes", 35, 50, "Belleza");

/*console.log(producto);
console.log(producto.actualizarPrecio(200));
console.log(producto);
console.log(producto.actualizarCantidad(2));
console.log(producto);*/

class Cliente {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
    this.carrito = [];
  }

  anadirAlCarrito(producto) {
    // Añade un producto al carrito de compras del cliente.
    return this.carrito.push(producto);
  }

  eliminarDelCarrito(producto) {
    // Elimina un producto del carrito de compras del cliente.
    return (this.carrito = this.carrito.filter(
      (element) => element !== producto
    ));
  }
  mostrarCarrito() {
    //Muestra la información de todos los productos en el carrito de compras del cliente.
    return this.carrito.map((element) => ({
      Nombre: element.nombre,
      Precio: element.precio,
      Cantidad: element.cantidad,
      Categoría: element.categoria,
    }));
  }
}

let cliente = new Cliente("Perdro", "pedro@gmail.com");

console.log(cliente.anadirAlCarrito(producto));
console.log(cliente.anadirAlCarrito(producto2));
//console.log(cliente.mostrarCarrito());
//console.log(cliente.eliminarDelCarrito(producto2));
//console.log(cliente.mostrarCarrito());

class Tienda {
  constructor(nombre) {
    this.nombre = nombre;
    this.productos = [];
    this.clientes = [];
  }

  agregarProducto(producto) {
    //Añade un nuevo producto al catálogo de la tienda.
    return this.productos.push(producto);
  }
  registrarCliente(cliente) {
    // Registra un nuevo cliente en la tienda.
    return this.clientes.push(cliente);
  }
  procesarCompra(cliente) {
    // Procesa la compra de todos los productos en el carrito del cliente.

    let total = cliente.carrito.reduce(
      (acc, producto) => acc + producto.precio,
      0
    );

    return "Total a pagar: " + total;
  }

  mostrarProductosDisponibles() {
    // Muestra la información de todos los productos disponibles en la tienda.

    return this.productos.map((element) => ({
      Nombre: element.nombre,
      Precio: element.precio,
      Cantidad: element.cantidad,
      Categoría: element.categoria,
    }));
  }
  mostrarClientes() {
    //Muestra la información de todos los clientes registrados en la tienda.
    return this.clientes.map((element) => ({
      Nombre: element.nombre,
      Email: element.email,
    }));
  }
}

let tienda = new Tienda("Media Markt");
console.log(tienda);
console.log(tienda.agregarProducto(producto));
console.log(tienda.registrarCliente(cliente));
console.log(tienda.procesarCompra(cliente));
console.log(tienda.mostrarProductosDisponibles());
console.log(tienda.mostrarClientes());
