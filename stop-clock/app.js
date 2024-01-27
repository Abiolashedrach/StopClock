window.onload = function () {
let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let appendMinutes = document.querySelector(".minutes");
    let appendSeconds = document.querySelector(".seconds");
    let appendTens = document.querySelector(".tens");
    let startBTN = document.querySelector(".start");
    let stopBTN = document.querySelector(".stop");
    let reStart = document.querySelector(".restart");
    let interval;
        const startTimer = ()=>{
            tens++
            if (tens <= 9) { 
                appendTens.innerHTML = "0" + tens
            }
            if (tens > 9) {
                appendTens.innerHTML = tens
            }
            if (tens > 99) {
                seconds++
                appendSeconds.innerHTML = "0" + seconds
                tens = 0
                appendTens.innerHTML = "0" + 0;
            }
            if (seconds>9) {
            appendSeconds.innerHTML = seconds                
            }
            if (seconds > 59) {
                minutes++
                appendMinutes.innerHTML = "0" + minutes;
                seconds = 0;
                appendSeconds.innerHTML = "0" + 0;
            }
           
        }
        startBTN.onclick = ()=>{
         clearInterval(interval)
         interval = setInterval(startTimer, 10)       
        };

        stopBTN.onclick = ()=>{
            clearInterval(interval)
        }
        reStart.onclick = () =>{
            clearInterval(interval)
            tens = '00';
            seconds = '00';
            minutes = '00';
            appendTens.innerHTML = tens;
            appendSeconds.innerHTML = seconds;
            appendMinutes.innerHTML = minutes;
        }
    }

