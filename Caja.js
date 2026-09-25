const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

let productos = [
  { nombre: "Café Americano", precio: 15, categoria: "Bebida", stock: 10 },
  { nombre: "Chocolate Caliente", precio: 18, categoria: "Bebida", stock: 10 },
  { nombre: "Té", precio: 12, categoria: "Bebida", stock: 10 },
  { nombre: "Pan Dulce", precio: 10, categoria: "Postre", stock: 10 },
  { nombre: "Dona", precio: 12, categoria: "Postre", stock: 10 }
];

let pedidos = [];
let totalAcumulado = 0;

function notificarListo(numPedido) {
  console.log(`\nEl pedido #${numPedido} está LISTO.\n`);
}

function notificarCancelado(numPedido) {
  console.log(`\nEl pedido #${numPedido} ha sido CANCELADO.\n`);
}

async function cambiarEstadoPedido(callbackListo, callbackCancelado) {
  let numPedido = await rl.question("Número del pedido: ");
  let index = parseInt(numPedido) - 1;

  if (index >= 0 && index < pedidos.length) {
    console.log("1. Pedido listo");
    console.log("2. Pedido cancelado");
    let opcion = await rl.question("Elige el estado: ");

    if (opcion === "1") {
      callbackListo(numPedido);
    } else if (opcion === "2") {
      callbackCancelado(numPedido);
    } else {
      console.log("Opción no válida.");
    }
  } else {
    console.log("Pedido no encontrado.");
  }
}

function agregarProducto(nombre, precio, categoria, stock = 10) {
  productos.push({ nombre: nombre, precio: precio, categoria: categoria, stock: stock });
  console.log(`${nombre} agregado al menú.`);
}

function menuCaja() {
  console.log("\n===== CAJA =====");
  console.log("1. Ver productos");
  console.log("2. Agregar o modificar producto de un pedido");
  console.log("3. Agregar nuevo producto al menú");
  console.log("4. Ver lista de pedidos");
  console.log("5. Cobrar y ver total (Subtotal, IVA y Total)");
  console.log("6. Notificar estado del pedido (Callbacks)");
  console.log("7. Salir");
}

function calcularCuentaCaja() {
  if (pedidos.length === 0) {
    console.log("\nNo hay productos en el pedido actual.");
    return;
  }

  const listaItems = pedidos.flat();

  const subtotal = listaItems.reduce((suma, item) => {
    const { precio, cantidad = 1 } = item;
    return suma + (precio * cantidad);
  }, 0);

  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  console.log("\n====== DESGLOSE DE CUENTA ======");
  console.log(`Subtotal: $${subtotal.toFixed(2)}`);
  console.log(`IVA(16 %): $${iva.toFixed(2)}`);
  console.log(`Total a pagar: $${total.toFixed(2)}`);
  console.log("=================================");
}

async function caja() {
  let opcion = "";
  do {
    menuCaja();
    opcion = await rl.question("Elige una opción: ");
    opcion = opcion.trim();

    if (opcion === "1") {
      mostrar_productos(true);

    } else if (opcion === "2") {
      if (pedidos.length > 0) {
        console.log(`Actualmente hay ${pedidos.length} pedidos.`);
        let indexPedido = Number(await rl.question("Escribe el número del pedido a modificar (0 para nuevo): ")) - 1;
        if (indexPedido >= 0 && indexPedido < pedidos.length) {
          await agregarPedido(indexPedido);
        } else {
          await agregarPedido();
        }
      } else {
        await agregarPedido();
      }

    } else if (opcion === "3") {
      let nombre = await rl.question("Nombre del nuevo producto: ");
      let precio = await rl.question("Precio: ");
      let categoria = await rl.question("Escribe la categoría del producto (Bebida, Postre): ");
      let stock = await rl.question("Stock inicial: ");
      agregarProducto(nombre, parseFloat(precio), categoria, Number(stock));

    } else if (opcion === "4") {
      mostrar_pedidos();

    } else if (opcion === "5") {
      calcularCuentaCaja();

    } else if (opcion === "6") {
      await cambiarEstadoPedido(notificarListo, notificarCancelado);

    } else if (opcion === "7") {
      console.log("Saliendo de caja...");

    } else {
      console.log("Opción no válida.");
    }

  } while (opcion !== "7");
}

function mostrar_productos(mostrarAgotados = true) {
  console.log("\nLista de productos:");
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].stock > 0 || mostrarAgotados) {
      console.log(`${i + 1}. ${productos[i].nombre}: $${productos[i].precio} | Categoría: ${productos[i].categoria} | Stock: ${productos[i].stock}`);
    }
  }
}

function productoEnPromocion(index) {
  let d = new Date();
  return (productos[index].categoria === "Bebida" && d.getDay() == 2) || (productos[index].categoria === "Postre" && d.getDay() == 3);
}

