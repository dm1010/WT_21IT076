function calculateAge() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var today = new Date();

    var years = today.getFullYear() - birthdate.getFullYear();
    var months = today.getMonth() - birthdate.getMonth();
    var days = today.getDate() - birthdate.getDate();
    if (days < 0) {
        days += 30;
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }
    if (months === 0 && days === 0 && today.getDate() < birthdate.getDate()) {
        years--;
    }
    document.getElementById("output").textContent = years + " Years, " + months + " Months, " + days + " Days.";
}