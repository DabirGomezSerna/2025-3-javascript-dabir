const { ask } = require('../helpers/input.js');

async function main() {
    const degrees = (await ask("Ingresa la temperatura C/F: "));
    let trimDegrees = degrees.trim();
    trimDegrees.toUpperCase();
    if(trimDegrees!=='C'&&trimDegrees!=='F'){
        console.log("Temperatura inválida");
        return;
    }
    const number = Number (await ask("Ingresa la temperatura: "));
    if(number===NaN){
        console.log("Temperatura inválida");
        return;
    }

    let Celcius = 0;
    let Fahrenheit = 0;

    if(trimDegrees==='C'){
        Celcius = number;
        Fahrenheit = (number *9/5) + 32;

        console.log("El valor en Celcius es: "+Celcius);
        console.log("El valor en Fahrenheit es: "+Fahrenheit);
    }else{
        Celcius = (number - 32) * 5/9;
        Fahrenheit = number;

        console.log("El valor en Celcius es: "+Celcius);
        console.log("El valor en Fahrenheit es: "+Fahrenheit);        
    }
}

main();