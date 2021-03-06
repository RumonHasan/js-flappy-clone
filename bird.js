const birdElem = document.querySelector('[data-bird]');
const BIRD_SPEED = 0.1;
let timeSinceLastJump = Number.POSITIVE_INFINITY; // huge number by default
const JUMP_DURATION = 125; //ms

export function setupBird (){
    setTop(window.innerHeight / 2);
    document.removeEventListener('keydown', handleJump);
    document.addEventListener('keydown', handleJump);
}

// connected to the update loop
export function updateBird(delta){
    if(timeSinceLastJump < JUMP_DURATION){
        setTop(getTop() - BIRD_SPEED * delta)
    }else{
        setTop(getTop() + BIRD_SPEED * delta)
    }   
    timeSinceLastJump += delta; // increasing the timesince last jump in order to force it down
}

export function getBirdRect(){
    return birdElem.getBoundingClientRect(); // gets all the dom positions of the element
}

// helper functions 
function setTop(top){
    birdElem.style.setProperty('--bird-top', top);
}

function getTop(){
    return parseFloat(getComputedStyle(birdElem).getPropertyValue('--bird-top'));
}

function handleJump(e){
    if(e.code !== "Space") return;
    timeSinceLastJump = 0;
}