// Contar cuantos de una lista de edades pueden votar
// Instrucciones:
// Crea un arreglo de edades (pedir a usuario)
// recorre el arreglo
// Cuenta cuántos son mayores de 18
// Mostrar total
// Op 1 = agregar edad
// Op 2 = mostrar analisis
// Op 3 = mostar edades capturadas
// Op 4 = salir
const { ask } = require("../helpers/input");

function statisticalAnalysis(ages) {
  let adults = [];

  for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
      adults.push(ages[i]);
    }
  }

  return adults;
}

async function main() {
  let opcion = "";
  let edades = [];

  // Op 1 = agregar edad
  // Op 2 = mostrar analisis
  // Op 3 = mostar lista edades
  // Op 4 = salir
  // lista edades: 12,23,51,15,26,45,89,8,6,49,74,20,16

  while (opcion !== "4") {
    console.log("--------Menu--------");
    console.log("1. Agregar una edad");
    console.log("2. Mostrar analisis");
    console.log("3. Mostrar edades capturadas");
    console.log("4. Salir");
    opcion = await ask("Elige una opcion: ");

    switch (opcion) {
      case "1":
        let edadNueva = Number(await ask("Edad a ingresar: "));
        edades.push(edadNueva);
        console.log("Edad agregada: " + edadNueva);
        break;
      case "2":
        let summary = statisticalAnalysis(edades);
        console.log(`De un total de ${edades.length}, ${summary.length} son mayores de edad`);
        console.log(`Lista de mayores de edad: ${summary}`);
        break;
      case "3":
        console.log(`Las edades capturadas son: ${edades}`);
        break;
      case "4":
        console.log("¡Que tengas buen dia!");
        break;
      default:
        console.log("Opcion inválida");
        break;
    }
  }
}

main();
