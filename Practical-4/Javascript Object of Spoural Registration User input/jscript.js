let xyz = {
    Name: "Darsh Mangukiya",
    Branch: "IT",
    ID: "21IT076",
    Sem: '4th',
    Interest: 'Sports'
}
let tbl = document.getElementById("t");
function abc() {
    Object.entries(xyz).forEach(([key, value]) => {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerHTML = key;
        tr.appendChild(td);
        tbl.appendChild(tr);
        td = document.createElement('td');
        td.innerHTML = value;
        tr.appendChild(td);
        tbl.appendChild(tr);
    });
}
let btn = document.getElementById('show');
btn.onclick = () => {
    abc()
}