document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.input');
    const body = document.querySelector('body');


    input.checked = JSON.parse(localStorage.getItem('dark-mode')) || true;
    updateBody();

    function updateBody() {
        if (input.checked) {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            removeHeartTrail();
            
            // Clears heart trails when switching to dark mode
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            addHeartTrail();
        }
    }

    input.addEventListener('input', () => {
        updateBody();
        updateLocalStorage();
    });

    function updateLocalStorage() {
        localStorage.setItem('dark-mode', JSON.stringify(input.checked));
    }

    function addHeartTrail() {
        if (!body.classList.contains('light-mode')) return;
    
        body.addEventListener('mousemove', (event) => {
            const xPos = event.offsetX;
            const yPos = event.offsetY;
    
            const heart = document.createElement('span');
            heart.classList.add('heart');
    
            heart.style.left = xPos + 'px';
            heart.style.top = yPos + 'px';
            const size = Math.random() * 100; 
            heart.style.width = size + 'px';
            heart.style.height = size + 'px';
            body.appendChild(heart);
    
        // Adds the animation class after appending the heart element
            heart.classList.add('animate');

    // Adjusts the time for the heart trail to disappear here
            setTimeout(() => {
                heart.remove();
            }, 600); 
        });
    
    }

    function removeHeartTrail() {
        const heart = document.querySelectorAll('.heart');
        heart.forEach(heart => heart.remove());
    }
});










