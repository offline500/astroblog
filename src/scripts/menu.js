document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const overlayMenu = document.querySelector('.overlay-menu');
  
    menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('active');
      overlayMenu.classList.toggle('active');
    });
  
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        menuIcon.classList.remove('active');
        overlayMenu.classList.remove('active');
      }
    });
  });