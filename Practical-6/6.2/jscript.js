let text = '{"employees":[' +
    '{"firstName":"Lionel", "lastName":"Messi"},' +
    '{"firstName":"Christiano", "lastName":"Ronaldo"},' +
    '{"firstName":"Robert", "lastName":"Lewandowski"}]}';
const obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.employees[0].firstName + " " + obj.employees[0].lastName + "<br>" + obj.employees[1].firstName + " " + obj.employees[1].lastName + "<br>" + obj.employees[2].firstName + " " + obj.employees[2].lastName;

let student = '{"name":"Messi", "age":35, "city":"Argentina"}';
const obj1 = JSON.parse(student);
document.getElementById("demo1").innerHTML = "Convert string in JSON format using parse() method<br>" + obj1.name;

let student2 = '{name:Messi, age:35, city:Argentina}';
const obj2 = JSON.stringify(student2);
document.getElementById("demo2").innerHTML += "<br>Convert JSON object to string using stringify() method<br>" + obj2;
