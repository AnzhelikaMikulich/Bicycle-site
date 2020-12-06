let header__burger = document.querySelector('.icon-menu');
let header_menu = document.querySelector('.menu_body');
let back = document.querySelector('body');
let header__list = document.querySelector('.menu_list');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}
