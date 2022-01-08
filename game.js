import {updateBird, setupBird, getBirdRect} from './bird.js';
import {updatePipes} from './pipe.js';

document.addEventListener('keypress', handleStart, {once: true})
const title = document.querySelector('[data-title]');
const subTitle = document.querySelector('[data-subtitle]'); // sub data attribute 

let prevTime = 0;
// primary game loop
function mainGame(time){
    let deltaTime = 0;
    if(prevTime !== null){
        deltaTime = time - prevTime;
    }
    updateBird(deltaTime);
    updatePipes(deltaTime);
    if(checkLose()) return handleLose();
    prevTime = time;
    window.requestAnimationFrame(mainGame);
}

function checkLose(){
    const birdRect = getBirdRect();
    const outsideWorld = birdRect.top < 0 || birdRect.bottom > window.innerHeight;
    return outsideWorld;
}

// handle start
function handleStart(){
    title.classList.add('hide');
    prevTime = null; // resetting the last frame to null in order to reset the frame
    setupBird();
    window.requestAnimationFrame(mainGame);
}

// lose
function handleLose(){
    title.classList.remove('hide');
    subTitle.innerText = '0 pipes';
    document.addEventListener('keypress', handleStart, {once: true}); // restarts the event listener once the user hits the wal
}
