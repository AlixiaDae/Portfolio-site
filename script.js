const nightBtn = document.getElementById('toDarkMode');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const main = document.querySelector('.main');
const title = document.querySelector('h1');
const links = document.querySelector('.linkcontainer');

nightBtn.addEventListener('click', () => {
    header.classList.toggle('nightmode');
    footer.classList.toggle('nightmode');
    main.classList.toggle('mainNightmode');
    links.classList.toggle('mainNightmode');
    nightBtn.classList.toggle('nightmodeBtnSwitch');
})

const jsPage = document.getElementById('jspage');
const rubyPage = document.getElementById('rubypage');


/*Might try and figure out how to do a page flip effect but initial research suggest jquery plug-ins
More research required

const nextText = document.querySelector('.next');
const nextArrow = document.getElementById('rightarrow');

nextArrow.addEventListener('mouseover', () => {
    nextText.classList.add('nextVisible');
})

nextArrow.addEventListener('mouseleave', () => {
    nextText.classList.remove('nextVisible');
    nextText.classList.add('next');
}) */