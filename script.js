document.getElementById("btnAdd").addEventListener("click", function () {
    let inputText = document.getElementById("text").value; 
        let newItem = document.createElement("p");
        newItem.innerText = inputText; 
      document.getElementById("box-container").appendChild(newItem); 
        document.getElementById("text").value = "";
       localStorage.setItem("val",document.getElementById("box-container").innerHTML);
});
const savedContent = localStorage.getItem("val");
document.getElementById("box-container").innerHTML=savedContent;


document.getElementById("btnRemove").addEventListener("click", function () {
    let boxContainer = document.getElementById("box-container");
    if (boxContainer.lastChild) { 
        boxContainer.removeChild(boxContainer.lastChild);
    }
});