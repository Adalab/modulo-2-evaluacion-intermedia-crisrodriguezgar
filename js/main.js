'use strict'

/*******Query Selector*******/

const select = document.querySelector('.js-select');
const button = document.querySelector('.js-btn');
const buttonReset = document.querySelector('.js-btn-reset');
const result = document.querySelector('.js-text-result');
const pointPlayer = document.querySelector('.js-player');
const pointPc = document.querySelector('.js-pc');

const imgPaper = document.querySelector('.js-imgPaper');
const imgRock = document.querySelector('.js-imgRock');
const imgScissors = document.querySelector('.js-imgScissors');

const imgPaperPC = document.querySelector('.js-imgPaperPC');
const imgRockPC = document.querySelector('.js-imgRockPC');
const imgScissorsPC = document.querySelector('.js-imgScissorsPC');


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
function showPlayerChoice(userChoice) {
    if (userChoice === 'rock') {
        imgRock.classList.remove('hidden');
        imgPaper.classList.add('hidden');
        imgScissors.classList.add('hidden');
    } else if (userChoice === 'paper') {
        imgPaper.classList.remove('hidden');
        imgScissors.classList.add('hidden');
        imgRock.classList.add('hidden');
    } else if (userChoice === 'scissors') {
        imgScissors.classList.remove('hidden');
        imgRock.classList.add('hidden');
        imgPaper.classList.add('hidden');
    }
}

function showComputerChoice(pcChoice) {
    if (pcChoice === 'rock') {
        imgRockPC.classList.remove('hidden');
        imgPaperPC.classList.add('hidden');
        imgScissorsPC.classList.add('hidden');
    } else if (pcChoice === 'paper') {
        imgRockPC.classList.add('hidden');
        imgPaperPC.classList.remove('hidden');
        imgScissorsPC.classList.add('hidden');
    } else if (pcChoice === 'scissors') {
        imgRockPC.classList.add('hidden');
        imgPaperPC.classList.add('hidden');
        imgScissorsPC.classList.remove('hidden');
    }
}

function hideAllImages() {
    // Oculta todas las imágenes
    imgRock.classList.add('hidden');
    imgPaper.classList.add('hidden');
    imgScissors.classList.add('hidden');
    imgRockPC.classList.add('hidden');
    imgPaperPC.classList.add('hidden');
    imgScissorsPC.classList.add('hidden');
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
        endGame();
    }
}

function endGame() {
    button.classList.add('hidden');
    buttonReset.classList.remove('hidden');
    select.classList.add('hidden');
    result.innerHTML = '¡Game over!';
}

function renderPoints() {
    pointPlayer.innerHTML = `Jugador: ${playerPoints}`;
    pointPc.innerHTML = `Ordenador: ${pcPoints}`;
}

    //función manejadora

    function handleClickbutton(event) {
        event.preventDefault();
        const userResult = userChoice();
        const pcResult = pcChoice();
        compare(userResult, pcResult);
        renderPoints();
        console.log(`Elección del PC: ${pcResult}`);
        showComputerChoice(pcResult);
        showPlayerChoice(userResult);
    }


function handleReset(event) {
    event.preventDefault();
    playerPoints = 0;
    pcPoints = 0;
    games = 0;
    renderPoints();
    result.innerHTML = '¡Vamos a jugar!';
    button.classList.remove('hidden');
    buttonReset.classList.add('hidden');
    select.classList.remove('hidden');
    hideAllImages();
}

/*******Eventos ***********/

button.addEventListener('click', handleClickbutton);
buttonReset.addEventListener('click', handleReset);