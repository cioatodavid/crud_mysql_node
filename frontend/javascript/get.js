import { Machine } from './Machine.js';

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
        let machine = new Machine(data[i].ID, data[i].SERIAL_NUMBER, data[i].WIDTH, data[i].HEIGHT, data[i].DEPTH, data[i].WEIGHT);
        tr.appendChild(makeTd(machine.ID, 'ID'));
        tr.appendChild(makeTd(machine.SERIAL_NUMBER, 'SERIAL_NUMBER'));
        tr.appendChild(makeTd(machine.WIDTH, 'WIDTH'));
        tr.appendChild(makeTd(machine.HEIGHT, 'HEIGHT'));
        tr.appendChild(makeTd(machine.DEPTH, 'DEPTH'));
        tr.appendChild(makeTd(machine.WEIGHT, 'WEIGHT'));

    }
}

function start(page) {

    let data = getJSON(`http://localhost:4000/machine/page/${page}`);
    clearRows();
    addRows(data.currPage);

}

export { start };