const menuIcon = document.getElementById('menu')
const navLinks = document.getElementById('nav-links')

menuIcon.addEventListener('click', () =>{
    navLinks.classList.toggle('mobile-nav')
})