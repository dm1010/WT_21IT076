let btnObj = document.getElementById("btn1");
function showalert() {
    alert("You are Using Event Handle With Add Event Listner In JavaScript. ")
}
btnObj.addEventListener("click", showalert);
function showalert2() {
    alert("You are Using Event Handle by with DOM Onclick Property In JavaScript. ")
}