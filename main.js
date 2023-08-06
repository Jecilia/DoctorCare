window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnscroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  //aqui ele pega o meio(linha alvo)
  const targetLine = scrollY + innerHeight / 2
  // verificar se a sessão passou da linha
  //quais dados vou precisar? precisei do scroll no eixo y, a altura, e o top.  Todos esses elementos peguei os valores.

  const sectionTop = home.offsetTop
  const sectionHeight = home.offsetHeight

  //o topo da sessão chegou ou ultrapassou a linha alvo?
  //
  const sectionTopReachOrPassedTergetline = targetLine >= sectionTop

//informações dos dados e da lógica
  console.log('O topo da sessão chegou ou passou da linha?', sectionTopReachOrPassedTergetline)

//verificar se a base está abaixo da linha alvo
//quais dados vou precisar

//a base da sessão é o fim da sessão anterior

const sectionEndsAt = sectionTop + sectionHeight
//o final da sessão passou da linha alvo
const sectionEndPassedTargetline = sectionEndsAt <= targetLine

console.log('O fundo da sessão passou da linha?',sectionEndPassedTargetline)

//limites da sessão
const sectionBoundaries = sectionTopReachOrPassedTergetline && !sectionEndPassedTargetline
// o acento grave significa que vou declarar um atrbuto dentro da minha string
const sectionId = section.getAttribute('id')
//dentro do documento procura(querySelector) .menu, tag a e pega o valor do atributo href
const menuElement = document.querySelector(`.menu a[href*= ${sectionId}]`)
menuElement.classList.remove('active')
if(sectionBoundaries){
  menuElement.classList.add('active')
}
}


function showNavOnScroll() {
  if (scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}

function showBackToTopButtonOnscroll() {
  if (scrollY > 400) {
    back.classList.add('show')
  } else {
    back.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
/*Acho que só funciona online*/
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
 #home,
 #home img, 
 #home .stats, 
 #services,
 #services header,
 #services .card,
 #about,
 #about header,
 #about .content`) /* ACENTO AGUDO PARA ABRIR E ACENTO AGUDO PARA FECHAR, TAMBÉM POSSO UTILIZAR AS VÍRGULAS ALTAS, SÓ QUE NÃO SERÁ POSSÍVEL FAZER QUEBRA DE LINHA, primeiro vai aparecer o #home(header), depois a imagem, depois o stats */



