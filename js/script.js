const STONE = 'kamień';
const PAPER = 'papier';
const SCISSORS = 'nożyce';

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
    computerMove = STONE;
} else if (randomNumber == 2) {
    computerMove = PAPER;
} else if (randomNumber == 3) {
    computerMove = SCISSORS;
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput === '1') {
    playerMove = STONE;
} else if (playerInput === '2') {
    playerMove = PAPER;
} else if (playerInput === '3') {
    playerMove = SCISSORS;
}

printMessage('Twój ruch to: ' + playerMove);

if (computerMove === STONE && playerMove === PAPER) {
    printMessage('Ty wygrywasz!');
} else if (computerMove === SCISSORS && playerMove === STONE) {
    printMessage('Ty wygrywasz!');
} else if (computerMove === PAPER && playerMove === SCISSORS) {
    printMessage('Ty wygrywasz!');
} else if (computerMove === STONE && playerMove === STONE) {
    printMessage('Remis!');
} else if (computerMove === SCISSORS && playerMove === SCISSORS) {
    printMessage('Remis!');
} else if (computerMove === PAPER && playerMove === PAPER) {
    printMessage('Remis!');
} else if (
    computerMove === STONE ||
    computerMove === SCISSORS ||
    computerMove === PAPER &&
    playerMove === 'nieznany ruch') {
    printMessage('Oszukujesz!');
} else {
    printMessage('Ty przegrywasz!');
}