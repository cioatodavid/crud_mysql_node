import { Machine } from './Machine.js';
import { notyf } from './pageController.js';

function getJSON(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send(null);
    return JSON.parse(request.responseText);
}

function makeTd(data, classe) {
    let td = document.createElement('td');
    td.innerHTML = data;
    td.setAttribute('data-label', classe);
    return td;
}

function clearRows() {
    let table = document.getElementById('resTable');
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    let tbody = document.getElementsByTagName('tbody');
    if (tbody.length > 1) {
        table.removeChild(tbody[0]);
    }
}

function addRows(data) {
    let table = document.getElementById('resTable');
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement('tr');
        tbody.appendChild(tr);
        let machine = new Machine(
            data[i].ID,
            data[i].SERIAL_NUMBER,
            data[i].WIDTH,
            data[i].HEIGHT,
            data[i].DEPTH,
            data[i].WEIGHT
        );
        tr.appendChild(makeTd(machine.ID, 'ID'));
        tr.appendChild(makeTd(machine.SERIAL_NUMBER, 'SERIAL_NUMBER'));
        tr.appendChild(makeTd(machine.WIDTH, 'WIDTH'));
        tr.appendChild(makeTd(machine.HEIGHT, 'HEIGHT'));
        tr.appendChild(makeTd(machine.DEPTH, 'DEPTH'));
        tr.appendChild(makeTd(machine.WEIGHT, 'WEIGHT'));
    }
}
function verifyData(page) {
    let data = getJSON(`http://localhost:4000/machine/page/${page}`);
    if (data.message === 'No machines found') {
        notyf.error('Empty page');
    } else {
        window.history.pushState(null, null, `?page=${page}`);
        clearRows();
        addRows(data.currPage);

    }
}

function prevPage() {
    let urlParams = new URLSearchParams(window.location.search);
    let page = urlParams.get('page');
    if (page > 1) {
        window.history.pushState(null, null, `?page=${page - 1}`);
        verifyData(Number(page) - 1);
    } else {
        notyf.error('You are on the first page');
    }
}

function nextPage() {
    let urlParams = new URLSearchParams(window.location.search);
    let page = urlParams.get('page');
    verifyData(Number(page) + 1);

}

function getPage() {
    let urlParams = new URLSearchParams(window.location.search);
    let page = urlParams.get('page');
    if (page == null || page == undefined || page == "" || Number(page) < 1) {
        window.history.pushState(null, null, '?page=1');
        verifyData(1);
    } else {
        verifyData(page);
    }
}


export { prevPage, nextPage, getPage };
