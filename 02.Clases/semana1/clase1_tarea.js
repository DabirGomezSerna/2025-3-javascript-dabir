const { ask } = require('../helpers/input.js');

async function main() {
  // TODO: Crear una calculadora simple que realice operaciones básicas:
  // 1.- Pedir el primer número
  // 2.- Pedir el segundo número
  // 3.- Pedir operador
  const num1 = Number(await ask("¿Cual es el primer numero?"));
  const num2 = Number(await ask("¿Cual es el segundo numero?"));
  const operator = await ask("¿Cuál el el operador?");
  let result = 0;

  switch(operator){
    case "+":
      result = num1 + num2;
      console.log("La operación es "+num1+" + "+num2+" = "+result);
      break;
    case "-":
      result = num1 - num2;
      console.log("La operación es "+num1+" - "+num2+" = "+result);
      break;
    case "*":
      result = num1 * num2;
      console.log("La operación es "+num1+" * "+num2+" = "+result);
      break;
    case "/":
      result = num1 / num2;
      console.log("La operación es "+num1+" / "+num2+" = "+result);
      break;
  }
}

main();