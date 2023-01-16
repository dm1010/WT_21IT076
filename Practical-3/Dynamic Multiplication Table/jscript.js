function multTable() {
  let num = document.getElementById("num").value;
  let table = document.getElementById("table");

  table.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.textContent = num + " x " + i;
    cell2.textContent = " = ";
    cell3.textContent = num * i;
  }
}
