const bodyEI = document.querySelector('body');

bodyEI.addEventListener('mousemove', (event) => {
  const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEI = document.createElement('span');
    spanEI.style.left = xPos + 'px';
    spanEI.style.top = yPos + 'px';
    const size = Math.random() * 100;
    spanEI.style.width = size + 'px';
    spanEI.style.height = size + 'px';
    bodyEI.appendChild(spanEI);
    setTimeout(() => {
      spanEI.remove();
    }, 3000);
});