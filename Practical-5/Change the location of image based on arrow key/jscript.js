
        document.onkeydown = checkKey;
        function checkKey(e) {
            let i = document.getElementById("idImg");
            e = e || window.event;
            if (e.keyCode == '40') {
                let x = i.style.top;
                let y = parseInt(x, 10) + 10 ;
                i.style.top = y + "px"
                console.log(x,y)  
            }
            else if (e.keyCode == '38') {
                let x = i.style.top;
                let y = parseInt(x, 10) - 10 ;
                i.style.top = y + "px"
            }
            else if (e.keyCode == '39') {
                let x = i.style.left;
                let y = parseInt(x, 10) + 10 ;
                i.style.left = y + "px"
            }
            else if (e.keyCode == '37') {
                let x = i.style.left;
                let y = parseInt(x, 10) - 10 ;
                i.style.left = y + "px"
            }
        }