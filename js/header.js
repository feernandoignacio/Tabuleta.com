document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('menu-mobile').classList.add('ativo');
    document.getElementById('overlay').classList.add('ativo');
});

document.getElementById('closeBtn').addEventListener('click', () => {
    document.getElementById('menu-mobile').classList.remove('ativo');
    document.getElementById('overlay').classList.remove('ativo');
});

document.getElementById('overlay').addEventListener('click', () => {
    document.getElementById('menu-mobile').classList.remove('ativo');
    document.getElementById('overlay').classList.remove('ativo');
});
