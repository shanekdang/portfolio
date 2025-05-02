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
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML = texts[textIndex].substring(0, charcterIndex) + '<span class="blinking-cursor">|</span>';
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000);
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 1){ 
        textElements.innerHTML = texts[textIndex].substring(0, textElements.innerHTML.length - 2) + '<span class="blinking-cursor">|</span>';
        setTimeout(eraseText, 50);
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

document.querySelector('.typewriter-text').innerHTML += '<span class="blinking-cursor">|</span>';

window.onload = typeWriter
