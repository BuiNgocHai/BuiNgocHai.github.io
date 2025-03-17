const words = ["Hai", "an AI Engineer", "a Tech Enthusiast", "a Developer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typingElement = document.querySelector(".typing");

function typeEffect() {
    currentWord = words[i];

    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, j--);
    } else {
        typingElement.textContent = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, 100);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
