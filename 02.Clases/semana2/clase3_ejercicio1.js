const { ask } = require("../helpers/input.js");

function saludar(nombre) {
  console.log(`Hola estimad@: ${nombre}, espero que tengas un buen día`);
}

async function main() {
  const personas = ["Diego", "Edgar", "Irving", "Jesus", "Jorge", "Luigy"];

  console.log("----------Ascending order----------");
  for (let i = 0; i < personas.length; i++) {
    saludar(personas[i]);
  }

  console.log("----------Descending order----------");
  for (let j = personas.length - 1; j >= 0; j--) {
    saludar(personas[j]);
  }

  let limite = Number(await ask("Hasta que número quieres contar: "));
  let x = 1;
  while (x <= limite) {
    console.log("Número " + x);
    x++;
  }
}

main();
