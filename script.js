// 2. Stopwatch App: Build a Stopwatch app which starts by pressing the button start and stop by stop button also there is a reset button.

let startButton = document.querySelector(".controls .startBtn");
startButton.addEventListener(`click`, () => displayTime());

let pauseButton = document.querySelector(".pauseBtn");
pauseButton.addEventListener(`click`, () => pauseCounter());
pauseButton.disabled = true;

let resetButton = document.querySelector(".stopBtn");
resetButton.addEventListener(`click`, () => resetCounter());
resetButton.disabled = true;

let miliSec = 0;
let mins = 0;
let secs = 0;
let intervalSesson;

function displayTime() {
    console.log("Test out");
    intervalSesson = setInterval(displayTimeOnPage, 10);
    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;
}

function displayTimeOnPage() {
    console.log("Test");
    // let cntr = 0;
    miliSec = miliSec + 1;
    // cntr += 1;
    console.log(miliSec);

    if (miliSec == 100) {
        secs = secs + 1;
        document.querySelector(".seconds").innerHTML = secs.toString().padStart(2, 0);
        miliSec = 0;
    }
    if (secs == 60) {
        mins = mins + 1;
        document.querySelector(".minutes").innerHTML = mins.toString().padStart(2, 0);
        secs = 0;
    }
    document.querySelector(".miliSeconds").innerHTML = miliSec.toString().padStart(2, 0);
}

function pauseCounter() {
    clearInterval(intervalSesson);
    pauseButton.disabled = true;
    startButton.disabled = false;
    document.querySelector(".startBtn").innerHTML = `Resume`;
}

function resetCounter() {
    clearInterval(intervalSesson);
    miliSec = 0;
    mins = 0;
    secs = 0;
    document.querySelector(".miliSeconds").innerHTML = `00`;
    document.querySelector(".seconds").innerHTML = `00`;
    document.querySelector(".minutes").innerHTML = `00`;
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
    document.querySelector(".startBtn").innerHTML = `Start`;
}
