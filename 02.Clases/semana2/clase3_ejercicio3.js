const { ask } = require("../helpers/input.js");

async function main() {
  let opcion = "";
  let frutas = [];

  //Que deseas hacer
  //1. Agregar una fruta
  //2. Eliminar una fruta
  //3. Salir

  while (opcion !== "3") {
    console.log(frutas);
    console.log("--------Menu--------");
    console.log("1. Agregar una fruta");
    console.log("2. Eliminar una fruta");
    console.log("3. Salir");
    opcion = await ask("Elige una opcion: ");

    switch (opcion) {
      case "1":
        let frutaNueva = await ask("Que fruta deseas agregar: ");
        frutas.push(frutaNueva);
        console.log("Fruta agregada: " + frutaNueva);
        break;
      case "2":
        if (frutas.length === 0) {
          console.log("No hay frutas en el arreglo");
        } else {
          let frutaEliminar = await ask("Que fruta deseas eliminar: ");
          let index = frutas.indexOf(frutaEliminar);
          if (index !== -1) {
            frutas.splice(index, 1);
            console.log(
              "Has eliminado la fruta " + frutaEliminar + " del arreglo"
            );
          } else {
            console.log("Esa fruta no esta en el arreglo");
          }
        }
        break;
      case "3":
        console.log("¡Que tengas buen dia!");
        break;
      default:
        console.log("Opcion inválida");
        break;
    }
  }
}

main();
