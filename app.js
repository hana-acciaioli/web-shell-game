/* Imports */
import { getRandomItem } from './utils.js';

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

// const resultsSection = document.getElementById('results');
const playAgainButton = document.getElementById('play-again-button');
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const totalDisplay = document.getElementById('total-display');
/* State */
let gameState = 'find'; //'find', 'results'
let userGuess = ''; // shell-1, shell2, shell3
let flip = ''; //'shell-1','shell-2','shell-3' //or should it be 'pearl1','pearl2','pearl3'?
// let result = ''; //'win' or 'lose'

let wins = 0;
let losses = 0;

// probability array
const underShell = [pearl1, pearl2, pearl3];

/* Actions */
function loadPage() {
    displayShells();
    // displayResults();
    // displayScoreboard();
}

function revealPearl() {
    gameState = 'results';
    flip = getRandomItem(underShell);
    flip.classList.remove('hidden');
    loadPage();
}

/* Components */

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
        guess1.classList.remove('hidden');
        guess2.classList.remove('hidden');
        guess3.classList.remove('hidden');
    }

    if (gameState === 'results') {
        guess1.classList.add('hidden');
        guess2.classList.add('hidden');
        guess3.classList.add('hidden');
        playAgainButton.classList.remove('hidden');
    }
}
function displayResults() {
    if (userGuess === 'shell1' && flip === pearl1) {
        shell1.classList.add('reveal');
        display1.classList.remove('hidden');
        display1.textContent = 'You did it!';
        wins++;
    }
    if (userGuess === 'shell1' && flip === pearl2) {
        shell1.classList.add('reveal');
        shell2.classList.add('reveal');
        display1.classList.remove('hidden');
        display1.textContent = 'Not there!';
        losses++;
    }
    if (userGuess === 'shell1' && flip === pearl3) {
        shell1.classList.add('reveal');
        shell3.classList.add('reveal');
        display1.classList.remove('hidden');
        display1.textContent = 'Not there!';
        losses++;
    }

    if ((userGuess === 'shell2') & (flip === pearl1)) {
        shell2.classList.add('reveal');
        shell1.classList.add('reveal');
        display2.classList.remove('hidden');
        display2.textContent = 'Not there!';
        losses++;
    }
    if ((userGuess === 'shell2') & (flip === pearl2)) {
        shell2.classList.add('reveal');
        display2.classList.remove('hidden');
        display2.textContent = 'You did it!';
        wins++;
    }
    if ((userGuess === 'shell2') & (flip === pearl3)) {
        shell2.classList.add('reveal');
        shell3.classList.add('reveal');
        display2.classList.remove('hidden');
        display2.textContent = 'Not there!';
        losses++;
    }

    if ((userGuess === 'shell3') & (flip === pearl3)) {
        shell3.classList.add('reveal');
        display3.classList.remove('hidden');
        display3.textContent = 'You found it!';
        wins++;
    }
    if ((userGuess === 'shell3') & (flip === pearl1)) {
        shell3.classList.add('reveal');
        shell1.classList.add('reveal');
        display3.classList.remove('hidden');
        display3.textContent = 'Not there!';
        losses++;
    }
    if ((userGuess === 'shell3') & (flip === pearl2)) {
        shell3.classList.add('reveal');
        shell2.classList.add('reveal');
        display3.classList.remove('hidden');
        display3.textContent = 'Not there!';
        losses++;
    }
}

// event listeners

guess1.addEventListener('click', () => {
    gameState = 'results';
    userGuess = 'shell1';
    displayShells();
    revealPearl();
    displayResults();
    displayScoreboard();
});

guess2.addEventListener('click', () => {
    gameState = 'results';
    userGuess = 'shell2';
    displayShells();
    revealPearl();
    displayResults();
    displayScoreboard();
});

guess3.addEventListener('click', () => {
    gameState = 'results';
    userGuess = 'shell3';
    displayShells();
    revealPearl();
    displayResults();
    displayScoreboard();
});

// function displayResults() {
//     if (gameState === 'results') {
//         resultsSection.classList.remove('hidden');

//     } else {
//         resultsSection.classList.add('hidden');
//     }
// }

function displayScoreboard() {
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    totalDisplay.textContent = wins + losses;
}

playAgainButton.addEventListener('click', () => {
    gameState = 'find';
    loadPage();
});
loadPage();
