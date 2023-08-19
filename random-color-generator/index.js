const containerEI = document.querySelector('.container');
//generate 30 color containers//
for (let index = 0; index < 30; index++) {
    const colorContainerEI = document.createElement('div');
    colorContainerEI.classList.add('color-container');
    containerEI.appendChild(colorContainerEI);
}

const colorContainerEIs = document.querySelectorAll('.color-container');

generateRandomColor();
//generates random color//
function generateRandomColor() {
    colorContainerEIs.forEach((colorContainerEI) => {
        const newColorCode = randomColor();
        colorContainerEI.style.backgroundColor = newColorCode;
        colorContainerEI.innerHTML = newColorCode;
    });
}
//generates random color code//
function randomColor() {
    const chars = "0123456789ABCDEF";
    const colorCodeLength = 6;
    let colorCode = '#';
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.charAt(randomNum);
    }
    return colorCode;
}
