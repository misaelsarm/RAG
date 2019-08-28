let elements = document.querySelectorAll('.element');
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


next();