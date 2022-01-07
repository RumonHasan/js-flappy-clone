import {updateBird, setupBird, getBirdRect} from './bird.js';

document.addEventListener('keypress', handleStart, {once: true})
const title = document.querySelector('[data-title]');

let prevTime = 0;
// primary game loop
function mainGame(time){
    let deltaTime = 0;
    if(prevTime !== null){
        deltaTime = time - prevTime;
    }
    updateBird(deltaTime);
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
    setupBird();
    window.requestAnimationFrame(mainGame);
}

// lose
function handleLose(){

}
