let nomeAmigo = document.getElementById('nome-amigo');
let listaAmigo = document.getElementById('lista-amigos');
let listaSorteio = document.getElementById('lista-sorteio');
let amigos = [];

function adicionar() {
    let nome = nomeAmigo.value.trim();
    if (nome) {
        amigos.push(nome);
        listaAmigo.innerHTML += `<p>${nome}</p>`
        nomeAmigo.value = '';
    } else {
        alert ('Por favor, insira um nome válido');
    }
}

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}

function sortear() {
    if (amigos.length < 3) {
        alert ("É necessário pelo menos 3 amigos para realizar o sorteio");
        return;
    }

    let amigosEmbaralhados = [...amigos];
    embaralhar(amigosEmbaralhados);

    listaSorteio.innerHTML = amigosEmbaralhados.map((amigo, i) => `<p>${amigo} tirou ${amigosEmbaralhados[(i + 1) % amigos.length]}</p>`).join("");
}

function reiniciar() {
    amigos = [];
    listaAmigo.innerHTML = "";
    listaSorteio.innerHTML = "";
    nomeAmigo.value = "";
}