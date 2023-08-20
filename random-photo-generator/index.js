    //constants to select DOM elements//
    const imageContainer = document.querySelector('.image-container'); 
    const btn = document.querySelector('.btn');
    let imageNum = 10;

    btn.addEventListener('click', () => {
        addNewImages();
    });

    // Add new images to the DOM//
    function addNewImages() {
        for (let index = 0; index < imageNum; index++) {
            const newImage = document.createElement('img');
            const randomNum = Math.floor(Math.random() * 2000);
            newImage.src = `https://picsum.photos/300?random=${randomNum}`;
            imageContainer.appendChild(newImage);
        }
    }


