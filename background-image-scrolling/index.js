const bgImage = document.getElementById('bg-image');

window.addEventListener('scroll', () => {
  const { scrollTop } = document.documentElement;
  updateImage()
 
});
//allows the image to change opacity and size as the user scrolls
function updateImage() {    
   bgImage.style.opacity = 1 - (window.scrollY / 900);
 bgImage.style.backgroundSize = 160 - window.scrollY / 12 + '%';

}