/* Abrir e fechar a aba de MENU*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const menu of toggle) {
  menu.addEventListener('click', function openMenu() {
    nav.classList.toggle('show')
  })
}

/* Fechar o MENU quando o item for selecionado */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function fecharItemMenu() {
    nav.classList.remove('show')
  })
}

/* Adcionar sombra na nav quando der scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function shadowBorder() {
  

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* Slider com o SWIPER*/
var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    930: {
      slidesPerView: 3,
    }
  }
})

/* Scroll dos itens com o ScrollReveal*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 600,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  #footer .brand, #footer .social
  `,
  { interval: 100 }
)

/* MENU ATIVO NA SEÇÃO */ 
const sections = document.querySelectorAll('main section[id]')

function menuActive() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for(const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight 
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && checkpointEnd) {
      document.querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.add('active')
    } else {
      document.querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')
    }
  }
}

/* Botão para voltar ao topo da página*/
const backToTop = document.querySelector('.back-to-top')

function button() {

  if (window.scrollY >= 780) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

window.addEventListener('scroll', function (){
  shadowBorder()
  button()
  menuActive()
})

/* OUTRA FORMA DE FAZER A FUNÇÃO SHADOWBORDER E BUTTON

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function shadowBorder(){
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

const backToTop = document.querySelector('.back-to-top')

window.addEventListener('scroll', function button(){
  if (window.scrollY >= 830){
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
})
*/

