/*=============== SHOW MENU ===============*/
const navmenu = document.getElementById('nav-menu');
      navtoggle = document.getElementById('nav-toggle');
      navclose = document.getElementById('nav-close');

    //   Menu show
    
    if(navtoggle){
        navtoggle.addEventListener('click',()=>{
            navmenu.classList.add('show-menu')
        })
    }

    // menu hidden

    if(navclose){
        navclose.addEventListener('click',()=>{
            navmenu.classList.remove('show-menu');
        })
    }

/*=============== REMOVE MENU MOBILE ===============*/
const navlink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navmenu = document.getElementById('nav-menu');

    navmenu.classList.remove('show-menu')
}
navlink.forEach((event) => {
    event.addEventListener('click',()=>{
        // alert('lll')
        linkAction()
    })
    
});


/*=============== ADD SHADOW HEADER ===============*/

const shadowheader = ()=>{
    const header = document.getElementById('header');
    //Add a class if the bottom offset is greater than 50 of the 
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowheader)


/*=============== SWIPER POPULAR ===============*/


/*=============== SHOW SCROLL UP ===============*/ 

const scrollup = () =>{
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
   const sections = document.querySelectorAll('section[id]');

   const scrollActive = () =>{
      const scrollDown = window.scrollY

      sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop-58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

              if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionClass.classList.add('active-link')
              }else{
                sectionClass.classList.remove('active-link')
              }
      })
   }

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    //reset: true, //Animations repeat
})

sr.reveal(`.home__data .popular__container, .footer`)
sr.reveal(`.home__board`, {delay: 700, distance: '100px', origin: 'right'})
sr.reveal(`.home__pizza`, {delay: 1400, distance: '100px', origin: 'bottom', rotate: {z: -90}})
sr.reveal(`.home__ingredient`, {delay: 2000, interval: 100})
sr.reveal(`.about__data, .recipe__list, .contact__data`, {origin: 'right'})
sr.reveal(`.about__img, .recipe__image, .contact__img`, {origin: 'left'})
sr.reveal(`.products__card`,{interval: 100})
