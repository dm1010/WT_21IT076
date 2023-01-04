function addItem()
{
    const ULobj = document.getElementById("idItemList")

    const inputItem = document.getElementById("idInn").value;
    document.getElementById("idInn").value=null;

    document.getElementById("idInn").focus();

    const liObj = document.createElement("li");

    liObj.textContent = inputItem;

    ULobj.appendChild(liObj);
}