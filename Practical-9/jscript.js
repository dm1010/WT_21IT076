console.log("Connected..")
function validate() {
    if (document.myForm.name.value.length < 5 || document.myForm.name.value.length > 12) {
        document.getElementById("errorUserName").textContent = "UserName Should be between 5 to 12 length!";
        document.myForm.username.focus();
        return false;
    }
    if (document.myForm.password.value.length < 7 || document.myForm.password.value.length > 12) {
        document.getElementById("errorPassword").textContent = "Password Should be between 7 to 12 length!";
        document.myForm.password.focus();
        return false;
    }
    let name = document.myForm.name
    regex = /^[a-zA-Z]+$/;
    if (!regex.test(name.value)) {
        document.getElementById("errorName").textContent = "Name should be alphabet only!";
        document.myForm.name.focus();
        return false;
    }
    if (document.myForm.country.value == "-1") {
        document.getElementById("errorCountry").textContent = "Please Select Your Country!";
        document.myForm.country.focus();
        return false;
    }
    let numbers = /^[0-9]+$/;
    if (!numbers.test(document.myForm.zipcode.value)) {
        document.getElementById("errorZipCode").textContent = "Please Enter Numbers Only!";
        document.myForm.zipcode.focus();
        return false;
    }
    let x = 0;
    let umsex = document.myForm.male;
    let ufsex = document.myForm.female;
    if (umsex.checked) {
        x++;
    } if (ufsex.checked) {
        x++;
    }
    if (x == 0) {
        document.getElementById("errorGender").textContent = "Please Select Your Gender!";
        umsex.focus();
        return false;
    }
    let language = document.getElementsByName("language[]");
    let check = 0;
    for (let index = 0; index < language.length; index++) {
        if (language[index].checked) {
            check++;
        }
    }
    if (check == 0) {
        document.getElementById("errorLanguage").textContent = "Please Select Your Languages!";
        document.myForm.language.focus();
        return false;
    }
}