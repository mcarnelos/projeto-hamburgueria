window.addEventListener('scroll', onScroll) /* adiciona o evento scroll executando a função onScroll*/

onScroll() /* executa a função, pos não esta mais no body */

function onScroll() { /* gerencia os scrolls da pagina */
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(depositions)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

/* ativa o menu conforme a seção que estiver */
function activateMenuAtCurrentSection(section) {
    //linha alvo
    const targetLine = scrollY + innerHeight / 2

    //verificar se a seção passou da linha
    //quais dados vou precisar?
    
    //o topo da seção
    const sectionTop = section.offsetTop
    //a altura da seção
    const sectionHeight = section.offsetHeight
    //o topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)

    //verificar se a base está abaixo da linha alvo
    //a seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight

    //o final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

    //limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
    menuElement.classList.add('active')
    }
}

function showNavOnScroll() { /* mostra o nav ao fazer scroll */
    if(scrollY > 0) {
    navigation.classList.add('scroll') /* adiciona a classe scroll ao nav quando faz scroll*/
    } else{
    navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if(scrollY > 400) {
    backToTopButton.classList.add('show') /* adiciona a classe show quando passa de 500*/
    } else{
    backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded') /* adiciona a classe menu-expanded ao body quando o menu é aberto*/
}

function closeMenu() {
    document.body.classList.remove('menu-expanded') /* remove a classe menu-expanded quando o menu é fechado */
}

/* define o que aparece conforme voce rola a página */
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services, 
#services header, 
#services, 
#depositions,
#depositions header,
#depositions .content,
#depositions h3,
#depositions .dots,
#depositions .brands,
.card,
#about,
#about header,
#about .content`)