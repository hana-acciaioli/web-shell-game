/* Imports */
import { getRandomItem } from './utils.js';

const guess1 = document.getElementById('guess-1');
const guess2 = document.getElementById('guess-2');
const guess3 = document.getElementById('guess-3');

const guesses = document.getElementById('guesses');

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

const pearl1 = document.getElementById('pearl-1');
const pearl2 = document.getElementById('pearl-2');
const pearl3 = document.getElementById('pearl-3');

const display1 = document.getElementById('display-1');

const playAgainButton = document.getElementById('play-again-button');
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const totalDisplay = document.getElementById('total-display');

/* State */
let gameState = 'find'; //'find', 'results'
let userGuess = ''; // shell-1, shell2, shell3
let flip = ''; // 'pearl1','pearl2','pearl3'?

let wins = 0;
let losses = 0;

// probability array
const underShell = [pearl1, pearl2, pearl3];

/* Actions */
function loadPage() {
    displayShells();
}

function revealPearl() {
    gameState = 'results';
    flip = getRandomItem(underShell);
    flip.classList.remove('hidden');
    if (flip === pearl1) {
        flipOne();
    } else if (flip === pearl2) {
        flipTwo();
    } else flipThree();
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

        playAgainButton.classList.add('hidden');
        guesses.classList.remove('hidden');
    }

    if (gameState === 'results') {
        guesses.classList.add('hidden');
        playAgainButton.classList.remove('hidden');
    }
}

function winner() {
    display1.textContent = 'You did it!';
    display1.classList.remove('hidden');
    wins++;
}

function loser() {
    display1.textContent = 'Not there!';
    display1.classList.remove('hidden');
    losses++;
}

function flipTwo() {
    shell2.classList.add('reveal');
}

function flipOne() {
    shell1.classList.add('reveal');
}

function flipThree() {
    shell3.classList.add('reveal');
}

function displayResults() {
    if (userGuess === flip) {
        winner();
    } else {
        loser();
    }
}

function results() {
    displayShells();
    revealPearl();
    displayResults();
    displayScoreboard();
}

function displayScoreboard() {
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    totalDisplay.textContent = wins + losses;
}
// event listeners

guess1.addEventListener('click', () => {
    gameState = 'results';
    userGuess = pearl1;
    flipOne();
    results();
});

guess2.addEventListener('click', () => {
    gameState = 'results';
    userGuess = pearl2;
    flipTwo();
    results();
});

guess3.addEventListener('click', () => {
    gameState = 'results';
    userGuess = pearl3;
    flipThree();
    results();
});

playAgainButton.addEventListener('click', () => {
    gameState = 'find';
    loadPage();
});
loadPage();
