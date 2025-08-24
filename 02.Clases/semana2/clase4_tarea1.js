const { ask } = require("../helpers/input.js");

function analyzeGrades(grades) {
  let passes = 0;
  let fails = 0;
  let average = 0;
  let highestGrade = grades[0];
  let lowestGrade = grades[0];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 70) {
      passes++;
    }
  }

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 70) {
      fails++;
    }
  }

  for (let i = 0; i < grades.length; i++) {
    average = average + grades[i];
  }

  average = average / grades.length;

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] > highestGrade) {
      highestGrade = grades[i];
    }
  }

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < lowestGrade) {
      lowestGrade = grades[i];
    }
  }

  return { passes, fails, average, highestGrade, lowestGrade };
}

async function main() {
  const gradeInput = await ask("Ingresa la lista de números (separados por coma): ");
  const gradeArray = gradeInput.split(",").map(Number);
  //Test array: const gradeArray = [75, 89, 93, 56, 81, 67, 89, 78, 85, 99];
  const results = analyzeGrades(gradeArray);
  console.log(results);
}

main();
