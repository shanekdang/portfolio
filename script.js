function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = (navbar.style.transform === "translateY(0px)") ? "translateY(-500px)" : "translateY(0px)";
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Typewriter Effect

const texts = [
    "DATA ANALYST",
    "PROGRAMMER",
    "SOFTWARE ENGINEER"
]

let speed = 100;
let eraseSpeed = 50;
let delayBetweenTexts = 500;
let delayAfterText = 1000;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, delayAfterText);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, eraseSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, delayBetweenTexts);
    

window.onload = typeWriter;
