

let prevTime = 0;
// primary game loop
function mainGame(time){
    let deltaTime = 0;
    if(prevTime !== null){
        deltaTime = time - prevTime;
    }
    prevTime = time;
    window.requestAnimationFrame(mainGame);
}

// initial call of the main game loop
window.requestAnimationFrame(mainGame);