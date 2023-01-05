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

let overviewImageContainer = document.querySelectorAll('.over-image');
let internalImageContainer = document.querySelectorAll('.intern-image');
let geologyImageContainer = document.querySelectorAll('.logy-image');

let overviewImage = document.querySelectorAll('.overview-image');
let internalImage = document.querySelectorAll('.internal-image');
let geoImage = document.querySelectorAll('.geo-image');
let geologyImage = document.querySelectorAll('.geology-image');


let structure = document.querySelectorAll('.structures');
let geology = document.querySelectorAll('.geo');

let rotationEl = document.querySelectorAll('.rotation-el');
let revolutionEl = document.querySelectorAll('.revolution-el');
let radiusEl = document.querySelectorAll('.radius-el');
let averageEl = document.querySelectorAll('.average-el');


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
                internalImageContainer[0].classList.add('hide')
                overviewImageContainer[0].classList.remove('hide')
                geologyImageContainer[0].classList.add('hide')
                internalImageContainer[1].classList.add('hide')
                overviewImageContainer[1].classList.remove('hide')
                geologyImageContainer[1].classList.add('hide')
                overviewImage[0].src = data[0].images.planet
                overviewImage[1].src = data[0].images.planet



                rotationEl[0].innerHTML = data[0].rotation
                rotationEl[1].innerHTML = data[0].rotation
                revolutionEl[0].innerHTML = data[0].revolution
                revolutionEl[1].innerHTML = data[0].revolution
                radiusEl[1].innerHTML = data[0].radius
                radiusEl[1].innerHTML = data[0].radius
                averageEl[1].innerHTML = data[0].temperature
                averageEl[1].innerHTML = data[0].temperature
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

                            internalImageContainer[0].classList.add('hide')
                            overviewImageContainer[0].classList.remove('hide')
                            geologyImageContainer[0].classList.add('hide')
                            internalImageContainer[1].classList.add('hide')
                            overviewImageContainer[1].classList.remove('hide')
                            geologyImageContainer[1].classList.add('hide')

                            overviewImage[0].src = data[0].images.planet
                            overviewImage[1].src = data[0].images.planet

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

                            internalImageContainer[0].classList.remove('hide')
                            overviewImageContainer[0].classList.add('hide')
                            geologyImageContainer[0].classList.add('hide')
                            internalImageContainer[1].classList.remove('hide')
                            overviewImageContainer[1].classList.add('hide')
                            geologyImageContainer[1].classList.add('hide')

                            internalImage[0].src = data[0].images.internal
                            internalImage[1].src = data[0].images.internal
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

                            internalImageContainer[0].classList.add('hide')
                            overviewImageContainer[0].classList.add('hide')
                            geologyImageContainer[0].classList.remove('hide')
                            internalImageContainer[1].classList.add('hide')
                            overviewImageContainer[1].classList.add('hide')
                            geologyImageContainer[1].classList.remove('hide')

                            geoImage[0].src = data[0].images.planet
                            geoImage[1].src = data[0].images.planet
                            geologyImage[0].src = data[0].images.geology
                            geologyImage[1].src = data[0].images.geology
                        })
                    })
                })
            } 
            else if (styles.contains('venus') || styles.contains('mob_ven')){
                planetName[0].innerHTML = data[1].name
                planetName[1].innerHTML = data[1].name
                planetOverviewText[0].innerHTML = data[1].overview.content
                planetOverviewText[1].innerHTML = data[1].overview.content
                planetOverviewLink[0].href = data[0].overview.source
                planetOverviewLink[1].href = data[0].overview.source
                planetOverview[1].style.backgroundColor = '#eda249'


                rotationEl[0].innerHTML = data[1].rotation
                rotationEl[1].innerHTML = data[1].rotation
                revolutionEl[0].innerHTML = data[1].revolution
                revolutionEl[1].innerHTML = data[1].revolution
                radiusEl[1].innerHTML = data[1].radius
                radiusEl[1].innerHTML = data[1].radius
                averageEl[1].innerHTML = data[1].temperature
                averageEl[1].innerHTML = data[1].temperature
                console.log('It is planet venus');
                planetOverview.forEach(overview => {
                    overview.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[1].overview.content
                            planetOverviewText[1].innerHTML = data[1].overview.content
                            planetOverviewLink[0].href = data[1].overview.source
                            planetOverviewLink[1].href = data[1].overview.source
                            planetOverview[1].style.backgroundColor = '#eda249';
                            structure[1].style.backgroundColor = 'unset'
                            geology[1].style.backgroundColor = 'unset'
                        })
                    })
                })
            } 

        })
    })
})






