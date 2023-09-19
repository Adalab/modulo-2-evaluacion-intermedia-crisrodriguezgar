'use strict'

/*******Query Selector*******/

const select = document.querySelector('.js-select');
const button = document.querySelector('.js-btn');
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
        result.innerHTML = '¡Has ganado!';
        playerPoints++;
    } else if (userChoice === 'scissors' && pcChoice === 'paper'){
        result.innerHTML = '¡Has ganado!';
        playerPoints++;
    } else if (userChoice === 'paper' && pcChoice === 'rock'){
        result.innerHTML = '¡Has ganado!';
        playerPoints++;
    } else if (userChoice === pcChoice){
        result.innerHTML = 'Empate';
    } else {
        result.innerHTML = '¡Has perdido!';
        pcPoints++;
    }
}

function renderPoints() {
    pointPlayer.innerHTML = `Jugador: ${playerPoints}`;
    pointPc.innerHTML = `Computadora: ${pcPoints}`;
}


    //función manejadora

function handleClickbutton(){
    const userResult = userChoice();
    const pcResult = pcChoice();
    compare (userResult, pcResult);
    renderPoints();
}

/*******Eventos ***********/

button.addEventListener('click', handleClickbutton);