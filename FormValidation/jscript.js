
function validate() {
    if (document.myForm.name.value == "" || document.myForm.name.value.length < 8) {
        alert("Please Provide Your Name!");
        document.myForm.name.focus();
        return false;
    }

    if (document.myForm.collegeid.value == "" || document.myForm.collegeid.value.length > 8) {
        alert("Please Provide Valid CollegeID!");
        document.myForm.name.focus();
        return false;
    }

    if (document.myForm.email.value == "") {
        alert("Please Provide Valid Email ID!");
        document.myForm.name.focus();
        return false;
    }
    if (document.myForm.phone.value == "" ||
        isNaN(document.myForm.phone.value) ||
        document.myForm.phone.value.length != 10) {
        alert("Please Provide Valid Phone Number!");
        document.myForm.phone.focus();
        return false;
    }

    if (document.myForm.branch.value == "-1") {
        alert("Please Select Your Branch!");
        return false;
    }

    if (document.myForm.semester.value == "-1") {
        alert("Please Select Your Semester!");
        return false;
    }

    let sportsCheck = document.getElementsByName("sports[]");
    let scheck = 0;
    for (let index = 0; index < sportsCheck.length; index++) {
        if (sportsCheck[index].checked) {
            scheck++;
        }
    }

    let culturalCheck = document.getElementsByName("cultural[]");
    let ccheck = 0;
    for (let index = 0; index < sportsCheck.length; index++) {
        if (culturalCheck[index].checked) {
            ccheck++;
        }
    }


    if (scheck < 2 && ccheck < 2) {
        alert("Please Select Atleast Two Cultural Events & Two Sports !");
    }

}