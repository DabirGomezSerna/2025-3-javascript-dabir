const { ask } = require('../helpers/input.js');

async function main() {
  // TODO: Crear una calculadora simple que realice operaciones básicas:
  // 1.- Pedir el primer número
  // 2.- Pedir el segundo número
  // 3.- Pedir operador
  const num1 = Number(await ask("¿Cuál es el primer numero?"));
  const num2 = Number(await ask("¿Cuál es el segundo numero?"));
  const operator = await ask("¿Cuál el el operador(+,-,*,/)?");
  let result = 0;

  if(operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/'){
    console.log("El operador no es valido");
  }

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
      if(num2 > 0){
        result = num1 / num2;
        console.log("La operación es "+num1+" / "+num2+" = "+result);
        break;
      }else
        console.log("El segundo número en una división no puede ser 0");
    default:
      console.log("Operación inválida");
  }
}

main();