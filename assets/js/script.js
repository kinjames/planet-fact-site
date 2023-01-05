console.log('Hello, World!');

let menuBtn = document.getElementById('menuBtn');
let mobileMenu = document.getElementById('mobileMenu');
const body = document.querySelector('body');
let planetName = document.querySelectorAll('.name-el')
let planetOverview = document.querySelectorAll('.overview-desk');
let planetOverviewText = document.querySelectorAll('.content');
let planetOverviewLink = document.querySelectorAll('.source');
let numEl = document.querySelectorAll('.num-el');
let mob_Nav = document.querySelectorAll('.mob-nav');


let structure = document.querySelectorAll('.structures');
let geology = document.querySelectorAll('.geo');


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
        fetch('data.json')
        .then(response => response.json())
        .then(data => {
            if (styles.contains('mercury') || styles.contains('mob_mer')){
                planetName[0].innerHTML = data[0].name
                planetName[1].innerHTML = data[0].name
                planetOverviewText[0].innerHTML = data[0].overview.content
                planetOverviewText[1].innerHTML = data[0].overview.content
                planetOverviewLink[0].href = data[0].overview.source
                planetOverviewLink[1].href = data[0].overview.source
                planetOverview[1].style.backgroundColor = '#419ebb'
                console.log('It is planet mercury');
                planetOverview.forEach(overview => {
                    overview.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[0].overview.content
                            planetOverviewText[1].innerHTML = data[0].overview.content
                            planetOverviewLink[0].href = data[0].overview.source
                            planetOverviewLink[1].href = data[0].overview.source
                            planetOverview[1].style.backgroundColor = '#419ebb';
                            structure[1].style.backgroundColor = 'unset'
                            geology[1].style.backgroundColor = 'unset'
                        })
                    })
                })
                structure.forEach(struc => {
                    struc.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[0].structure.content
                            planetOverviewText[1].innerHTML = data[0].structure.content
                            planetOverviewLink[0].href = data[0].structure.source
                            planetOverviewLink[1].href = data[0].structure.source
                            planetOverview[1].style.backgroundColor = 'unset'
                            structure[1].style.backgroundColor = '#419ebb'
                            geology[1].style.backgroundColor = 'unset'
                        })
                    })
                })
                geology.forEach(geo => {
                    geo.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[0].geology.content
                            planetOverviewText[1].innerHTML = data[0].geology.content
                            planetOverviewLink[0].href = data[0].geology.source
                            planetOverviewLink[1].href = data[0].geology.source
                            planetOverview[1].style.backgroundColor = 'unset'
                            structure[1].style.backgroundColor = 'unset'
                            geology[1].style.backgroundColor = '#419ebb'
                        })
                    })
                })
            } 
            else if (styles.contains('venus') || styles.contains('mob_mer')){
                planetName[0].innerHTML = data[1].name
                planetName[1].innerHTML = data[1].name
                planetOverviewText[0].innerHTML = data[1].overview.content
                planetOverviewText[1].innerHTML = data[1].overview.content
                console.log('It is planet mercury');
                planetOverview.forEach(overview => {
                    overview.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[1].overview.content
                            planetOverviewText[1].innerHTML = data[1].overview.content
                        })
                    })
                })
            } 

        })
    })
})






