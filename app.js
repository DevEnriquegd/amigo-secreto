// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let campoEntrada = document.getElementById("amigo");
  let nuevoAmigo = campoEntrada.value;
  if (nuevoAmigo === "") {
    alert("Por favor, inserte un nombre");
    return;
  }

  amigos.push(nuevoAmigo);
  limpiarCampoEntrada();
  actualizarListaAmigos();
}

function actualizarListaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function limpiarCampoEntrada() {
  document.getElementById("amigo").value = "";
}
