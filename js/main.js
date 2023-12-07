'use strict'

/*******Query Selector*******/

const select = document.querySelector('.js-select');
const button = document.querySelector('.js-btn');
const buttonReset = document.querySelector('.js-btn-reset');
const result = document.querySelector('.js-text-result');
const pointPlayer = document.querySelector('.js-player');
const pointPc = document.querySelector('.js-pc');

/*********Variables Globales********/
let playerPoints = 0;
let pcPoints = 0;
let games = 0;

/*******Funciones **********/

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
    

function userChoice(){
    const valueText = select.value;
    result.innerHTML = valueText;
    return valueText;
}

function pcChoice(){
    
    const randomNumber = getRandomNumber(9);
    let result = '';

    if (randomNumber <= 3){
       result = 'rock';
    } else if (randomNumber >= 7){
       result = 'paper';
    } else {
       result = 'scissors';
    }
    return result;
}


function compare (userChoice, pcChoice){
    if (userChoice === 'rock' && pcChoice === 'scissors'){
        result.innerHTML = '¡Has ganado! 😊';
        playerPoints++;
    } else if (userChoice === 'scissors' && pcChoice === 'paper'){
        result.innerHTML = '¡Has ganado! 😊';
        playerPoints++;
    } else if (userChoice === 'paper' && pcChoice === 'rock'){
        result.innerHTML = '¡Has ganado! 😊';
        playerPoints++;
    } else if (userChoice === pcChoice){
        result.innerHTML = 'Empate';
    } else {
        result.innerHTML = '¡Has perdido! 😞';
        pcPoints++;
    }
    if (playerPoints === 3 || pcPoints === 3) {
        endGame(); // Llama a la función para finalizar el juego
    }
}

function endGame() {
    button.classList.add('hidden'); // Agrega la clase 'hidden' al botón de juego
    buttonReset.classList.remove('hidden'); // Quita la clase 'hidden' al botón de reset
    select.classList.add('hidden');
    result.innerHTML = '¡Game over!';
}
function renderPoints() {
    pointPlayer.innerHTML = `Jugador: ${playerPoints}`;
    pointPc.innerHTML = `Ordenador: ${pcPoints}`;
}


    //función manejadora

function handleClickbutton(event){
    event.preventDefault();
    const userResult = userChoice();
    const pcResult = pcChoice();
    compare (userResult, pcResult);
    renderPoints();
    console.log(`Elección del PC: ${pcResult}`); 
}


function handleReset(event) {
    event.preventDefault();
    // Restablecer todas las variables y elementos necesarios
    playerPoints = 0;
    pcPoints = 0;
    games = 0;
    renderPoints();
    result.innerHTML = '¡Vamos a jugar!';
    button.classList.remove('hidden'); // Quita la clase 'hidden' al botón de juego
    buttonReset.classList.add('hidden'); // Agrega la clase 'hidden' al botón de reset
    select.classList.remove('hidden');
}

/*******Eventos ***********/

button.addEventListener('click', handleClickbutton);
buttonReset.addEventListener('click', handleReset);