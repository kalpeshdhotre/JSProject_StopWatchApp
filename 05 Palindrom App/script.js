// Palindrome Checking
let stringToCheck = document.querySelector(`.stringToCheck`);
let checkBtn = document.querySelector(`.checkButton`);

checkBtn.addEventListener(`click`, () => {
    console.log(stringToCheck.value);
    let strCheck = stringToCheck.value.toString().split("").reverse().join("");

    if (strCheck == stringToCheck.value.toString()) {
        console.log("Palindrom");
        document.querySelector(`.result`).innerHTML = "Palindrom";
    } else {
        document.querySelector(`.result`).innerHTML = "NOT Palindrom";
        console.log("Not palindrom");
    }

    console.log(typeof strCheck);
    console.log(strCheck);
});
