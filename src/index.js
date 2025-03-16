import "../src/style.css";
import displayTask from "./task";
import displayProject from "./project";
import addTask from "./addTask";
import addProject from "./addProject"

// starts the server with displaying the tasks.
displayTask(localStorage);
displayProject(localStorage)

const divContent = document.querySelector(".content")
const addTaskBtn = document.querySelector(".add-task-btn")
const addProjectBtn = document.querySelector(".add-project-btn")
const listProjectContent = document.querySelector(".list-projects");
const ulContent = document.querySelector(".list-projects")
const sidebarContent = document.querySelector(".sidebar-div")


// Click to add a task
addTaskBtn.addEventListener('click', () => {
    divContent.innerHTML = "";
    addTask();
})

// Click to add a project
addProjectBtn.addEventListener('click', () => {
    listProjectContent.innerHTML = "";
    addProject()
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

    if(buttonEvent.matches(".checkbox") || buttonEvent.closest(".checkbox")){
        const grandParent = buttonEvent.closest(".list-task-item")
        const firstChildId = grandParent.firstChild.textContent
        console.log(firstChildId)
        const buttonChecked = buttonEvent.checked
        const buttonPressed = 'checkbox'
        if(buttonChecked) {
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
    }

    if(buttonEvent.matches('.btn-edit') || buttonEvent.closest('.btn-edit')){
        console.log('edit button clicked')
        const parent = buttonEvent.parentElement
        const firstChild = parent.firstChild
        console.log(firstChild.textContent)
    }
})

sidebarContent.addEventListener("click", (event) => {
    const buttonEvent = event.target;
    console.log(buttonEvent.textContent)

    if(buttonEvent.textContent === 'Today') {
        displayTask(localStorage)
    }
    
    

    displayTask(localStorage, buttonEvent.textContent)
} )

ulContent.addEventListener('click', async (event) => {
    const buttonEventProject = event.target;

    if(buttonEventProject.matches(".btn-delete-project") || buttonEventProject.closest(".btn-delete-project")){
        const parentElement = buttonEventProject.parentElement;
        const idProject = parentElement.childNodes[1].textContent
        const buttonPressed = 'delete'

        const confirm = await confirmRemove(buttonPressed)
        console.log(confirm)
        if(confirm) {
            console.log('delete')
            console.log(localStorage)
            localStorage.removeItem(idProject)
            const listItems = ulContent.querySelectorAll("li:not(:first-child)");
            listItems.forEach(item => item.remove())
            displayProject(localStorage)
        }else{
            console.log('not delete')
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
