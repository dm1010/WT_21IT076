function calculateDays() {
    
    var startDate = new Date(document.getElementById("startDate").value);
    var endDate = new Date(document.getElementById("endDate").value);
    
    var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    
    document.getElementById("output").innerHTML = "The number of days between " + startDate.toDateString() + " and " + endDate.toDateString() + " is: " + diffDays;
}
