async function demo(){
    let ctr = document.getElementById("country").value;
    const sbr = await fetch(`http://universities.hipolabs.com/search?country=${ctr}`);
    const data = await sbr.json();
    let myDiv=document.getElementById("idDiv");
   // myDiv.innerHTML = data[5].name;
   //Using ForEach
    // data.forEach(element => {
    //     myDiv.innerHTML += `${element.name} <br/>`;
    // } )

    //Using Map() Function
    data.map((i,count)=>{
        if(count<50){
            myDiv.innerHTML += (count+1) + ". " + `${i.name} <br/>`;
        }
        
    })

    data.filter(() => data."state-province" =='Gujarat');
}
