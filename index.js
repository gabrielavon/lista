// atividade 1 
// const quadrado1 = document.getElementById("quadrado1");
// const quadrado2 = document.getElementById("quadrado2");
// const quadrado3 = document.getElementById("quadrado3");


// quadrado1.addEventListener("click", function() {
//     if (quadrado1.style.backgroundColor === "red") {
//         quadrado1.style.backgroundColor = "yellow";
//     } else {
//         quadrado1.style.backgroundColor = "red";
//     }
// })
// quadrado2.addEventListener("click", function() {
//     if (quadrado2.style.backgroundColor === "blue") {
//         quadrado2.style.backgroundColor = "purple";
//     } else {
//         quadrado2.style.backgroundColor = "blue";
//     }
// })

// quadrado3.addEventListener("click", function() {
//     if (quadrado3.style.backgroundColor === "green") {
//         quadrado3.style.backgroundColor = "orange";
//     } else {
//         quadrado3.style.backgroundColor = "green";
//     }
// })

// atividade 2

// let contador = 0;
// const contadorDisplay = document.getElementById("contador");
// const botaoContar = document.getElementById("botaoContar");
// const botaoResetar = document.getElementById("botaoResetar");
// botaoContar.addEventListener("click", function() {
//     contador++;  
//     contadorDisplay.innerText = contador;  
// })


// botaoResetar.addEventListener("click", function() {
//     contador = 0;  
//     contadorDisplay.innerText = contador;  
// })

// atividade 3
// let textoVisivel = false;

// const texto = document.getElementById("texto");
// const botaoMostrarOcultar = document.getElementById("botaoMostrarOcultar");

// botaoMostrarOcultar.addEventListener("click", function() {
//     textoVisivel = !textoVisivel; 

//     if (textoVisivel) {
//         texto.style.display = "block";  
//         botaoMostrarOcultar.innerText = "Ocultar"; 
//     } else {
//         texto.style.display = "none";  
//         botaoMostrarOcultar.innerText = "Mostrar";  
//     }
// })


// atividade 4

// const frase = document.getElementById("frase");
// const botaoMudarTexto = document.getElementById("botaoMudarTexto");

// botaoMudarTexto.addEventListener("click", function() {

//     const novoTexto = prompt("Digite o novo texto:");

   
//     if (novoTexto) {
//         frase.innerText = novoTexto;  
//     }
// })

// atividade 5 :
// const mensagem = document.getElementById("mensagem");
// document.addEventListener("keydown", function(event) {
   
//     mensagem.innerText = "Você pressionou: " + event.key;
// })

// atividade 6:

const candidatos = {
    "13": { nome: "Gilmar", foto: "https://images.app.goo.gl/nk4FVCzMx1ZTX5t9A" },
    "22": { nome: "Felipe Costella", foto: "https://images.app.goo.gl/pUhhB8CZRAiTtgiB8" },
    "40": { nome: "Sandro Severo", foto: "https://images.app.goo.gl/pjsF7Z9rC97BFzXx9" }
};

function votar() {
    const numero = prompt("Digite o número do candidato:");
    const candidato = candidatos[numero];
    const candidatoInfo = document.getElementById("candidatoInfo");

    if (candidato) {
        document.getElementById("fotoCandidato").src = candidato.foto;
        document.getElementById("nomeCandidato").textContent = candidato.nome;
    } else {
        document.getElementById("fotoCandidato").src = "https://via.placeholder.com/100?text=Nulo";
        document.getElementById("nomeCandidato").textContent = "Voto Nulo";
    }

    candidatoInfo.style.display = "block";
}

function confirmarVoto() {
    alert("Voto confirmado! Obrigado por participar.");
    document.getElementById("candidatoInfo").style.display = "none";
}

function cancelarVoto() {
    alert("Voto cancelado. Tente novamente.");
    document.getElementById("candidatoInfo").style.display = "none";
}
