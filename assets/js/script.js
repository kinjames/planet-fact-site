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

let line = document.querySelector('.line');
let after = window.getComputedStyle(line, '::after');


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

                line.style.setProperty('--back','#419ebb');
                line.style.setProperty('--left','0%');
                line.style.setProperty('--trans','translateX(-0%)');


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

                            line.style.setProperty('--back','#419ebb');
                            line.style.setProperty('--left','0%');
                            line.style.setProperty('--trans','translateX(-0%)');

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

                            line.style.setProperty('--back','#419ebb');
                            line.style.setProperty('--left','51%');
                            line.style.setProperty('--trans','translateX(-51%)');

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

                            line.style.setProperty('--back','#419ebb');
                            line.style.setProperty('--left','100%');
                            line.style.setProperty('--trans','translateX(-100%)');

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
                planetOverviewLink[0].href = data[1].overview.source
                planetOverviewLink[1].href = data[1].overview.source
                planetOverview[1].style.backgroundColor = '#eda249'
                internalImageContainer[0].classList.add('hide')
                overviewImageContainer[0].classList.remove('hide')
                geologyImageContainer[0].classList.add('hide')
                internalImageContainer[1].classList.add('hide')
                overviewImageContainer[1].classList.remove('hide')
                geologyImageContainer[1].classList.add('hide')
                overviewImage[0].src = data[1].images.planet
                overviewImage[1].src = data[1].images.planet

                line.style.setProperty('--back','#eda249');
                line.style.setProperty('--left','0%');
                line.style.setProperty('--trans','translateX(-0%)');


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

                            line.style.setProperty('--back','#eda249');
                            line.style.setProperty('--left','0%');
                            line.style.setProperty('--trans','translateX(-0%)');

                            internalImageContainer[0].classList.add('hide')
                            overviewImageContainer[0].classList.remove('hide')
                            geologyImageContainer[0].classList.add('hide')
                            internalImageContainer[1].classList.add('hide')
                            overviewImageContainer[1].classList.remove('hide')
                            geologyImageContainer[1].classList.add('hide')

                            overviewImage[0].src = data[1].images.planet
                            overviewImage[1].src = data[1].images.planet
                        })
                    })
                })

                structure.forEach(struc => {
                    struc.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[1].structure.content
                            planetOverviewText[1].innerHTML = data[1].structure.content
                            planetOverviewLink[0].href = data[1].structure.source
                            planetOverviewLink[1].href = data[1].structure.source
                            planetOverview[1].style.backgroundColor = 'unset'
                            structure[1].style.backgroundColor = '#eda249'
                            geology[1].style.backgroundColor = 'unset'

                            line.style.setProperty('--back','#eda249');
                            line.style.setProperty('--left','51%');
                            line.style.setProperty('--trans','translateX(-51%)');

                            internalImageContainer[0].classList.remove('hide')
                            overviewImageContainer[0].classList.add('hide')
                            geologyImageContainer[0].classList.add('hide')
                            internalImageContainer[1].classList.remove('hide')
                            overviewImageContainer[1].classList.add('hide')
                            geologyImageContainer[1].classList.add('hide')

                            internalImage[0].src = data[1].images.internal
                            internalImage[1].src = data[1].images.internal
                        })
                    })
                })

                geology.forEach(geo => {
                    geo.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[1].geology.content
                            planetOverviewText[1].innerHTML = data[1].geology.content
                            planetOverviewLink[0].href = data[1].geology.source
                            planetOverviewLink[1].href = data[1].geology.source
                            planetOverview[1].style.backgroundColor = 'unset'
                            structure[1].style.backgroundColor = 'unset'
                            geology[1].style.backgroundColor = '#eda249'

                            line.style.setProperty('--back','#eda249');
                            line.style.setProperty('--left','100%');
                            line.style.setProperty('--trans','translateX(-100%)');

                            internalImageContainer[0].classList.add('hide')
                            overviewImageContainer[0].classList.add('hide')
                            geologyImageContainer[0].classList.remove('hide')
                            internalImageContainer[1].classList.add('hide')
                            overviewImageContainer[1].classList.add('hide')
                            geologyImageContainer[1].classList.remove('hide')

                            geoImage[0].src = data[1].images.planet
                            geoImage[1].src = data[1].images.planet
                            geologyImage[0].src = data[1].images.geology
                            geologyImage[1].src = data[1].images.geology
                        })
                    })
                })
            } 
            else if (styles.contains('earth') || styles.contains('mob_ear')){
                planetName[0].innerHTML = data[2].name
                planetName[1].innerHTML = data[2].name
                planetOverviewText[0].innerHTML = data[2].overview.content
                planetOverviewText[1].innerHTML = data[2].overview.content
                planetOverviewLink[0].href = data[2].overview.source
                planetOverviewLink[1].href = data[2].overview.source
                planetOverview[1].style.backgroundColor = '#6d2ed5'
                internalImageContainer[0].classList.add('hide')
                overviewImageContainer[0].classList.remove('hide')
                geologyImageContainer[0].classList.add('hide')
                internalImageContainer[1].classList.add('hide')
                overviewImageContainer[1].classList.remove('hide')
                geologyImageContainer[1].classList.add('hide')
                overviewImage[0].src = data[2].images.planet
                overviewImage[1].src = data[2].images.planet

                line.style.setProperty('--back','#6d2ed5');
                line.style.setProperty('--left','0%');
                line.style.setProperty('--trans','translateX(-0%)');


                rotationEl[0].innerHTML = data[2].rotation
                rotationEl[1].innerHTML = data[2].rotation
                revolutionEl[0].innerHTML = data[2].revolution
                revolutionEl[1].innerHTML = data[2].revolution
                radiusEl[1].innerHTML = data[2].radius
                radiusEl[1].innerHTML = data[2].radius
                averageEl[1].innerHTML = data[2].temperature
                averageEl[1].innerHTML = data[2].temperature
                console.log('It is planet venus');
                planetOverview.forEach(overview => {
                    overview.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[2].overview.content
                            planetOverviewText[1].innerHTML = data[2].overview.content
                            planetOverviewLink[0].href = data[2].overview.source
                            planetOverviewLink[1].href = data[2].overview.source
                            planetOverview[1].style.backgroundColor = '#6d2ed5';
                            structure[1].style.backgroundColor = 'unset'
                            geology[1].style.backgroundColor = 'unset'

                            line.style.setProperty('--back','#6d2ed5');
                            line.style.setProperty('--left','0%');
                            line.style.setProperty('--trans','translateX(-0%)');

                            internalImageContainer[0].classList.add('hide')
                            overviewImageContainer[0].classList.remove('hide')
                            geologyImageContainer[0].classList.add('hide')
                            internalImageContainer[1].classList.add('hide')
                            overviewImageContainer[1].classList.remove('hide')
                            geologyImageContainer[1].classList.add('hide')

                            overviewImage[0].src = data[2].images.planet
                            overviewImage[1].src = data[2].images.planet
                        })
                    })
                })

                structure.forEach(struc => {
                    struc.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[2].structure.content
                            planetOverviewText[1].innerHTML = data[2].structure.content
                            planetOverviewLink[0].href = data[2].structure.source
                            planetOverviewLink[1].href = data[2].structure.source
                            planetOverview[1].style.backgroundColor = 'unset'
                            structure[1].style.backgroundColor = '#6d2ed5'
                            geology[1].style.backgroundColor = 'unset'

                            line.style.setProperty('--back','#6d2ed5');
                            line.style.setProperty('--left','51%');
                            line.style.setProperty('--trans','translateX(-51%)');

                            internalImageContainer[0].classList.remove('hide')
                            overviewImageContainer[0].classList.add('hide')
                            geologyImageContainer[0].classList.add('hide')
                            internalImageContainer[1].classList.remove('hide')
                            overviewImageContainer[1].classList.add('hide')
                            geologyImageContainer[1].classList.add('hide')

                            internalImage[0].src = data[2].images.internal
                            internalImage[1].src = data[2].images.internal
                        })
                    })
                })

                geology.forEach(geo => {
                    geo.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[2].geology.content
                            planetOverviewText[1].innerHTML = data[2].geology.content
                            planetOverviewLink[0].href = data[2].geology.source
                            planetOverviewLink[1].href = data[2].geology.source
                            planetOverview[1].style.backgroundColor = 'unset'
                            structure[1].style.backgroundColor = 'unset'
                            geology[1].style.backgroundColor = '#6d2ed5'

                            line.style.setProperty('--back','#6d2ed5');
                            line.style.setProperty('--left','100%');
                            line.style.setProperty('--trans','translateX(-100%)');

                            internalImageContainer[0].classList.add('hide')
                            overviewImageContainer[0].classList.add('hide')
                            geologyImageContainer[0].classList.remove('hide')
                            internalImageContainer[1].classList.add('hide')
                            overviewImageContainer[1].classList.add('hide')
                            geologyImageContainer[1].classList.remove('hide')

                            geoImage[0].src = data[2].images.planet
                            geoImage[1].src = data[2].images.planet
                            geologyImage[0].src = data[2].images.geology
                            geologyImage[1].src = data[2].images.geology
                        })
                    })
                })
            } 
            else if (styles.contains('mars') || styles.contains('mob_mar')){
                planetName[0].innerHTML = data[3].name
                planetName[1].innerHTML = data[3].name
                planetOverviewText[0].innerHTML = data[3].overview.content
                planetOverviewText[1].innerHTML = data[3].overview.content
                planetOverviewLink[0].href = data[3].overview.source
                planetOverviewLink[1].href = data[3].overview.source
                planetOverview[1].style.backgroundColor = '#d14c32'
                internalImageContainer[0].classList.add('hide')
                overviewImageContainer[0].classList.remove('hide')
                geologyImageContainer[0].classList.add('hide')
                internalImageContainer[1].classList.add('hide')
                overviewImageContainer[1].classList.remove('hide')
                geologyImageContainer[1].classList.add('hide')
                overviewImage[0].src = data[3].images.planet
                overviewImage[1].src = data[3].images.planet

                line.style.setProperty('--back','#d14c32');
                line.style.setProperty('--left','0%');
                line.style.setProperty('--trans','translateX(-0%)');


                rotationEl[0].innerHTML = data[3].rotation
                rotationEl[1].innerHTML = data[3].rotation
                revolutionEl[0].innerHTML = data[3].revolution
                revolutionEl[1].innerHTML = data[3].revolution
                radiusEl[1].innerHTML = data[3].radius
                radiusEl[1].innerHTML = data[3].radius
                averageEl[1].innerHTML = data[3].temperature
                averageEl[1].innerHTML = data[3].temperature
                console.log('It is planet venus');
                planetOverview.forEach(overview => {
                    overview.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[3].overview.content
                            planetOverviewText[1].innerHTML = data[3].overview.content
                            planetOverviewLink[0].href = data[3].overview.source
                            planetOverviewLink[1].href = data[3].overview.source
                            planetOverview[1].style.backgroundColor = '#d14c32';
                            structure[1].style.backgroundColor = 'unset'
                            geology[1].style.backgroundColor = 'unset'

                            line.style.setProperty('--back','#d14c32');
                            line.style.setProperty('--left','0%');
                            line.style.setProperty('--trans','translateX(-0%)');

                            internalImageContainer[0].classList.add('hide')
                            overviewImageContainer[0].classList.remove('hide')
                            geologyImageContainer[0].classList.add('hide')
                            internalImageContainer[1].classList.add('hide')
                            overviewImageContainer[1].classList.remove('hide')
                            geologyImageContainer[1].classList.add('hide')

                            overviewImage[0].src = data[3].images.planet
                            overviewImage[1].src = data[3].images.planet
                        })
                    })
                })

                structure.forEach(struc => {
                    struc.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[3].structure.content
                            planetOverviewText[1].innerHTML = data[3].structure.content
                            planetOverviewLink[0].href = data[3].structure.source
                            planetOverviewLink[1].href = data[3].structure.source
                            planetOverview[1].style.backgroundColor = 'unset'
                            structure[1].style.backgroundColor = '#d14c32'
                            geology[1].style.backgroundColor = 'unset'

                            line.style.setProperty('--back','#d14c32');
                            line.style.setProperty('--left','51%');
                            line.style.setProperty('--trans','translateX(-51%)');

                            internalImageContainer[0].classList.remove('hide')
                            overviewImageContainer[0].classList.add('hide')
                            geologyImageContainer[0].classList.add('hide')
                            internalImageContainer[1].classList.remove('hide')
                            overviewImageContainer[1].classList.add('hide')
                            geologyImageContainer[1].classList.add('hide')

                            internalImage[0].src = data[3].images.internal
                            internalImage[1].src = data[3].images.internal
                        })
                    })
                })

                geology.forEach(geo => {
                    geo.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[3].geology.content
                            planetOverviewText[1].innerHTML = data[3].geology.content
                            planetOverviewLink[0].href = data[3].geology.source
                            planetOverviewLink[1].href = data[3].geology.source
                            planetOverview[1].style.backgroundColor = 'unset'
                            structure[1].style.backgroundColor = 'unset'
                            geology[1].style.backgroundColor = '#d14c32'

                            line.style.setProperty('--back','#d14c32');
                            line.style.setProperty('--left','100%');
                            line.style.setProperty('--trans','translateX(-100%)');

                            internalImageContainer[0].classList.add('hide')
                            overviewImageContainer[0].classList.add('hide')
                            geologyImageContainer[0].classList.remove('hide')
                            internalImageContainer[1].classList.add('hide')
                            overviewImageContainer[1].classList.add('hide')
                            geologyImageContainer[1].classList.remove('hide')

                            geoImage[0].src = data[3].images.planet
                            geoImage[1].src = data[3].images.planet
                            geologyImage[0].src = data[3].images.geology
                            geologyImage[1].src = data[3].images.geology
                        })
                    })
                })
            } 
            else if (styles.contains('jupiter') || styles.contains('mob_jup')){
                planetName[0].innerHTML = data[4].name
                planetName[1].innerHTML = data[4].name
                planetOverviewText[0].innerHTML = data[4].overview.content
                planetOverviewText[1].innerHTML = data[4].overview.content
                planetOverviewLink[0].href = data[4].overview.source
                planetOverviewLink[1].href = data[4].overview.source
                planetOverview[1].style.backgroundColor = '#d83a34'
                internalImageContainer[0].classList.add('hide')
                overviewImageContainer[0].classList.remove('hide')
                geologyImageContainer[0].classList.add('hide')
                internalImageContainer[1].classList.add('hide')
                overviewImageContainer[1].classList.remove('hide')
                geologyImageContainer[1].classList.add('hide')
                overviewImage[0].src = data[4].images.planet
                overviewImage[1].src = data[4].images.planet

                line.style.setProperty('--back','#d83a34');
                line.style.setProperty('--left','0%');
                line.style.setProperty('--trans','translateX(-0%)');


                rotationEl[0].innerHTML = data[4].rotation
                rotationEl[1].innerHTML = data[4].rotation
                revolutionEl[0].innerHTML = data[4].revolution
                revolutionEl[1].innerHTML = data[4].revolution
                radiusEl[1].innerHTML = data[4].radius
                radiusEl[1].innerHTML = data[4].radius
                averageEl[1].innerHTML = data[4].temperature
                averageEl[1].innerHTML = data[4].temperature
                console.log('It is planet venus');
                planetOverview.forEach(overview => {
                    overview.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[4].overview.content
                            planetOverviewText[1].innerHTML = data[4].overview.content
                            planetOverviewLink[0].href = data[4].overview.source
                            planetOverviewLink[1].href = data[4].overview.source
                            planetOverview[1].style.backgroundColor = '#d83a34';
                            structure[1].style.backgroundColor = 'unset'
                            geology[1].style.backgroundColor = 'unset'

                            line.style.setProperty('--back','#d83a34');
                            line.style.setProperty('--left','0%');
                            line.style.setProperty('--trans','translateX(-0%)');

                            internalImageContainer[0].classList.add('hide')
                            overviewImageContainer[0].classList.remove('hide')
                            geologyImageContainer[0].classList.add('hide')
                            internalImageContainer[1].classList.add('hide')
                            overviewImageContainer[1].classList.remove('hide')
                            geologyImageContainer[1].classList.add('hide')

                            overviewImage[0].src = data[4].images.planet
                            overviewImage[1].src = data[4].images.planet
                        })
                    })
                })

                structure.forEach(struc => {
                    struc.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[4].structure.content
                            planetOverviewText[1].innerHTML = data[4].structure.content
                            planetOverviewLink[0].href = data[4].structure.source
                            planetOverviewLink[1].href = data[4].structure.source
                            planetOverview[1].style.backgroundColor = 'unset'
                            structure[1].style.backgroundColor = '#d83a34'
                            geology[1].style.backgroundColor = 'unset'

                            line.style.setProperty('--back','#d83a34');
                            line.style.setProperty('--left','51%');
                            line.style.setProperty('--trans','translateX(-51%)');

                            internalImageContainer[0].classList.remove('hide')
                            overviewImageContainer[0].classList.add('hide')
                            geologyImageContainer[0].classList.add('hide')
                            internalImageContainer[1].classList.remove('hide')
                            overviewImageContainer[1].classList.add('hide')
                            geologyImageContainer[1].classList.add('hide')

                            internalImage[0].src = data[4].images.internal
                            internalImage[1].src = data[4].images.internal
                        })
                    })
                })

                geology.forEach(geo => {
                    geo.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[4].geology.content
                            planetOverviewText[1].innerHTML = data[4].geology.content
                            planetOverviewLink[0].href = data[4].geology.source
                            planetOverviewLink[1].href = data[4].geology.source
                            planetOverview[1].style.backgroundColor = 'unset'
                            structure[1].style.backgroundColor = 'unset'
                            geology[1].style.backgroundColor = '#d83a34';

                            line.style.setProperty('--back','#d83a34');
                            line.style.setProperty('--left','51%');
                            line.style.setProperty('--trans','translateX(-51%)');

                            internalImageContainer[0].classList.add('hide')
                            overviewImageContainer[0].classList.add('hide')
                            geologyImageContainer[0].classList.remove('hide')
                            internalImageContainer[1].classList.add('hide')
                            overviewImageContainer[1].classList.add('hide')
                            geologyImageContainer[1].classList.remove('hide')

                            geoImage[0].src = data[4].images.planet
                            geoImage[1].src = data[4].images.planet
                            geologyImage[0].src = data[4].images.geology
                            geologyImage[1].src = data[4].images.geology
                        })
                    })
                })
            } 
            else if (styles.contains('saturn') || styles.contains('mob_sat')){
                planetName[0].innerHTML = data[5].name
                planetName[1].innerHTML = data[5].name
                planetOverviewText[0].innerHTML = data[5].overview.content
                planetOverviewText[1].innerHTML = data[5].overview.content
                planetOverviewLink[0].href = data[5].overview.source
                planetOverviewLink[1].href = data[5].overview.source
                planetOverview[1].style.backgroundColor = '#cd5120'
                internalImageContainer[0].classList.add('hide')
                overviewImageContainer[0].classList.remove('hide')
                geologyImageContainer[0].classList.add('hide')
                internalImageContainer[1].classList.add('hide')
                overviewImageContainer[1].classList.remove('hide')
                geologyImageContainer[1].classList.add('hide')
                overviewImage[0].src = data[5].images.planet
                overviewImage[1].src = data[5].images.planet

                line.style.setProperty('--back','#cd5120');
                line.style.setProperty('--left','0%');
                line.style.setProperty('--trans','translateX(-0%)');


                rotationEl[0].innerHTML = data[5].rotation
                rotationEl[1].innerHTML = data[5].rotation
                revolutionEl[0].innerHTML = data[5].revolution
                revolutionEl[1].innerHTML = data[5].revolution
                radiusEl[1].innerHTML = data[5].radius
                radiusEl[1].innerHTML = data[5].radius
                averageEl[1].innerHTML = data[5].temperature
                averageEl[1].innerHTML = data[5].temperature
                console.log('It is planet venus');
                planetOverview.forEach(overview => {
                    overview.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[5].overview.content
                            planetOverviewText[1].innerHTML = data[5].overview.content
                            planetOverviewLink[0].href = data[5].overview.source
                            planetOverviewLink[1].href = data[5].overview.source
                            planetOverview[1].style.backgroundColor = '#cd5120';
                            structure[1].style.backgroundColor = 'unset'
                            geology[1].style.backgroundColor = 'unset'

                            line.style.setProperty('--back','#cd5120');
                            line.style.setProperty('--left','0%');
                            line.style.setProperty('--trans','translateX(-0%)');

                            internalImageContainer[0].classList.add('hide')
                            overviewImageContainer[0].classList.remove('hide')
                            geologyImageContainer[0].classList.add('hide')
                            internalImageContainer[1].classList.add('hide')
                            overviewImageContainer[1].classList.remove('hide')
                            geologyImageContainer[1].classList.add('hide')

                            overviewImage[0].src = data[5].images.planet
                            overviewImage[1].src = data[5].images.planet
                        })
                    })
                })

                structure.forEach(struc => {
                    struc.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[5].structure.content
                            planetOverviewText[1].innerHTML = data[5].structure.content
                            planetOverviewLink[0].href = data[5].structure.source
                            planetOverviewLink[1].href = data[5].structure.source
                            planetOverview[1].style.backgroundColor = 'unset'
                            structure[1].style.backgroundColor = '#cd5120'
                            geology[1].style.backgroundColor = 'unset'

                            line.style.setProperty('--back','#cd5120');
                            line.style.setProperty('--left','51%');
                            line.style.setProperty('--trans','translateX(-51%)');

                            internalImageContainer[0].classList.remove('hide')
                            overviewImageContainer[0].classList.add('hide')
                            geologyImageContainer[0].classList.add('hide')
                            internalImageContainer[1].classList.remove('hide')
                            overviewImageContainer[1].classList.add('hide')
                            geologyImageContainer[1].classList.add('hide')

                            internalImage[0].src = data[5].images.internal
                            internalImage[1].src = data[5].images.internal
                        })
                    })
                })

                geology.forEach(geo => {
                    geo.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[5].geology.content
                            planetOverviewText[1].innerHTML = data[5].geology.content
                            planetOverviewLink[0].href = data[5].geology.source
                            planetOverviewLink[1].href = data[5].geology.source
                            planetOverview[1].style.backgroundColor = 'unset'
                            structure[1].style.backgroundColor = 'unset'
                            geology[1].style.backgroundColor = '#cd5120'

                            line.style.setProperty('--back','#cd5120');
                            line.style.setProperty('--left','100%');
                            line.style.setProperty('--trans','translateX(-100%)');

                            internalImageContainer[0].classList.add('hide')
                            overviewImageContainer[0].classList.add('hide')
                            geologyImageContainer[0].classList.remove('hide')
                            internalImageContainer[1].classList.add('hide')
                            overviewImageContainer[1].classList.add('hide')
                            geologyImageContainer[1].classList.remove('hide')

                            geoImage[0].src = data[5].images.planet
                            geoImage[1].src = data[5].images.planet
                            geologyImage[0].src = data[5].images.geology
                            geologyImage[1].src = data[5].images.geology
                        })
                    })
                })
            } 
            else if (styles.contains('uranus') || styles.contains('mob_ura')){
                planetName[0].innerHTML = data[6].name
                planetName[1].innerHTML = data[6].name
                planetOverviewText[0].innerHTML = data[6].overview.content
                planetOverviewText[1].innerHTML = data[6].overview.content
                planetOverviewLink[0].href = data[6].overview.source
                planetOverviewLink[1].href = data[6].overview.source
                planetOverview[1].style.backgroundColor = '#1ec1a2'
                internalImageContainer[0].classList.add('hide')
                overviewImageContainer[0].classList.remove('hide')
                geologyImageContainer[0].classList.add('hide')
                internalImageContainer[1].classList.add('hide')
                overviewImageContainer[1].classList.remove('hide')
                geologyImageContainer[1].classList.add('hide')
                overviewImage[0].src = data[6].images.planet
                overviewImage[1].src = data[6].images.planet

                line.style.setProperty('--back','#1ec1a2');
                line.style.setProperty('--left','0%');
                line.style.setProperty('--trans','translateX(-0%)');


                rotationEl[0].innerHTML = data[6].rotation
                rotationEl[1].innerHTML = data[6].rotation
                revolutionEl[0].innerHTML = data[6].revolution
                revolutionEl[1].innerHTML = data[6].revolution
                radiusEl[1].innerHTML = data[6].radius
                radiusEl[1].innerHTML = data[6].radius
                averageEl[1].innerHTML = data[6].temperature
                averageEl[1].innerHTML = data[6].temperature
                console.log('It is planet venus');
                planetOverview.forEach(overview => {
                    overview.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[6].overview.content
                            planetOverviewText[1].innerHTML = data[6].overview.content
                            planetOverviewLink[0].href = data[6].overview.source
                            planetOverviewLink[1].href = data[6].overview.source
                            planetOverview[1].style.backgroundColor = '#1ec1a2';
                            structure[1].style.backgroundColor = 'unset'
                            geology[1].style.backgroundColor = 'unset'

                            line.style.setProperty('--back','#1ec1a2');
                            line.style.setProperty('--left','0%');
                            line.style.setProperty('--trans','translateX(-0%)');

                            internalImageContainer[0].classList.add('hide')
                            overviewImageContainer[0].classList.remove('hide')
                            geologyImageContainer[0].classList.add('hide')
                            internalImageContainer[1].classList.add('hide')
                            overviewImageContainer[1].classList.remove('hide')
                            geologyImageContainer[1].classList.add('hide')

                            overviewImage[0].src = data[6].images.planet
                            overviewImage[1].src = data[6].images.planet
                        })
                    })
                })

                structure.forEach(struc => {
                    struc.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[6].structure.content
                            planetOverviewText[1].innerHTML = data[6].structure.content
                            planetOverviewLink[0].href = data[6].structure.source
                            planetOverviewLink[1].href = data[6].structure.source
                            planetOverview[1].style.backgroundColor = 'unset'
                            structure[1].style.backgroundColor = '#1ec1a2'
                            geology[1].style.backgroundColor = 'unset'

                            line.style.setProperty('--back','#1ec1a2');
                            line.style.setProperty('--left','51%');
                            line.style.setProperty('--trans','translateX(-51%)');

                            internalImageContainer[0].classList.remove('hide')
                            overviewImageContainer[0].classList.add('hide')
                            geologyImageContainer[0].classList.add('hide')
                            internalImageContainer[1].classList.remove('hide')
                            overviewImageContainer[1].classList.add('hide')
                            geologyImageContainer[1].classList.add('hide')

                            internalImage[0].src = data[6].images.internal
                            internalImage[1].src = data[6].images.internal
                        })
                    })
                })

                geology.forEach(geo => {
                    geo.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[6].geology.content
                            planetOverviewText[1].innerHTML = data[6].geology.content
                            planetOverviewLink[0].href = data[6].geology.source
                            planetOverviewLink[1].href = data[6].geology.source
                            planetOverview[1].style.backgroundColor = 'unset'
                            structure[1].style.backgroundColor = 'unset'
                            geology[1].style.backgroundColor = '#1ec1a2'

                            line.style.setProperty('--back','#1ec1a2');
                            line.style.setProperty('--left','100%');
                            line.style.setProperty('--trans','translateX(-100%)');

                            internalImageContainer[0].classList.add('hide')
                            overviewImageContainer[0].classList.add('hide')
                            geologyImageContainer[0].classList.remove('hide')
                            internalImageContainer[1].classList.add('hide')
                            overviewImageContainer[1].classList.add('hide')
                            geologyImageContainer[1].classList.remove('hide')

                            geoImage[0].src = data[6].images.planet
                            geoImage[1].src = data[6].images.planet
                            geologyImage[0].src = data[6].images.geology
                            geologyImage[1].src = data[6].images.geology
                        })
                    })
                })
            } 
            else if (styles.contains('neptune') || styles.contains('mob_nep')){
                planetName[0].innerHTML = data[7].name
                planetName[1].innerHTML = data[7].name
                planetOverviewText[0].innerHTML = data[7].overview.content
                planetOverviewText[1].innerHTML = data[7].overview.content
                planetOverviewLink[0].href = data[7].overview.source
                planetOverviewLink[1].href = data[7].overview.source
                planetOverview[1].style.backgroundColor = '#2d68f0'
                internalImageContainer[0].classList.add('hide')
                overviewImageContainer[0].classList.remove('hide')
                geologyImageContainer[0].classList.add('hide')
                internalImageContainer[1].classList.add('hide')
                overviewImageContainer[1].classList.remove('hide')
                geologyImageContainer[1].classList.add('hide')
                overviewImage[0].src = data[7].images.planet
                overviewImage[1].src = data[7].images.planet

                line.style.setProperty('--back','#2d68f0');
                line.style.setProperty('--left','0%');
                line.style.setProperty('--trans','translateX(-0%)');


                rotationEl[0].innerHTML = data[7].rotation
                rotationEl[1].innerHTML = data[7].rotation
                revolutionEl[0].innerHTML = data[7].revolution
                revolutionEl[1].innerHTML = data[7].revolution
                radiusEl[1].innerHTML = data[7].radius
                radiusEl[1].innerHTML = data[7].radius
                averageEl[1].innerHTML = data[7].temperature
                averageEl[1].innerHTML = data[7].temperature
                console.log('It is planet venus');
                planetOverview.forEach(overview => {
                    overview.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[7].overview.content
                            planetOverviewText[1].innerHTML = data[7].overview.content
                            planetOverviewLink[0].href = data[7].overview.source
                            planetOverviewLink[1].href = data[7].overview.source
                            planetOverview[1].style.backgroundColor = '#2d68f0';
                            structure[1].style.backgroundColor = 'unset'
                            geology[1].style.backgroundColor = 'unset'

                            line.style.setProperty('--back','#2d68f0');
                            line.style.setProperty('--left','0%');
                            line.style.setProperty('--trans','translateX(-0%)');

                            internalImageContainer[0].classList.add('hide')
                            overviewImageContainer[0].classList.remove('hide')
                            geologyImageContainer[0].classList.add('hide')
                            internalImageContainer[1].classList.add('hide')
                            overviewImageContainer[1].classList.remove('hide')
                            geologyImageContainer[1].classList.add('hide')

                            overviewImage[0].src = data[7].images.planet
                            overviewImage[1].src = data[7].images.planet
                        })
                    })
                })

                structure.forEach(struc => {
                    struc.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[7].structure.content
                            planetOverviewText[1].innerHTML = data[7].structure.content
                            planetOverviewLink[0].href = data[7].structure.source
                            planetOverviewLink[1].href = data[7].structure.source
                            planetOverview[1].style.backgroundColor = 'unset'
                            structure[1].style.backgroundColor = '#2d68f0'
                            geology[1].style.backgroundColor = 'unset'

                            line.style.setProperty('--back','#2d68f0');
                            line.style.setProperty('--left','51%');
                            line.style.setProperty('--trans','translateX(-51%)');

                            internalImageContainer[0].classList.remove('hide')
                            overviewImageContainer[0].classList.add('hide')
                            geologyImageContainer[0].classList.add('hide')
                            internalImageContainer[1].classList.remove('hide')
                            overviewImageContainer[1].classList.add('hide')
                            geologyImageContainer[1].classList.add('hide')

                            internalImage[0].src = data[7].images.internal
                            internalImage[1].src = data[7].images.internal
                        })
                    })
                })

                geology.forEach(geo => {
                    geo.addEventListener('click', ()=>{
                        fetch('data.json')
                        .then(response => response.json())
                        .then(data => {
                            planetOverviewText[0].innerHTML = data[7].geology.content
                            planetOverviewText[1].innerHTML = data[7].geology.content
                            planetOverviewLink[0].href = data[7].geology.source
                            planetOverviewLink[1].href = data[7].geology.source
                            planetOverview[1].style.backgroundColor = 'unset'
                            structure[1].style.backgroundColor = 'unset'
                            geology[1].style.backgroundColor = '#2d68f0'

                            line.style.setProperty('--back','#2d68f0');
                            line.style.setProperty('--left','100%');
                            line.style.setProperty('--trans','translateX(-100%)');

                            internalImageContainer[0].classList.add('hide')
                            overviewImageContainer[0].classList.add('hide')
                            geologyImageContainer[0].classList.remove('hide')
                            internalImageContainer[1].classList.add('hide')
                            overviewImageContainer[1].classList.add('hide')
                            geologyImageContainer[1].classList.remove('hide')

                            geoImage[0].src = data[7].images.planet
                            geoImage[1].src = data[7].images.planet
                            geologyImage[0].src = data[7].images.geology
                            geologyImage[1].src = data[7].images.geology
                        })
                    })
                })
            } 

        })
    })
})

