window.onscroll = function () { myFunction() };

var navbar = document.getElementsByClassName("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navbar.style.backgroundColor = 'crimson';
    } else {
        navbar.classList.remove("sticky");
        navbar.style.backgroundColor = 'none';
    }
}
const navSlide = () => {
    const burger = document.querySelector('.menu-btn');
    const nav1 = document.querySelector('.menu');

    burger.addEventListener('click', () => {
        nav1.classList.toggle('active');
    });
}
navSlide();

window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if (this.scrollY <= 10) {
        nav.className = '';
    }
    else {
        nav.className = 'scroll';
    }
}