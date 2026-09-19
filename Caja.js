const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let productos = [
  { nombre: "Café Americano", precio: 15 },
  { nombre: "Chocolate Caliente", precio: 18 },
  { nombre: "Té", precio: 12 },
  { nombre: "Agua de sabor", precio: 10 },
  { nombre: "Refresco", precio: 15 },
  { nombre: "Pan Dulce", precio: 10 },
  { nombre: "Dona", precio: 12 },
  { nombre: "Galletas", precio: 8 },
  { nombre: "Sandwich", precio: 25 },
  { nombre: "Torta", precio: 30 },
  { nombre: "Papas fritas", precio: 15 },
  { nombre: "Fruta picada", precio: 15 },
  { nombre: "Yogurt", precio: 15 },
  { nombre: "Gelatina", precio: 10 }
];

let pedidos = [];

let totalAcumulado = 0;

function agregarPedido(index) {
  const producto = productos[index];
  pedidos.push(producto);
  totalAcumulado += producto.precio;
  console.log(producto.nombre + " agregado. Total acumulado: $" + totalAcumulado);
}

function mostrarProductos() {
  console.log("\nProductos:");
  productos.forEach((p, i) => console.log(i + 1 + ". " + p.nombre + " - $" + p.precio));
}

function mostrarPedidos() {
  console.log("\nLista de pedidos:");
  pedidos.forEach(p => console.log("- " + p.nombre + ": $" + p.precio));
  console.log("Total acumulado: $" + totalAcumulado);
}

function agregarProducto(nombre, precio) {
  productos.push({ nombre: nombre, precio: precio });
  console.log(nombre + " agregado al menú.");
}

function mostrarMenu() {
  console.log("\n===== CAJA =====");
  console.log("1. Ver productos");
  console.log("2. Agregar producto al pedido");
  console.log("3. Agregar nuevo producto al menú");
  console.log("4. Ver lista de pedidos y total acumulado");
  console.log("5. Salir");
}

function preguntar() {
  mostrarMenu();
  rl.question("Elige una opción: ", function (respuesta) {
    const opcion = respuesta.trim();

    if (opcion === "1") {
      mostrarProductos();
      rl.question("\nPresiona Enter para volver al menú...", function () {
        preguntar();
      });

    } else if (opcion === "2") {
      mostrarProductos();
      rl.question("Número de producto: ", function (num) {
        const index = parseInt(num) - 1;
        if (index >= 0 && index < productos.length) {
          agregarPedido(index);
        } else {
          console.log("Producto no válido.");
        }
        preguntar();
      });

    } else if (opcion === "3") {
      rl.question("Nombre del nuevo producto: ", function (nombre) {
        rl.question("Precio: ", function (precio) {
          agregarProducto(nombre, parseFloat(precio));
          preguntar();
        });
      });

    } else if (opcion === "4") {
      mostrarPedidos();
      preguntar();

    } else if (opcion === "5") {
      console.log("\nTotal final: $" + totalAcumulado);
      rl.close();

    } else {
      console.log("Opción no válida.");
      preguntar();
    }
  });
}

preguntar();