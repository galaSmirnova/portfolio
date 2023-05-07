const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
})

// closeElem.addEventListener('click', () => {
//     menu.classList.remove('active');
// })

// overlay.addEventListener('click', () => {
//     menu.classList.remove('active');
// })

function visibility(e) {
    e.addEventListener('click', () => {
        menu.classList.remove('active');
    })
}

visibility(closeElem);
visibility(overlay);

const counters = document.querySelectorAll('.progress__item-value'),
    lines = document.querySelectorAll('.progress__item-block span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});



