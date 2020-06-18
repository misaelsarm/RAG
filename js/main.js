const menu = document.getElementById('menu');
menu.addEventListener('click', showNav);
let opened = false;

/* -----------Funcion para mostrar el menu en movil----------- */
function showNav() {
    const navLinks = document.getElementById('nav-links');
    const navLinkItems = document.getElementsByClassName('nav-link-item');
    navLinks.classList.toggle('nav-active');
    console.log(navLinkItems);
    let timeOut = 500
    opened = !opened;
    console.log(opened);
    if (opened) {
        for (let i = 0; i < navLinkItems.length; i++) {
            setTimeout(() => {
                navLinkItems[i].style.animation = `navLinkFadeIn 0.5s ease forwards`
            }, timeOut);
            timeOut += 200;
        }
    } else {
        timeOut = 50;
        for (let i = 0; i < navLinkItems.length; i++) {
            setTimeout(() => {
                navLinkItems[i].style.animation = `navLinkFadeOut 0.2s ease forwards`
            }, timeOut);
            timeOut += 100;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    $('#slideshow .slick').slick({
        speed: 1000,
        dots: true,
        arrows: true,
    });
})

$(window).scroll(() => {
    let whatWeDo = document.querySelector('#what-we-do-intro');
    let bounding = whatWeDo.getBoundingClientRect();
    navScroll = document.querySelector('.nav-links');
    if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        navScroll.classList.add('nav-scroll');
    } else {
        navScroll.classList.remove('nav-scroll');

    }
});