async function agregarPedido(num = -1) {
  let pedidoActual = [];
  if (num >= 0) {
    pedidoActual = pedidos[num];
  }
  let seguirAgregando = true;
  do {
    mostrar_productos(false);
    let indiceProducto = Number(await rl.question("Elige el número del producto: ")) - 1;

    if (indiceProducto < 0 || indiceProducto >= productos.length || productos[indiceProducto].stock <= 0) {
      console.log("Producto no válido o sin stock.");
      continue;
    }

    let cantidad = Number(await rl.question("¿Cuántos quieres? "));

    if (cantidad > productos[indiceProducto].stock) {
      console.log(`No hay suficiente stock. Solo quedan ${productos[indiceProducto].stock}`);
      continue;
    }

    if (productoEnPromocion(indiceProducto)) {
      console.log("Este producto está en promoción al 2x1 el día de hoy");
      cantidad *= 2;
    }

    pedidoActual.push({
      nombre: productos[indiceProducto].nombre,
      precio: productos[indiceProducto].precio,
      cantidad: cantidad
    });

    productos[indiceProducto].stock -= cantidad;

    let respuesta = await rl.question("¿Agregar otro producto? (s/n): ");
    seguirAgregando = respuesta.toLowerCase() === "s";

  } while (seguirAgregando);

  if (num < 0) {
    pedidos.push(pedidoActual);
    console.log("Pedido creado con éxito\n");
  } else {
    pedidos[num] = pedidoActual;
    console.log("El pedido ha sido actualizado exitosamente\n");
  }
}

function mostrar_pedidos() {
  if (pedidos.length === 0) {
    console.log("\nNo hay pedidos aún.");
  } else {
    for (let i = 0; i < pedidos.length; i++) {
      if (Array.isArray(pedidos[i])) {
        console.log(`\nPedido ${i + 1}:`);
        for (let item of pedidos[i]) {
          console.log(`  - ${item.nombre} x${item.cantidad}: $${item.precio * item.cantidad}`);
        }
      } else {
        console.log(`- ${pedidos[i].nombre}: $${pedidos[i].precio}`);
      }
    }
  }
}

async function buscarProducto() {
  let opcionn = "";
  do {
    console.log("\n==== BUSCAR PRODUCTOS ====");
    console.log("1. Productos caros");
    console.log("2. Productos baratos");
    console.log("3. Bebidas");
    console.log("4. Postres");
    console.log("5. Regresar al menu");

    opcionn = await rl.question("Seleccione una opcion: ");
    switch (opcionn) {
      case "1":
        let productosCaros = productos.filter(producto => producto.precio > 20);
        console.log("Productos caros:");
        productosCaros.forEach(p => console.log(p.nombre + " - $" + p.precio));
        break;
      case "2":
        let productosBaratos = productos.filter(producto => producto.precio <= 20);
        console.log("Productos baratos:");
        productosBaratos.forEach(p => console.log(p.nombre + " - $" + p.precio));
        break;
      case "3":
        let bebidas = productos.filter(producto => producto.categoria === "Bebida");
        console.log("Bebidas:");
        bebidas.forEach(p => console.log(p.nombre + " - $" + p.precio));
        break;
      case "4":
        let postres = productos.filter(producto => producto.categoria === "Postre");
        console.log("Postres:");
        postres.forEach(p => console.log(p.nombre + " - $" + p.precio));
        break;
      case "5":
        break;
      default:
        console.log("Opción inválida");
        break;
    }
  } while (opcionn !== "5");
}

async function cocina() {
  let opcion = "";
  do {
    console.log("\n==== SISTEMA DE COCINA =====\n");
    console.log("1. Agregar producto");
    console.log("2. Mostrar productos");
    console.log("3. Editar producto");
    console.log("4. Buscar producto");
    console.log("5. Eliminar producto");
    console.log("6. Salir");

    opcion = await rl.question("Seleccione una opción: ");

    switch (opcion.trim()) {
      case "1":
        let nombre = await rl.question("Nombre del nuevo producto: ");
        let precio = await rl.question("Precio: ");
        let categoria = await rl.question("Escribe la categoría del producto (Bebida, Postre): ");
        let stock = await rl.question("Stock inicial: ");
        agregarProducto(nombre, parseFloat(precio), categoria, Number(stock));
        break;
      case "2":
        mostrar_productos(true);
        break;
      case "3":
        await editarProducto();
        break;
      case "4":
        await buscarProducto();
        break;
      case "5":
        console.log("Opción de eliminar seleccionada.");
        break;
      case "6":
        console.log("Saliendo de cocina...");
        break;
      default:
        console.log("Opción inválida.");
        break;
    }
  } while (opcion.trim() !== "6");
}

async function editarProducto() {
  if (productos.length === 0) {
    console.log("\nNo hay productos para editar.\n");
    return;
  }

  mostrar_productos(true);
  let numero = await rl.question("\nIngresa el número del producto que quieres editar: ");
  let posicion = parseInt(numero) - 1;

  if (posicion >= 0 && posicion < productos.length) {
    let nombre = await rl.question("Ingrese el nuevo nombre del producto: ");
    let precio = await rl.question("Ingrese el nuevo precio del producto: ");
    let stock = await rl.question("Ingrese el nuevo stock del producto: ");
    let categoria = await rl.question("Ingrese la categoría del producto (Bebida, Postre): ");

    productos[posicion].nombre = nombre;
    productos[posicion].precio = parseFloat(precio);
    productos[posicion].stock = Number(stock);
    productos[posicion].categoria = categoria;

    console.log("\nProducto editado correctamente.\n");
  } else {
    console.log("\nNúmero de producto inválido.\n");
  }
}

caja();