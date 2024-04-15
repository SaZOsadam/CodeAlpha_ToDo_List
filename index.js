let inputBox = document.getElementById('inputBox');
let listContainer = document.getElementById('listContainer');

//To add in Task and to notified if input box is empty  
function addingTask() {
    if (inputBox.value === ''){
            alert("No task inputed yet!");
    } else {
        const li = document.createElement("LI");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        const span = document.createElement("SPAN");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

// To check Task that has be done or delete Task
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle("mark-checked");
        saveData();
        
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
// To save Task in local storage
function saveData(){
    localStorage.setItem("saveData", listContainer.innerHTML);
}
//To save Task in browser
function showTask(){
    listContainer.innerHTML = localStorage.getItem("savedData");
}
showTask();
