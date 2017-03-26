function mostrarPrevio(){
  var texto = document.getElementById("textoEscrito").value;
  document.getElementById("previoTexto").innerHTML = texto;
}
function textoGrande(){
  document.getElementById("previoTexto").style.fontSize="230%"
}
function textoMediano(){
  document.getElementById("previoTexto").style.fontSize="170%"
}
function textoChico(){
  document.getElementById("previoTexto").style.fontSize="110%"
}
function colorDeTexto(){
  var color = prompt("Escribe el código hexadecimal del color que deseas:");
  document.getElementById("colorTexto").color = color;
}
function colorDeFondo(){
  var color = prompt("Escribe el código hexadecimal del color de fondo que deseas:");
  //document.getElementById("colorTexto").style.bgcolor = color;
  //document.previoTexto.colorParrafo.style.background.color = color;
}
function alinearIzquierda(){
  document.getElementById("previoTexto").align="left"
}
function centrar(){
  document.getElementById("previoTexto").align="center";
}
function alinearDerecha(){
  document.getElementById("previoTexto").align="right";
}
