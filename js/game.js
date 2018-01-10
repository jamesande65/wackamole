let game = document.querySelector('.game');
OnLoad();

const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
let btn = document.querySelector('.play');
let score = document.querySelector('.score');
let inProgress = false;
let kicks = 0;
let timeBlock = document.querySelector('.timerBlock');
let countSec = 0;


function OnLoad() {
    let value = window.location.href.split("?")[1].split("=")[1];
    for (let i = 0; i < value; i++) {
        let hole = `
        <div class="hole">
            <div class="mole"></div>
        </div>
        `;
        game.insertAdjacentHTML('beforeend', hole);
    }
}

function startTraking() {
    let id = setInterval(updateTimer, 1000);
    setTimeout(function(){countSec = 0;
    clearInterval(id)}, 30000);
}

function  updateTimer() {
    countSec++;
    timeBlock.textContent = '00:' + (countSec < 21 ? (30 - countSec) : '0' + (30 - countSec));
}

function startGame() {
    if(inProgress) return;
    startTraking();
    inProgress = true;
    showMole();
    score.textContent = 0;
    kicks = 0;
    setTimeout( () => {
        inProgress = false;
    }, 30000)
}

function randomTime(min, max) {
    return Math.round(Math.random() * ( max - min ) + min);
}

function randomHole(holes) {
    const id = Math.floor(Math.random() * holes.length);
    const hole= holes[id];
    return hole;
}

function showMole() {
    const time = randomTime(400, 1000);
    const hole = randomHole(holes);
    console.log(hole);
    hole.childNodes[1].classList.remove('dead-mole');
    hole.classList.add('up');
    setTimeout( () => {
        hole.classList.remove('up');
        if(inProgress) showMole();
    } , time);
}

function kickMole(e) {
    if(!e.isTrusted) return;
        this.classList.add('dead-mole');
        this.parentNode.classList.remove('up');
        kicks++;
        score.textContent = kicks;
}

moles.forEach((e) => e.addEventListener('click', kickMole))

btn.addEventListener('click', startGame);