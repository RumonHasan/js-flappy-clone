import {updateBird, setupBird} from './bird.js';

document.addEventListener('keypress', handleStart, {once: true})
const title = document.querySelector('[data-title]');

let prevTime = 0;
// primary game loop
function mainGame(time){
    let deltaTime = 0;
    if(prevTime !== null){
        deltaTime = time - prevTime;
    }
    prevTime = time;
    updateBird(deltaTime);
    window.requestAnimationFrame(mainGame);
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
