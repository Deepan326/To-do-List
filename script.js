document.getElementById("btnAdd").addEventListener("click", function () {
    let inputText = document.getElementById("text").value; 
        let newItem = document.createElement("p");
        newItem.innerText = inputText; 
      document.getElementById("box-container").appendChild(newItem); 
        document.getElementById("text").value = "";
       localStorage.setItem("val",document.getElementById("box-container").innerHTML);
        localStorage="";
    });
const savedContent = localStorage.getItem("val");
document.getElementById("box-container").innerHTML=savedContent;


document.getElementById("btnRemove").addEventListener("click", function () {
    let boxContainer = document.getElementById("box-container");
    if (boxContainer.lastChild) { 
        boxContainer.removeChild(boxContainer.lastChild);
    }
});





fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => {
        console.log(data); 
        if ( data) {
            let add = document.createElement("p");
            add.innerText = data.title;
            document.getElementById("box-container").appendChild(add);
             
        }else{
            console.error("error");
        }
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

