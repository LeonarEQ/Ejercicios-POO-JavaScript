# 🛍️ Sistema de Gestión de Tienda Online

## Descripción

Desarrolla un sistema de gestión para una tienda online utilizando **Programación Orientada a Objetos (POO)** en JavaScript. Este sistema permitirá administrar productos, clientes y las transacciones de compra y devolución de productos.

## Requisitos del Sistema

### Clase `Producto`
- **Propiedades:**
  - `nombre` (string): El nombre del producto.
  - `precio` (number): El precio del producto.
  - `cantidad` (number): La cantidad disponible en el inventario.
  - `categoria` (string): La categoría a la que pertenece el producto.

- **Métodos:**
  - `actualizarPrecio(nuevoPrecio)`: Actualiza el precio del producto.
  - `actualizarCantidad(nuevaCantidad)`: Actualiza la cantidad disponible del producto.
  - `mostrarInfo()`: Muestra la información completa del producto.

### Clase `Cliente`
- **Propiedades:**
  - `nombre` (string): El nombre del cliente.
  - `email` (string): El correo electrónico del cliente.
  - `carrito` (array de objetos `Producto`): Lista de productos añadidos al carrito de compras del cliente.

- **Métodos:**
  - `añadirAlCarrito(producto)`: Añade un producto al carrito de compras del cliente.
  - `eliminarDelCarrito(producto)`: Elimina un producto del carrito de compras del cliente.
  - `mostrarCarrito()`: Muestra la información de todos los productos en el carrito de compras del cliente.

### Clase `Tienda`
- **Propiedades:**
  - `nombre` (string): El nombre de la tienda.
  - `productos` (array de objetos `Producto`): Catálogo de productos disponibles en la tienda.
  - `clientes` (array de objetos `Cliente`): Lista de clientes registrados en la tienda.

- **Métodos:**
  - `agregarProducto(producto)`: Añade un nuevo producto al catálogo de la tienda.
  - `registrarCliente(cliente)`: Registra un nuevo cliente en la tienda.
  - `procesarCompra(cliente)`: Procesa la compra de todos los productos en el carrito del cliente.
  - `mostrarProductosDisponibles()`: Muestra la información de todos los productos disponibles en la tienda.
  - `mostrarClientes()`: Muestra la información de todos los clientes registrados en la tienda.

## Objetivo

Implementa estas clases en JavaScript y crea un pequeño script que demuestre su funcionamiento mediante la creación de varios objetos de cada clase y el uso de sus métodos.

