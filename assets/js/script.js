console.log('Hello, World!');

let menuBtn = document.getElementById('menuBtn');
let mobileMenu = document.getElementById('mobileMenu');
const body = document.querySelector('body');
let planetName = document.querySelectorAll('.name-el')
let planetOverview = document.querySelectorAll('.overview-desk');
let planetOverviewText = document.querySelectorAll('.content');
let planetOverviewLink = document.querySelectorAll('.source');


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

function overview(i){
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            planetOverviewText[i].innerHTML = data[i].overview.content;
            planetOverviewLink[i].href = data[i].overview.source;
            planetName[i].innerHTML = data[i].name;
        })
}


function structure(){
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            planetOverview.forEach((i)=>{
                planetOverviewText[num].innerHTML = data[num].overview.content;
                planetOverviewLink[num].href = data[num].overview.source;
                planetName[num].innerHTML = data[num].name;
            })
        })
}

function geology(){
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}

let mobNav = document.querySelectorAll('.planet_name');


function mercuryPlanet(){
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data[1].overview)
    })
}
mercuryPlanet()

mobNav.forEach(planet_name => {
    planet_name.addEventListener('click', (e)=>{
        const styles = e.currentTarget.classList;


        if (styles.contains('mercury') || styles.contains('mob_mer')){
            console.log('It is planet mercury');
            overview(0)
        } 
        else if (styles.contains('venus') || styles.contains('mob_ven')){
            console.log('It is planet venus')
            overview(1)
        }
        else if (styles.contains('earth') || styles.contains('mob_ear')){
            console.log('It is planet Earth')
            overview(2)
        }
        else if (styles.contains('mars') || styles.contains('mob_mar')){
            console.log('It is planet Mars')
            overview(3)
        }
        else if (styles.contains('jupiter') || styles.contains('mob_jup')){
            console.log('It is planet Jupiter')
            overview(4)
        }
        else if (styles.contains('saturn') || styles.contains('mob_sat')){
            console.log('It is planet Saturn')
            overview(5)
        }
        else if (styles.contains('uranus') || styles.contains('mob_ura')){
            console.log('It is planet Uranus')
            overview(6)
        }
        else if (styles.contains('neptune') || styles.contains('mob_nep')){
            console.log('It is planet Neptune')
            overview(7)
        }
    })
})

console.log(planetName)




