console.log('Hello, World!');

let menuBtn = document.getElementById('menuBtn');
let mobileMenu = document.getElementById('mobileMenu');
const body = document.querySelector('body');

menuBtn.addEventListener('click',()=>{
    if (mobileMenu.classList.contains('hide')){
        mobileMenu.classList.remove('hide');
        menuBtn.classList.add('burger');
        body.classList.add('noscroll');
    } else {
        mobileMenu.classList.add('hide');
        menuBtn.classList.remove('burger');
        body.classList.remove('noscroll');
    }
})