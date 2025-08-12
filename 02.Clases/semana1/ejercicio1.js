const { ask } = require('../helpers/input.js');

async function main() {
  const name = await ask("¿Cómo te llamas?");
  const age = Number(await ask("¿Cuántos años tienes?"));
  const food = await ask("¿Cuál es tu comida favorita?");

  console.log("Hola " + name +
    ", tienes: " + age +
    " años, y tu comida favorita es: " + food);
}

main();