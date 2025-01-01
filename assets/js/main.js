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


/*=============== SCROLL REVEAL ANIMATION ===============*/

