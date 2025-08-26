const { ask } = require("../helpers/input.js");

async function main() {
  const personas = [
    {
      nombre: "Jorge",
      edad: 29,
      ocupacion: "Arquitecto",
      saludar: function () {
        console.log(`Hola, mi nombre es ${this.nombre}!`);
      }
    },
    {
      nombre: "Diego",
      edad: 30,
      ocupacion: "Desarrollador",
      saludar: function () {
        console.log(`Hola, mi nombre es ${this.nombre}!`);
      }
    },
    {
      nombre: "Carlos",
      edad: 28,
      ocupacion: "Diseñador",
      saludar: function () {
        console.log(`Hola, mi nombre es ${this.nombre}!`);
      }
    },
  ];

  personas[0].saludar();
  personas[1].saludar();
  personas[2].saludar();
}

main();
