// main.js
function saudar() {
            const frase = document.querySelector('h1');
            frase.innerHTML = 'WHY???'
        }
        
let counter = 0;
function contar() {
   const frase = document.querySelector('h2');
   let contador = document.querySelector('.contador')
   counter++;
   alert(counter)

   contador.textContent = counter;

   if (counter== 10) {
      frase.innerHTML = 'Algo aconteceu';
      frase.style.color = 'red'
   }
}