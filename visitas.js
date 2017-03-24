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
