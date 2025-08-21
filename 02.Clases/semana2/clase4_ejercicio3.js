const { ask } = require("../helpers/input.js");

async function main() {
  const word = await ask("Palabra a invertir: ");
  let reverseWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord = reverseWord + word[i];
  }

  console.log(`La palabra original era '${word}', la palabra al reves es '${reverseWord}'`);
}

main();
