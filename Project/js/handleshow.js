const showUl1 = document.getElementById('ul1');
const showUl2 = document.getElementById('ul2');
const showUl3 = document.getElementById('ul3');
const showUl4 = document.getElementById('ul4');
const show = document.querySelector('#show1');
const show2 = document.querySelector('#show2');
const show3 = document.querySelector('#show3');
const show4 = document.querySelector('#show4');

showUl1.addEventListener('click', () => {
    show.classList.toggle('showtag');
});
showUl2.addEventListener('click', () => {
    show2.classList.toggle('showtag');
});
showUl3.addEventListener('click', () => {
    show3.classList.toggle('showtag');
});
showUl4.addEventListener('click', () => {
    show4.classList.toggle('showtag');
});
