const { ask } = require('../helpers/input.js');

function saludar(nombre){
    console.log(`Hola estimad@: ${nombre}, espero que tengas un buen día`);
}

async function main() {
    const personas = [
        "Pedro",
        "Edgar",
        "Luigy",
        "Diego",
        "Irving",
        "Jesus"
    ];

    for(let i = 0; i < personas.length; i++){
        saludar(personas[i]);
    }
}

main();