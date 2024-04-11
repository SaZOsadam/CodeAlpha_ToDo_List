let inputBox = document.getElementById('inputBox');
let listContainer = document.getElementById('listContainer');


function addingTask() {
    if (inputBox.value === " "){
            alert("No task inputed yet!");
    } else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle("mark-checked");
        saveData();
        
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("saveData", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("savedData");
}
showTask();
