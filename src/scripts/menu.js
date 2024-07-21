document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.menu-icon');
  
    const toggleMenu = () => {
      menu.classList.toggle('active');
      menuIcon.classList.toggle('active');
    };
  
    menuIcon.addEventListener('click', () => {
      toggleMenu();
    });
  
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        menu.classList.add('active');
        menuIcon.classList.remove('active');
      } else {
        menu.classList.remove('active');
        menuToggle.checked = false;
      }
    });
  
    if (window.innerWidth > 768) {
      menu.classList.add('active');
    }
  });