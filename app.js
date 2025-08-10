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

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear");
    return;
  }

  let indice = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indice];

  document.getElementById(
    "resultado"
  ).innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}

function limpiarCampoEntrada() {
  document.getElementById("amigo").value = "";
}
