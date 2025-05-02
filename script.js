function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
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
];

let speed = 100;
const textElements = document.querySelector(".typewriter-text");
const cursorElement = document.querySelector(".blinking-cursor"); // Keep cursor separate
let textIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (charIndex <= texts[textIndex].length) {
        textElements.innerHTML = texts[textIndex].substring(0, charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        charIndex--;
        textElements.innerHTML = texts[textIndex].substring(0, charIndex);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeWriter, 500);
    }
}


window.onload = typeWriter;

document.querySelector('.typewriter-text').innerHTML += '<span class="blinking-cursor">|</span>';
