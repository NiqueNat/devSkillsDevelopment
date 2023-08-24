const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');

//calls the function startTimer when the start button is clicked
start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);

//variables for the timer
let interval;
let timeLeft = 1500;

//updates the timer
function updateTimer(){ 
    let minutes = Math.floor(timeLeft/60);
    let seconds = timeLeft % 60;
    let formattedTimeLeft = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;


    timer.innerHTML = formattedTimeLeft;
}

//starts the timer
function startTimer(){
    interval = setInterval(()=>{
        timeLeft--;
        updateTimer();

        if(timeLeft == 0){
            clearInterval(interval);
            alert('Time is up!');
         timeLeft = 1500; 
         updateTimer();  
        }
    }, 1000);
}

//stops the timer
function stopTimer(){
    clearInterval(interval);
}

//resets the timer to 25 minutes
function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}
