document.getElementById("btnAdd").addEventListener("click", function () {
    let inputText = document.getElementById("text").value; 
        let newItem = document.createElement("p");
        newItem.innerText = inputText; 
        document.getElementById("box-container").appendChild(newItem); 
        document.getElementById("text").value = "";
    
});

document.getElementById("btnRemove").addEventListener("click", function () {
    let boxContainer = document.getElementById("box-container");
    if (boxContainer.lastChild) { 
        boxContainer.removeChild(boxContainer.lastChild);
    }
});