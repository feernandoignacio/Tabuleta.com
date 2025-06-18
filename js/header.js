const menuToggle = document.getElementById('menu-toggle');
const menuMobile = document.getElementById('menu-mobile');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');

function abrirMenu() {
    menuMobile.classList.add('ativo');
    overlay.classList.add('ativo');
}

function fecharMenu() {
    menuMobile.classList.remove('ativo');
    overlay.classList.remove('ativo');
}

menuToggle.addEventListener('click', abrirMenu);
closeBtn.addEventListener('click', fecharMenu);
overlay.addEventListener('click', fecharMenu);
