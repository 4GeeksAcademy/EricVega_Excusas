/* eslint-disable */
import "bootstrap";
import ".style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Arrays para generar la excusa
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  // Función para obtener un valor aleatorio de un array
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // Generar excusa concatenando las partes aleatorias
  let excuse = `${getRandomElement(who)} ${getRandomElement(
    action
  )} ${getRandomElement(what)} ${getRandomElement(when)}.`;

  // Asignar la excusa generada al innerHTML del párrafo con id "excuse"
  document.getElementById("excuse").innerHTML = excuse;
};
