const hamburger=document.getElementById('hamburger');
const navUl = document.getElementById('navlinks');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

