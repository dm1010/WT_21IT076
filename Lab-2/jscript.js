console.log("JS Connected.....")
function add() {
    let value1 = document.getElementById('a').value;
    let value2 = document.getElementById('b').value;
    let rab = parseInt(value1) + parseInt(value2);
    document.getElementById('res').value = rab;
}
function sub() {
    let value1 = document.getElementById('a').value;
    let value2 = document.getElementById('b').value;
    let rab = value1 - value2;
    document.getElementById('res').value = rab;
}
function mul() {
    let value1 = document.getElementById('a').value;
    let value2 = document.getElementById('b').value;
    let rab = value1 * value2;
    document.getElementById('res').value = rab;
}
function div() {
    let value1 = document.getElementById('a').value;
    let value2 = document.getElementById('b').value;
    let rab = value1 / value2;
    document.getElementById('res').value = rab;
}