console.log("Connected....")
function temperatureConverter() {
    celc=parseFloat(document.getElementById("idCel").value);
    document.getElementById("result").textContent=(celc*1.8)+32;
  }