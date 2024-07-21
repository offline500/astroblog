document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        menu.classList.toggle('active');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menuIcon.classList.remove('active');
            menu.classList.remove('active');
        }
    });
});