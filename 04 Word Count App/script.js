
// selct text input box
let textBox = document.querySelector(`.textBox`);


textBox.addEventListener(`keydown input`, () => counter(event));
let wordCount = 0;

function counter() {
    console.log("Test Ok");
    if(event.keycode == 8){
     console.log(`Backspace`);     
    }
    wordCount += 1;
    document.querySelector(`.totalWords`).innerText = wordCount.toString();
    console.log(wordCount);
}
