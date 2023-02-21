console.log("Connected...")
    document.addEventListener("submit", function(evnt){
    let isFormValid = true;
    let myform = document.myform;
    let userName = myform.name.value;
    let email = myform.email.value;
    if(userName.length <= 0 ){
        isFormValid = false;
        //alert("Valid Please")
        document.getElementById("textError").textContent = "Please Enter Valid Name";
    }
    if(email.length <=4){
        isFormValid = false;
        document.getElementById("emailError").textContent = "Please Enter Email Address";
    }
    if(!isFormValid){
        evnt.preventDefault();
    }
});