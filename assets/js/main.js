const index = document.getElementById('index');
const work = document.getElementById('work');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
const logo = document.getElementById('logo');
//const text = document.getElementsByClassName('bg-text-content');
//console.log(text);
/* for (var i = 0; i <= text.length; i++) {
    console.log(text[i]);
    text[i].style.color = 'red';
    text[i].style.background = 'white';
} */
//text.style.opacity = '0'; 
//text.style.transform = 'translateY(200px)';

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

/*  function textUp() {
    text.style.opacity = '1';
    text.style.transform = 'translateY(0px)';
} 
 */

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



}

navSlide();

/* let elements = document.querySelectorAll('.element');
let currentIndex = -1;
setInterval(next, 5000);


function next() {
    currentIndex = currentIndex + 1;

    if (currentIndex >= elements.length) {
        currentIndex = 0;
    }

    let el = elements[currentIndex];

    let activeElement = document.querySelector('.element.active');

    if (activeElement) {
        activeElement.classList.add('start-out');

        setTimeout(moveActive, 2000, activeElement);
    }

    el.classList.add('active');
}

function moveActive(activeElement) {
    activeElement.classList.remove('active');
    activeElement.classList.remove('start-out');

}

next(); */