const { ask } = require('../helpers/input.js');

async function main() {
    const dia = Number(await ask("Ingresa un número del 1 al 7: "));
    const daysWeek = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

    if(dia >= 1 && dia <= 7){
        console.log("El día de la semana es: " + daysWeek[dia-1]);
    }else{
        console.log("Ese día de la semana no existe");
    }
    
}

main();