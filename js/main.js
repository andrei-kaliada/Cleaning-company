const navPannel = document.querySelector('.navigationPanel');
const navBtn = document.querySelector('.wrapper-header__button');

function showNavPannel(){
    navPannel.classList.toggle('addNavigationPanel');
}

navBtn.addEventListener('click', showNavPannel);



