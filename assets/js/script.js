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

document.querySelectorAll(".mob-nav").forEach(n => n.addEventListener("click", ()=> {
    mobileMenu.classList.add('hide');
    menuBtn.classList.remove('burger');
    body.classList.remove('noscroll');
}))

let mobNav = document.querySelectorAll('.planet_name');


mobNav.forEach(planet_name => {
    planet_name.addEventListener('click', (e)=>{
        const styles = e.currentTarget.classList;

        if (styles.contains('mercury') || styles.contains('mob_mer')){
            console.log('It is planet mercury')
        } 
        else if (styles.contains('venus') || styles.contains('mob_ven')){
            console.log('It is planet venus')
        }
        else if (styles.contains('earth') || styles.contains('mob_ear')){
            console.log('It is planet Earth')
        }
        else if (styles.contains('mars') || styles.contains('mob_mar')){
            console.log('It is planet Mars')
        }
        else if (styles.contains('jupiter') || styles.contains('mob_jup')){
            console.log('It is planet Jupiter')
        }
        else if (styles.contains('saturn') || styles.contains('mob_sat')){
            console.log('It is planet Saturn')
        }
        else if (styles.contains('uranus') || styles.contains('mob_ura')){
            console.log('It is planet Uranus')
        }
        else if (styles.contains('neptune') || styles.contains('mob_nep')){
            console.log('It is planet Neptune')
        }
    })
})


fetch('data.json')
.then(response => response.json())
.then(data => {
    console.log(data)
})