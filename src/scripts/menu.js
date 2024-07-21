document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.menu-icon');
  
    menuIcon.addEventListener('click', () => {
      menu.classList.toggle('active');
      menuIcon.classList.toggle('active');
    });
  
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        menu.classList.add('active');
        menuIcon.classList.remove('active');
      } else {
        menu.classList.remove('active');
      }
    });
  
    if (window.innerWidth > 768) {
      menu.classList.add('active');
    }
  });