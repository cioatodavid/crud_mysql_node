import { prevPage, nextPage } from '../javascript/get.js';

const notyf = new Notyf();
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');



btnPrev.addEventListener('click', function () {
    prevPage();
});

btnNext.addEventListener('click', function () {
    nextPage();
});

export { notyf }