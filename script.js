window.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.action-btn');
    const image = document.querySelector('.main-image');
  
    // Slide in buttons one by one
    buttons.forEach((button, index) => {
      setTimeout(() => {
        button.style.transform = 'translateY(0)';
        button.style.opacity = '1';
      }, index * 300); // Delay each button by 300ms
    });
  
    // Fade in the image
    setTimeout(() => {
      image.style.opacity = '1';
    }, 1000); // Fade in after 1 second
  });
  