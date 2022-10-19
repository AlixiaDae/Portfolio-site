const nightBtn = document.getElementById('toDarkMode');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const main = document.querySelector('.main');
const title = document.querySelector('h1');
const links = document.querySelector('.linkcontainer');

nightBtn.addEventListener('click', () => {
    header.classList.toggle('nightmode')
    footer.classList.toggle('nightmode')
    main.classList.toggle('mainNightmode')
    links.classList.toggle('mainNightmode')
    nightBtn.classList.toggle('nightmodeBtnSwitch')
    
})