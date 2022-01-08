
const holeHeight = 120;
const pipes = [];
let timeSinceLastPipe = 0;
const PIPE_INTERVAL = 1500; // milliseconds
const PIPE_SPEED = 0.75;

export function updatePipes(delta){
    timeSinceLastPipe += delta;
    if(timeSinceLastPipe > PIPE_INTERVAL){
        timeSinceLastPipe = timeSinceLastPipe - PIPE_INTERVAL;
        createPipe();
    }
    // moving pipes to the side
    pipes.forEach(pipe=>{
        pipe.left  = pipe.left - delta * PIPE_SPEED
    })
}

function createPipe(){
    const pipeElem = document.createElement('div');
    const topElem = document.createPipeSegment('top');
    const bottomElem = document.createPipeSegment('botttom');
    pipeElem.append(topElem);
    pipeElem.append(bottomElem);
    pipeElem.classList.add('pipe');
    pipeElem.style.setProperty('--hole-top', randomNumberBetween(holeHeight * 1.5, window.innerHeight - holeHeight * 0.5));
    
    // object to get and set pipe property attributes 
    const pipe = {
        get left(){
            return parseFloat(getComputedStyle(pipeElem)).getPropertyValue('--pipe-left');
        },
        set left(value){
            pipeElem.style.setProperty('--pipe-left', value)
        }
    }
    pipe.left = window.innerWidth;
    document.body.append(pipeElem);
    pipes.push(pipe);
}

function createPipeSegment (position){
    const segment = document.createElement('div');
    segment.classList.add('segment', position);
    return segment;

}

function randomNumberBetween (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min); // getting the random between the range
}