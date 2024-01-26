'use script'


function burger() {
    let a = document.querySelector('.burger')
    let b = document.querySelector('.hero__nav')
    let c = document.querySelector('body')

    a.addEventListener('click', () => {
        a.classList.toggle('burger-open')
        b.classList.toggle('menu__active')
        c.classList.toggle('lock')
    })
}
burger();

