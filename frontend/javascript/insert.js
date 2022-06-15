const notyf = new Notyf();


function getElements() {
    let tserial = document.getElementById('SERIAL_TXT')
    let twidth = document.getElementById('WIDTH_TXT')
    let theight = document.getElementById('HEIGHT_TXT')
    let tdepth = document.getElementById('DEPTH_TXT')
    let tweight = document.getElementById('WEIGHT_TXT')
    
    if (tserial.value.length == 0 || twidth.value.length == 0 || theight.value.length == 0 || tdepth.value.length == 0 || tweight.value.length == 0) {
        return [false, 'Please fill all fields'];
    } else {
        let readyJSON = {
            SERIAL_NUMBER: String(tserial.value),
            WIDTH: Number(twidth.value),
            HEIGHT: Number(theight.value),
            DEPTH: Number(tdepth.value),
            WEIGHT: Number(tweight.value)
        }
        return [true, JSON.stringify(readyJSON)];
    }
}

function clearElements() {
    let tserial = document.getElementById('SERIAL_TXT');
    let twidth = document.getElementById('WIDTH_TXT');
    let theight = document.getElementById('HEIGHT_TXT');
    let tdepth = document.getElementById('DEPTH_TXT');
    let tweight = document.getElementById('WEIGHT_TXT');
    [tserial.value, twidth.value, theight.value, tdepth.value, tweight.value] = ['', '', '', '', ''];
    tserial.focus();

}

function sendElements() {
    const [isValid, res] = getElements();
    if (isValid == true) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:4000/machine', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(res);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                notyf.success(JSON.parse(xhr.responseText).message);
                clearElements();
            } else if (xhr.readyState === 4 && xhr.status !== 200) {
                notyf.error(JSON.parse(xhr.responseText).message);
            }
        }
    } else {
        notyf.error(res);
    }
}
export { sendElements }

