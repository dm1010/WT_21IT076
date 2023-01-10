console.log("Working.....")
let maruti = {
    name : "ALTO-800",
    price : 550000,
    Type : "Hachback",
};
let audi = {
    name : "AUDI",
    price : 5550000,
    Type : "Sedan",
};
let benz = {
    name : "MERCEDES G-Wagon",
    price : 7200000,
    Type : "Sports",
};
function showAudi() {
    let name = audi.name;
    let type = audi.Type;
    let price = audi.price;
    let table_data = `<tr> <th> name</th> <th> Type </th> <th> price</th> </tr> <tr> <td> ${name}</td>  <td> ${type}</td> <td> ${price}</td></tr>`
    document.getElementById("msg").innerHTML = table_data;
}
function showMaruti() {
    let name = maruti.name;
    let type = maruti.Type;
    let price = maruti.price;
    let table_data = `<tr> <th> name</th> <th> Type </th> <th> price</th> </tr> <tr> <td> ${name}</td>  <td> ${type}</td> <td> ${price}</td></tr>`
    document.getElementById("msg").innerHTML = table_data;
}
function showBenz() {
    let name = benz.name;
    let type = benz.Type;
    let price = benz.price;
    let table_data = `<tr> <th> name</th> <th> Type </th> <th> price</th> </tr> <tr> <td> ${name}</td>  <td> ${type}</td> <td> ${price}</td></tr>`
    document.getElementById("msg").innerHTML = table_data;
}
