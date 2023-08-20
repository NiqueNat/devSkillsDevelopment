const  container = document.querySelector('.container');

//list of careers
const careers =["Designer", "Programmer", "Web Developer", "Freelance", "Full-Stack Developer", "Front-End Developer", "Back-End Developer", "UI/UX Designer", "Graphic Designer", "Digital Effects Artist"]

//Defines the index of the array
let careersIndex = 0;
let characterIndex = 0;

//Creates a function to update the text
function updateText() {  
    characterIndex++;
    container.innerHTML = `<h1>Myrna Dominique is a ${careers[careersIndex].slice(0, characterIndex)}</h1>`;


//Creates a condition to check if the characterIndex is equal to the length of the array
if(characterIndex === careers[careersIndex].length) {
    careersIndex++;
   characterIndex = 0;
}

if(careersIndex === careers.length) {
    careersIndex = 0;
}
//Sets the time to update the text
setTimeout(updateText, 400);
};

updateText();