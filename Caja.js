const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

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

async function agregarPedido(index) {
  const producto = productos[index];
  pedidos.push(producto);
  totalAcumulado += producto.precio;
  console.log(producto.nombre + " agregado. Total acumulado: $" + totalAcumulado);
}

async function mostrar_productos() {
  console.log("\nProductos:");
  productos.forEach((p, i) => console.log(i + 1 + ". " + p.nombre + " - $" + p.precio));
}

async function mostrar_pedidos() {
  console.log("\nLista de pedidos:");
  pedidos.forEach(p => console.log("- " + p.nombre + ": $" + p.precio));
  console.log("Total acumulado: $" + totalAcumulado);
}

async function agregarProducto(nombre, precio) {
  productos.push({ nombre: nombre, precio: precio });
  console.log(nombre + " agregado al menú.");
}

async function menuCaja() {
  console.log("\n===== CAJA =====");
  console.log("1. Ver productos");
  console.log("2. Agregar producto al pedido");
  console.log("3. Agregar nuevo producto al menú");
  console.log("4. Ver lista de pedidos y total acumulado");
  console.log("5. Salir");
}

async function caja() {
  let opcion = 0;
  do {
    await menuCaja();
    opcion = await rl.question("Elige una opción: ");
    opcion = opcion.trim();

    if (opcion === "1") {
      await mostrar_productos();
      await rl.question("\nPresiona Enter para volver al menú...");

    } else if (opcion === "2") {
      await mostrar_productos();
      let num = await rl.question("Número de producto: ");
      const index = parseInt(num) - 1;
      if (index >= 0 && index < productos.length) {
        await agregarPedido(index);
      } else {
        console.log("Producto no válido.");
      }

    } else if (opcion === "3") {
      let nombre = await rl.question("Nombre del nuevo producto: ");
      let precio = await rl.question("Precio: ");
      await agregarProducto(nombre, parseFloat(precio));

    } else if (opcion === "4") {
      await mostrar_pedidos();

    } else if (opcion === "5") {
      console.log("\nTotal final: $" + totalAcumulado);
      rl.close();

    } else {
      console.log("Opción no válida.");
    }

  } while (opcion !== "5");
}

caja();