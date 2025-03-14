import "../src/style.css";
import displayTask from "./task";
import addTask from "./addTask";

// starts the server with displaying the tasks.
displayTask(localStorage);

const divContent = document.querySelector(".content")
const addTaskBtn = document.querySelector(".add-task-btn")
const addProjectBtn = document.querySelector(".add-project-btn")

addTaskBtn.addEventListener('click', () => {
    divContent.innerHTML = "";
    addTask();
})

addProjectBtn.addEventListener('click', (event) => {
    console.log(event.target)
})

// Parent of button that exists.
divContent.addEventListener('click', async (event) => {
    
    const buttonEvent = event.target
    
    if(buttonEvent.matches('.btn-delete') || buttonEvent.closest('.btn-delete')){
        const parent = buttonEvent.parentElement
        const firstChildId = parent.firstChild.textContent
        const buttonPressed = 'delete'

        const confirmation = await confirmRemove(buttonPressed)
        console.log(confirmation)
        if(confirmation) {
            console.log('delete')
            localStorage.removeItem(firstChildId)
            divContent.innerHTML = "";
            displayTask(localStorage)
        }else{
            console.log('not delete')
        }
    }

    if(buttonEvent.matches('.btn-edit') || buttonEvent.closest('.btn-edit')){
        console.log('edit button clicked')
        const parent = buttonEvent.parentElement
        const firstChild = parent.firstChild
        console.log(firstChild.textContent)
    }

    if(buttonEvent.matches(".checkbox") || buttonEvent.closest(".checkbox")){
        const grandParent = buttonEvent.closest(".list-task-item")
        const firstChildId = grandParent.firstChild.textContent
        console.log(firstChildId)
        const buttonChecked = buttonEvent.checked
        const buttonPressed = 'checkbox'
        if(buttonChecked) {
            console.log(confirmRemove(buttonPressed))
        }
    }
})

const confirmRemove = (buttonPressed) => {
    return new Promise((resolve) => {
        
        const pConfirm = document.querySelector(".paragraph-confirm")
        const modalOverlay = document.querySelector(".modal-overlay")
        const modalConfirm = document.querySelector(".modal-confirm")

        modalOverlay.classList.remove("hidden")

        if(buttonPressed === 'checkbox') {
            pConfirm.textContent = 'Did you really did the task!?'
        } else if (buttonPressed === 'delete') {
            pConfirm.textContent = 'Do you really want to delete the task!?'
        }

        modalConfirm.addEventListener('click', (event) => {
            const buttonEvent = event.target
            if(buttonEvent.matches("#confirm-remove") || buttonEvent.closest("#confirm-remove")){
                console.log('confirming')
                modalOverlay.classList.add("hidden")
                resolve(true)
            } else if(buttonEvent.matches("#cancel-remove") || buttonEvent.closest("#cancel-remove")){
                console.log('canceling remove')
                modalOverlay.classList.add("hidden")
                resolve(false)
            }
        })
})}
