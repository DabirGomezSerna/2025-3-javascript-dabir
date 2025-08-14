const { ask } = require('../helpers/input.js');

async function main() {
 const age = Number(await ask("¿Cuántos años tienes?"));
 const genero = await ask("¿Cuál es tu género (masculino/femenino)?");

 if(age <= 12 && genero === "femenino"){
    console.log("Eres una niña");
 }else if(age <= 12 && genero === "masculino")
    console.log("Eres un niño");
  else if((age > 12 && age < 18) && genero === "femenino")
    console.log("Eres una adolescente");
  else if((age > 12 && age < 18) && genero === "masculino")
    console.log("Eres un adolescente");
  else if(age >= 18 && genero === "femenino")
    console.log("Eres una mujer");
  else if(age >=18 && genero === "masculino")
    console.log("Eres un hombre");
  else
    console.log("No se encontraron resultados");
}

main();