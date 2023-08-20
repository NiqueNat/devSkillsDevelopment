const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const imgs = document.querySelectorAll('img');
const imageContainer = document.querySelector('.image-container');

// Starts at 0 since array indexing is zero-based
let currentimg = 0; 
let timeout;

// Loops back to 0 if at the end of the array
next.addEventListener('click', () => {
    clearTimeout(timeout);
    currentimg = (currentimg + 1) % imgs.length; 
    updateImage();
});

// to Handle negative indexing
prev.addEventListener('click', () => {
    clearTimeout(timeout);
    currentimg = (currentimg - 1 + imgs.length) % imgs.length; 
    updateImage();
});

// Updates the image and starts the timeout again
function updateImage() {
    imageContainer.style.transition = 'transform 0.3s ease-in-out';
    imageContainer.style.transform = `translateX(-${currentimg * 500}px)`;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        currentimg = (currentimg + 1) % imgs.length;
        updateImage();
    }, 3000);
}

// Starts the automatic transitioning
updateImage();
