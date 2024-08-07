
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')


const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
   
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,

});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownParent = document.querySelector('.dropdown');


dropdownParent.addEventListener('click', function () {
    dropdownMenu.classList.toggle('show');
});


window.addEventListener('click', function (event) {
    if (!dropdownParent.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});

document.querySelectorAll('.box-title').forEach(function(title) {
    title.addEventListener('click', function() {
      
      title.parentElement.classList.toggle('expand');
    });
});



const imageContainer = document.querySelector('.image-container');
const slides = document.querySelectorAll('.image-box1');

let currentSlide = 0;
const slideInterval = 3000; 

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
}

function updateSlides() {
    const offset = -currentSlide * 100; 
    imageContainer.style.transform = `translateX(${offset}%)`;
}

