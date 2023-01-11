console.log("Connected..")
const btnObj = document.getElementsByTagName("button");

function gettime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').textContent = `${h} : ${m} : ${s}`;
  }
function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}
function getDate(){
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    document.getElementById('date').textContent = `${day}-${month}-${year}`;
}
function showtime(){
    gettime();
    getDate();
}
function clrscr(){
    document.getElementById('time').textContent = ` `;
    document.getElementById('date').textContent = ` `;
}
btnObj[0].addEventListener("click",showtime);
btnObj[1].addEventListener("click",clrscr);