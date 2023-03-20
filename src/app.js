/* eslint-disable */

import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.getElementById("generate-btn").addEventListener("click", function() {
  var excuses = [
    "Mi perro se comió mi tarea",
    "Olvidé mi libro en casa",
    "Tuve un problema familiar",
    "Estaba enfermo",
    "Perdí mi teléfono y no pude comunicarme contigo",
    "Perdí mi billetera y no pude pagar la comida",
    "Olvidé la contraseña de mi cuenta",
    "Tuve que llevar a mi hermano al médico",
    "Mi auto se descompuso en el camino",
    "Tuve una emergencia en casa"
  ];
  var randomIndex = Math.floor(Math.random() * excuses.length);
  document.getElementById("excuse").innerHTML = excuses[randomIndex];
});
