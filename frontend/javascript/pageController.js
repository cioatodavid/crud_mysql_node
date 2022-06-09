import { start } from '../javascript/get.js';

const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

btnPrev.addEventListener('click', function () {
    let urlParams = new URLSearchParams(window.location.search);
    let page = urlParams.get('page');
    if (page > 1) {

        window.history.pushState(null, null, `?page=${page - 1}`);
        start(Number(page) - 1);
    } else {
        start(1);
    }
});

btnNext.addEventListener('click', function () {
    const tableRowsLenght = document.getElementsByTagName('tr').length;
    if (tableRowsLenght >= 6) {
        let urlParams = new URLSearchParams(window.location.search);
        let page = urlParams.get('page');
        window.history.pushState(null, null, `?page=${Number(page) + 1}`);
        start(Number(page) + 1);
    } else {
        alert('This is the last page');
    }


});



