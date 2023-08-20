const  container = document.querySelector('.container');

const careers =["Designer", "Programmer", "Web Developer", "Freelance", "Full-Stack Developer", "Front-End Developer", "Back-End Developer", "UI/UX Designer", "Graphic Designer", "Digital Effects Artist"]

let careersIndex = 0;
let characterIndex = 0;

function updateText() {  
    characterIndex++;
    container.innerHTML = `<h1>Myrna Dominique is a ${careers[careersIndex].slice(0, characterIndex)}</h1>`;



if(characterIndex === careers[careersIndex].length) {
    careersIndex++;
   characterIndex = 0;
}
if(careersIndex === careers.length) {
    careersIndex = 0;
}
setTimeout(updateText, 400);
};

updateText();