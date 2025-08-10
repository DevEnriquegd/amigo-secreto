// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function añadirAmigo() {
  let campoEntrada = document.getElementById("amigo");
  let nuevoAmigo = campoEntrada.value.trim();

  if (nuevoAmigo === "") {
    alert("Por favor, inserte un nombre");
    return;
  }

  amigos.push(nuevoAmigo);
  limpiarCampoEntrada();
}

function limpiarCampoEntrada() {
  document.getElementById("amigo").value = "";
}
