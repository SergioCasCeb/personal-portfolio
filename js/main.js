const burger = document.querySelector('.burger');
const movileNav = document.querySelector('.movile-nav');
const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');
const navLinks = document.querySelectorAll('.movile-nav a')



burger.addEventListener('click', () => {
    movileNav.classList.toggle('nav-open');
    burger.classList.toggle('nav-open');
    line1.classList.toggle('toggle');
    line2.classList.toggle('toggle');
    line3.classList.toggle('toggle');
    document.body.classList.toggle('no-scroll');

});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        movileNav.classList.remove('nav-open');
        burger.classList.remove('nav-open');
        line1.classList.remove('toggle');
        line2.classList.remove('toggle');
        line3.classList.remove('toggle');
        document.body.classList.remove('no-scroll');
    })
})