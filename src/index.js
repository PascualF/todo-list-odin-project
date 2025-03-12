import "../src/style.css";
import displayTask from "./task";
import addTask from "./addTask"

// starts the server with displaying the tasks.
displayTask(localStorage);

const divContent = document.querySelector(".content")
const addTaskBtn = document.querySelector(".add-task-btn")


addTaskBtn.addEventListener('click', () => {
    divContent.innerHTML = "";
    addTask();
})

// Parent of button that exists.
divContent.addEventListener('click', (event) => {
    
    const buttonEvent = event.target
    
    if(buttonEvent.matches('.btn-delete') || buttonEvent.closest('.btn-delete')){
        const parent = buttonEvent.parentElement
        const firstChildId = parent.firstChild.textContent
        console.log(firstChildId)
    }

    if(buttonEvent.matches('.btn-edit') || buttonEvent.closest('.btn-edit')){
        console.log('edit button clicked')
        const parent = buttonEvent.parentElement
        const firstChild = parent.firstChild
        console.log(firstChild.textContent)
    }

   
})