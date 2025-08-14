//Pedir al usuario su fecha de nacimiento

//1.Mostrar en pantalla los días equivalentes a la edad actual del usuario
//2.Mostrar en pantalla los meses equivalentes a la edad acutal de usuario
//3.Mostrar los años que tiene el usuario

const { ask } = require("../helpers/input.js");

function dateDifferenceDays(actualDate, birthday) {
  const diff = actualDate - birthday;

  const ageInDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  return ageInDays;
}

function dateDifferenceMonths(actualDate, birthday) {
  const diff = actualDate - birthday;

  const ageInMonths = Math.floor(diff / (1000 * 60 * 60 * 24 *30));
  return ageInMonths;
}

function dateDifferenceYears(actualDate, birthday) {
  const diff = actualDate - birthday;

  const ageInYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  return ageInYears;
}

async function main() {
  const currentDate = new Date();
  const birthdayDay = Number(await ask("¿Cuándo es el día de tu cumpleaños?"));
  const birthdayMonth = Number(await ask("¿Cuál es el mes de tu cumpleaños?"));
  const birthdayYear = Number(await ask("¿Cuál es el año de tu cumpleaños?"));

  const birthday = new Date(`${birthdayYear}-${birthdayMonth}-${birthdayDay}`);

  console.log(`Tu edad en días es: ${dateDifferenceDays(currentDate, birthday)}`);

  console.log(`Tu edad en meses es: ${dateDifferenceMonths(currentDate, birthday)}`);

  console.log(`Tu edad en años es: ${dateDifferenceYears(currentDate, birthday)}`)
}

main();
