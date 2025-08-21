const { ask } = require("../helpers/input");

function findAverage(arrayToAverage) {
  let total = 0;
  let average = 0;

  for (let i = 0; i < arrayToAverage.length; i++) {
    total = total + arrayToAverage[i];
  }
  average = total / arrayToAverage.length;

  return average;
}

function findGreatest(arrayGreatest) {
  let greatest = arrayGreatest[0];

  for (let i = 0; i < arrayGreatest.length; i++) {
    if (arrayGreatest[i] > greatest) {
      greatest = arrayGreatest[i];
    }
  }

  return greatest;
}

function findSmallest(arraySmallest) {
  let smallest = arraySmallest[0];

  for (let i = 0; i < arraySmallest.length; i++) {
    if (arraySmallest[i] < smallest) {
      smallest = arraySmallest[i];
    }
  }

  return smallest;
}

function statisticalSummary(arraySummary) {
  const average = findAverage(arraySummary);
  const greatest = findGreatest(arraySummary);
  const smallest = findSmallest(arraySummary);

  //old way to return a json
  //return{'promedio':average,'mayor':greatest,'menor':smallest};
  return { average, greatest, smallest };
}

function vowelName(names) {
  const vowels = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
  const result = [];

  for (let i = 0; i < names.length; i++) {
    let firstLetter = names[i][0].toLowerCase();
    /*for (let j = 0; j < vowels.length; j++) {
      if (vowels[j] === firstLetter) {
        result.push(names[i]);
      }
    }*/
    if (vowels.includes(firstLetter)) {
      result.push(names[i]);
    }
  }

  return result;
}

async function main() {
  const edades = [20, 18, 25, 30, 67];
  const lista = [5, 20, 8, 99, 3];
  const datos = [70, 99, 13, 29, 100];
  const nombres = ["Diego", "Irving", "Luigy", "Edgar", "Jesus"];

  console.log("Promedios:");
  console.log(`Promedio de edades: ${findAverage(edades)}`);
  console.log("Número mayor:");
  console.log(`El número mayor de ${lista} es: ${findGreatest(lista)}`);
  console.log("Número menor:");
  console.log(`El número menor de ${datos} es: ${findSmallest(datos)}`);
  console.log("Resúmen estadístico");
  const statisticReport = statisticalSummary(datos);
  console.log(`El resúmen estadístico de ${datos} es:`);
  console.log(`Promedio: ${statisticReport.average}`);
  console.log(`Mayor: ${statisticReport.greatest}`);
  console.log(`Menor: ${statisticReport.smallest}`);
  console.log(`Los nombres que empiezan con vocal son:`);
  console.log(`${vowelName(nombres)}`);
}

main();
