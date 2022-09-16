/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = ''; //'find', 'results'
let userGuess = ''; // shell-1, shell2, shell3
// let flip = ''; //'shell-1','shell-2','shell-3' //or should it be 'pearl1','pearl2','pearl3'?
// let result = ''; //'win' or 'lose'

// let wins = 0;
// let losses = 0;

// probability array
// const underShell = ['pearl1', 'pearl2', 'pearl3']; //or should it be 'pearl1','pearl2','pearl3'?

/* Actions */
function loadPage() {
    displayShells();
    // displayResults();
    // displayScoreboard();
}
// function revealPearl() {
//     gameState = 'results';
// userGuess = 'guess';
//     flip = getRandomItem(underShell);

// if (userGuess === flip) {
//     //     result = 'win';
//     //     wins++;
//     // } else {
//     //     result = 'lose';
//     //     losses++;
//     // }
//     loadPage();
// }

/* Components */

/* Component */
// get DOM
const guess1 = document.getElementById('guess-1');
const guess2 = document.getElementById('guess-2');
const guess3 = document.getElementById('guess-3');

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

const pearl1 = document.getElementById('pearl-1');
const pearl2 = document.getElementById('pearl-2');
const pearl3 = document.getElementById('pearl-3');

const display1 = document.getElementById('display-1');
const display2 = document.getElementById('display-2');
const display3 = document.getElementById('display-3');

const playAgainButton = document.getElementById('play-again-button');

// display

function displayShells() {
    if (gameState === 'find') {
        pearl1.classList.add('hidden');
        pearl2.classList.add('hidden');
        pearl3.classList.add('hidden');
        shell1.classList.remove('reveal');
        shell2.classList.remove('reveal');
        shell3.classList.remove('reveal');
        display1.classList.add('hidden');
        display2.classList.add('hidden');
        display3.classList.add('hidden');
        playAgainButton.classList.add('hidden');
    }

    if (gameState === 'results') {
        guess1.classList.add('hidden');
        guess2.classList.add('hidden');
        guess3.classList.add('hidden');
        // pearl1.classList.remove('hidden');
        // pearl2.classList.remove('hidden');
        // pearl3.classList.remove('hidden');
    }
    if (userGuess === 'shell1') {
        shell1.classList.add('reveal');
    }

    if (userGuess === 'shell2') {
        shell2.classList.add('reveal');
    }

    if (userGuess === 'shell3') {
        shell3.classList.add('reveal');
    }
}

function revealPearl() {
    getRandomItem();
}

// event listeners

guess1.addEventListener('click', () => {
    gameState = 'results';
    userGuess = 'shell1';
    displayShells();
    revealPearl();
});

guess2.addEventListener('click', () => {
    gameState = 'results';
    userGuess = 'shell2';
    displayShells();
    revealPearl();
});

guess3.addEventListener('click', () => {
    gameState = 'results';
    userGuess = 'shell3';
    displayShells();
    revealPearl();
});

// const resultsSection = document.getElementById('results');

// function displayResults() {
//     if (gameState === 'results') {
//         resultsSection.classList.remove('hidden');
//         //ADD RESULTS display (reveal pearl & text)
//     } else {
//         resultsSection.classList.add('hidden');
//     }
// }

playAgainButton.addEventListener('click', () => {
    gameState = 'find';
    loadPage();
});
