    //calling the function//
    const btn = document.querySelector('.btn');
    const closeIcon = document.querySelector('.close-icon');
    const trailerContainer = document.querySelector('.trailer-container');

    const video = document.querySelector('video');
    //adding event listener to remove active//
    btn.addEventListener('click', () => {
        trailerContainer.classList.remove('active');
    });
    //adding event listener to add active back//
    closeIcon.addEventListener('click', () => {
        trailerContainer.classList.add('active');
        video.pause();
        video.currentTime = 0;
    });

