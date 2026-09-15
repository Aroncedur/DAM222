
console.og("Hola node.js");

let edad1 =20;
let edad2 =11;

console.log("Edad Promedio:  ");
console.log((edad1 + edad2)/2);

/*Medir tiempo de un proceso*/
console.time("miProceso");
    for(let i=0; i<10000000; i++) {}
    console.timeEnd("MiProceso")
    
