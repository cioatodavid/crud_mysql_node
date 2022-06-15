import { sendElements } from './insert.js';

const btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click', function (event) {
    sendElements();
});
