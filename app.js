// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
console.log(nombres)


function sortearAmigo(){
    let resultado = Math.floor(Math.random()*(nombres.length));
    console.log("random: "+ resultado);
    let mostrarResultado = document.getElementById("resultado");
    mostrarResultado.innerHTML = `<li>El amigo secreto es: ${nombres[resultado]}`;
}

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value;

    if (amigo.trim() === "") {
        alert("Por favor, ingresa un nombre válido.");
    } else {
        nombres.push(amigo);
        console.log(nombres);
        inputAmigo.value = ""; 
        actualizarLista();
    }
}

function actualizarLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    if (nombres.length != 0) {
        let contenidoLista = "";
    
        for (let index = 0; index < nombres.length; index++) {
            contenidoLista += `<li>-${nombres[index]}</li>`;
        }
        
        listaAmigos.innerHTML = contenidoLista;
    
    } else {
        
        listaAmigos.innerHTML = "<li>No hay amigos disponibles, por favor ingresa un nombre.</li>";
    }
    
}
