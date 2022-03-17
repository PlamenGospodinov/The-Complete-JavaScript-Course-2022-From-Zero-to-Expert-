const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
let hitPosition;
let result = 0;
let currentTime = 60;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

let timerId = null;
function moveMole() {

    timerId = setInterval(randomSquare, 700);
}

moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('Game over! Your final score is ' + result);
    }
}

let countDownTimerId = setInterval(countDown, 1000);
