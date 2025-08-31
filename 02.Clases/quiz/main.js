"use strict";

const preguntas = [
  {
    pregunta: "¿Qué operador devuelve el residuo de una división?",
    opciones: ["/", "%", "&&", "==="],
    correcta: 1,
  },
  {
    pregunta: "¿Cuál método convierte un string a número entero?",
    opciones: ["parseInt()", "toString()", "JSON.parse()", "slice()"],
    correcta: 0,
  },
  {
    pregunta:
      "¿Qué estructura repite un bloque mientras una condición sea verdadera?",
    opciones: ["if", "while", "switch", "try/catch"],
    correcta: 1,
  },
  {
    pregunta: "¿Cuál opción crea correctamente un arreglo?",
    opciones: ["let a = {};", "let a = [];", "let a = ();", "let a = <>;"],
    correcta: 1,
  },
  {
    pregunta: "¿Qué imprime: [1,2,3].length?",
    opciones: ["2", "3", '"3"', "undefined"],
    correcta: 1,
  },
  {
    pregunta: "¿Cómo defines una función clásica?",
    opciones: [
      "function f(){}",
      "let f = []",
      "const f = {}",
      "new Function[]",
    ],
    correcta: 0,
  },
  {
    pregunta:
      "¿Qué palabra clave accede a las props dentro de un método de objeto?",
    opciones: ["self", "this", "that", "me"],
    correcta: 1,
  },
  {
    pregunta: "¿Qué método agrega un elemento al final de un arreglo?",
    opciones: ["push()", "pop()", "shift()", "unshift()"],
    correcta: 0,
  },
  {
    pregunta: "Condicional estricta por tipo y valor:",
    opciones: ["==", "=", "===", "!=="],
    correcta: 2,
  },
  {
    pregunta: "¿Qué estructura selecciona entre múltiples casos?",
    opciones: ["switch", "choose", "case_of", "select"],
    correcta: 0,
  },
];

let preguntaActual = 0;
let puntaje = 0;
const totalPreguntas = preguntas.length;
let preguntasIncorrectas = [];

window.onload = iniciarQuiz();

function iniciarQuiz() {
  preguntaActual = 0;
  puntaje = 0;
  mostrarPregunta();
}

function mostrarPregunta() {
  const pregunta = preguntas[preguntaActual];
  const questionDiv = document.getElementById("quiz-content");

  questionDiv.innerHTML = `
        <h3>PREGUNTA ${preguntaActual + 1}</h3>
        <p>${pregunta.pregunta}</p>
        <div id="inputContainer">
          <input type="radio" id="option1" name="quizOption" value="0" checked="checked"/>
          <label for="option1">${pregunta.opciones[0]}</label><br />
          <input type="radio" id="option2" name="quizOption" value="1" />
          <label for="option2">${pregunta.opciones[1]}</label><br />
          <input type="radio" id="option3" name="quizOption" value="2" />
          <label for="option3">${pregunta.opciones[2]}</label><br />
          <input type="radio" id="option4" name="quizOption" value="3" />
          <label for="option4">${pregunta.opciones[3]}</label><br />
        </div>
        <button onclick="avanzarPregunta()">Submit</button>`;
}

function mostrarResultados() {
  const results = document.getElementById("resultado");

  results.style.display = "";
  results.innerHTML = `
        <p>Tu resultado es: ${puntaje}/10</p>
        <p>Las preguntas incorrectas fueron: ${preguntasIncorrectas}</p>`;
}

function verificarRespuesta(answer) {
  if (preguntas[preguntaActual].correcta == answer) {
    puntaje++;
  } else {
    preguntasIncorrectas.push(preguntaActual);
  }

  console.log(puntaje);
  console.log(preguntasIncorrectas);
}

function avanzarPregunta() {
  let questionValue = document.getElementsByName("quizOption");
  let selectedOption = 0;

  for (let i = 0; i <= 3; i++) {
    if (questionValue[i].checked) {
      selectedOption = questionValue[i].value;
    }
  }

  verificarRespuesta(selectedOption);

  preguntaActual++;
  if (preguntaActual <= 9) {
    mostrarPregunta();
  } else {
    window.alert("No hay mas preguntas!");
    mostrarResultados();
  }
}
