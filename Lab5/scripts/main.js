// main.js
const passa = document.querySelector("#passa")

function mouseHover() {
   passa.textContent = "Obrigado por passares!!!"
}

function mouseOut() {
   passa.textContent = "Passa por aqui!!!"
}

passa.onmouseover = () => mouseHover()
passa.onmouseout = () => mouseOut()


const pinta = document.querySelector("#pinta-p")

document.querySelector("#red").onclick = () => {pinta.style.color = "red"}
document.querySelector("#blue").onclick = () => {pinta.style.color = "blue"}
document.querySelector("#green").onclick = () => {pinta.style.color = "green"}


const inputColorir = document.querySelector("#colorir")
const cores = ["red","blue","green"]
let interador = 0

colorir = function () {
   inputColorir.style.backgroundColor = cores[interador]
   interador = (interador + 1) % cores.length
}

inputColorir.onkeyup = colorir


const inputColorBackground = document.querySelector("#cor_background");

colorirBackground = function () {
   document.body.style.backgroundColor = inputColorBackground.value
}

inputColorBackground.onclick = colorirBackground


const botao = document.querySelector("#contar")
const  contagem = document.querySelector("#contagem")
let count = 0

botao.onclick = function() {
    count++
    contagem.textContent = count
}

const inputNome = document.querySelector("#nome");
const inputIdade = document.querySelector("#idade")
const botaoBio = document.querySelector("#submeterBio")
const textBio = document.querySelector("#textBio")

botaoBio.onclick = function () {
   textBio.textContent = "Olá, o " + inputNome.value + " tem " + inputIdade.value + "!";
}

const contagemReal = document.querySelector("#counter");
let counter = 0;

setInterval(() => {
    counter++;
    contagemReal.textContent = counter;
}, 1000);