function earthFunction(){
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        planetName[0].innerHTML = data[2].name
        planetName[1].innerHTML = data[2].name
        planetOverviewText[0].innerHTML = data[2].overview.content
        planetOverviewText[1].innerHTML = data[2].overview.content
        planetOverviewLink[0].href = data[2].overview.source
        planetOverviewLink[1].href = data[2].overview.source
        planetOverview[1].style.backgroundColor = '#6d2ed5'
        internalImageContainer[0].classList.add('hide')
        overviewImageContainer[0].classList.remove('hide')
        geologyImageContainer[0].classList.add('hide')
        internalImageContainer[1].classList.add('hide')
        overviewImageContainer[1].classList.remove('hide')
        geologyImageContainer[1].classList.add('hide')
        overviewImage[0].src = data[2].images.planet
        overviewImage[1].src = data[2].images.planet

        line.style.setProperty('--back','#6d2ed5');
        line.style.setProperty('--left','0%');
        line.style.setProperty('--trans','translateX(-0%)');


        rotationEl[0].innerHTML = data[2].rotation
        rotationEl[1].innerHTML = data[2].rotation
        revolutionEl[0].innerHTML = data[2].revolution
        revolutionEl[1].innerHTML = data[2].revolution
        radiusEl[1].innerHTML = data[2].radius
        radiusEl[1].innerHTML = data[2].radius
        averageEl[1].innerHTML = data[2].temperature
        averageEl[1].innerHTML = data[2].temperature
        console.log('It is planet Earth');
        planetOverview.forEach(overview => {
            overview.addEventListener('click', ()=>{
                fetch('data.json')
                .then(response => response.json())
                .then(data => {
                    planetOverviewText[0].innerHTML = data[2].overview.content
                    planetOverviewText[1].innerHTML = data[2].overview.content
                    planetOverviewLink[0].href = data[2].overview.source
                    planetOverviewLink[1].href = data[2].overview.source
                    planetOverview[1].style.backgroundColor = '#6d2ed5';
                    structure[1].style.backgroundColor = 'unset'
                    geology[1].style.backgroundColor = 'unset'

                    line.style.setProperty('--back','#6d2ed5');
                    line.style.setProperty('--left','0%');
                    line.style.setProperty('--trans','translateX(-0%)');

                    internalImageContainer[0].classList.add('hide')
                    overviewImageContainer[0].classList.remove('hide')
                    geologyImageContainer[0].classList.add('hide')
                    internalImageContainer[1].classList.add('hide')
                    overviewImageContainer[1].classList.remove('hide')
                    geologyImageContainer[1].classList.add('hide')

                    overviewImage[0].src = data[2].images.planet
                    overviewImage[1].src = data[2].images.planet
                })
            })
        })

        structure.forEach(struc => {
            struc.addEventListener('click', ()=>{
                fetch('data.json')
                .then(response => response.json())
                .then(data => {
                    planetOverviewText[0].innerHTML = data[2].structure.content
                    planetOverviewText[1].innerHTML = data[2].structure.content
                    planetOverviewLink[0].href = data[2].structure.source
                    planetOverviewLink[1].href = data[2].structure.source
                    planetOverview[1].style.backgroundColor = 'unset'
                    structure[1].style.backgroundColor = '#6d2ed5'
                    geology[1].style.backgroundColor = 'unset'

                    line.style.setProperty('--back','#6d2ed5');
                    line.style.setProperty('--left','51%');
                    line.style.setProperty('--trans','translateX(-51%)');

                    internalImageContainer[0].classList.remove('hide')
                    overviewImageContainer[0].classList.add('hide')
                    geologyImageContainer[0].classList.add('hide')
                    internalImageContainer[1].classList.remove('hide')
                    overviewImageContainer[1].classList.add('hide')
                    geologyImageContainer[1].classList.add('hide')

                    internalImage[0].src = data[2].images.internal
                    internalImage[1].src = data[2].images.internal
                })
            })
        })

        geology.forEach(geo => {
            geo.addEventListener('click', ()=>{
                fetch('data.json')
                .then(response => response.json())
                .then(data => {
                    planetOverviewText[0].innerHTML = data[2].geology.content
                    planetOverviewText[1].innerHTML = data[2].geology.content
                    planetOverviewLink[0].href = data[2].geology.source
                    planetOverviewLink[1].href = data[2].geology.source
                    planetOverview[1].style.backgroundColor = 'unset'
                    structure[1].style.backgroundColor = 'unset'
                    geology[1].style.backgroundColor = '#6d2ed5'

                    line.style.setProperty('--back','#6d2ed5');
                    line.style.setProperty('--left','100%');
                    line.style.setProperty('--trans','translateX(-100%)');

                    internalImageContainer[0].classList.add('hide')
                    overviewImageContainer[0].classList.add('hide')
                    geologyImageContainer[0].classList.remove('hide')
                    internalImageContainer[1].classList.add('hide')
                    overviewImageContainer[1].classList.add('hide')
                    geologyImageContainer[1].classList.remove('hide')

                    geoImage[0].src = data[2].images.planet
                    geoImage[1].src = data[2].images.planet
                    geologyImage[0].src = data[2].images.geology
                    geologyImage[1].src = data[2].images.geology
                })
            })
        })
    })
}

window.onload = earthFunction();






