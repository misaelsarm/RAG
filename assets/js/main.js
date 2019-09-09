const index = document.getElementById('index');
const work = document.getElementById('work');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
const logo = document.getElementById('logo');

logo.style.opacity = '0';

index.style.top = '-40px';
index.style.opacity = '0';

work.style.opacity = '0';
work.style.top = '-40px';

about.style.opacity = '0';
about.style.top = '-40px';

contact.style.opacity = '0';
contact.style.top = '-40px';


function Logo() {
    logo.style.opacity = '1';
    logo.style.visibility = 'visible';
}

function aIndex() {
    index.style.opacity = '1';
    index.style.top = '0';
    index.style.visibility = 'visible';
}

function aAbout() {
    about.style.opacity = '1';
    about.style.top = '0';
    about.style.visibility = 'visible';
}

function aWork() {
    work.style.opacity = '1';
    work.style.top = '0';
    work.style.visibility = 'visible';
}


function aContact() {
    contact.style.opacity = '1';
    contact.style.top = '0';
    contact.style.visibility = 'visible';
}

setTimeout(aIndex, 1000);
setTimeout(aWork, 1200);
setTimeout(aAbout, 1400);

setTimeout(aContact, 1600);
setTimeout(Logo, 1800);
//setTimeout(textUp, 2200);

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`;
            }

        });
        burger.classList.toggle('toggle');
    });


    const index = document.getElementById('index');
    index.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`;
            }

        });
        burger.classList.toggle('toggle');
    });
    const work = document.getElementById('work');
    work.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`;
            }

        });
        burger.classList.toggle('toggle');
    });
    const about = document.getElementById('about');
    about.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`;
            }

        });
        burger.classList.toggle('toggle');
    });
    const contact = document.getElementById('contact');
    contact.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`;
            }

        });
        burger.classList.toggle('toggle');
    });
}

navSlide();

$(document).ready(() => {
    $('#slideshow .slick').slick({
        speed: 1000,
        dots: true,
        arrows: true,
    });
});

$(window).scroll(function() {
    navScroll = document.querySelector('.nav-links');

    /* contactInfo = document.getElementById('contact-info');
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {

        contactInfo.style.backgroundColor = 'black';
    } else {
        contactInfo.style.backgroundColor = 'white';
    } */

    if ($(window).scrollTop() > 6600 && $(window).scrollTop() < 7000) {
        navScroll.classList.add('nav-scroll');
    } else {
        navScroll.classList.remove('nav-scroll');
    }
});