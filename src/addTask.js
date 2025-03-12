import displayTask from "./task"
const contentDiv = document.querySelector(".content")
import setAttributes from "./setAttributes"
import CreateTask from "./createTask"

const modalAddTask = () => {



    const h1 = document.createElement("h1")
    h1.setAttribute("class", "addTaskH1")
    h1.innerHTML = "Add Task"
    contentDiv.appendChild(h1)
    
    const divModal = document.createElement("div")
    divModal.setAttribute("class", "modal-div")
    contentDiv.appendChild(divModal)

    const form = document.createElement("form")
    setAttributes(form, {class: "taskForm", method: "POST", action: "#"})

    // Label and input title
    const labelTitle = document.createElement("label")
    labelTitle.setAttribute("for", "title");
    labelTitle.innerHTML = "Title:"
    divModal.appendChild(labelTitle)
    const inputTitle = document.createElement("input")
    setAttributes(inputTitle, {type:"text", id:"title", class:"input-title", name:"title", size:"30",  placeholder:"Title here..." })
    divModal.appendChild(inputTitle)

    // label and input content
    const labelContent = document.createElement("label")
    labelContent.setAttribute("for", "content");
    labelContent.innerHTML = "Description:"
    divModal.appendChild(labelContent)
    const inputContent = document.createElement("textarea")
    setAttributes(inputContent, {type:"text", id:"content", name:"content",class:"input-content", cols:"30", rows:"5", placeholder:"Describe here..." })
    divModal.appendChild(inputContent)

    //label and date selection
    const labelDate = document.createElement("label")
    labelDate.setAttribute("for", "dueDate");
    labelDate.innerHTML = "Date:"
    divModal.appendChild(labelDate)
    const inputDate = document.createElement("input")
    setAttributes(inputDate, {type:"date", id:"dueDate", name:"dueDate", class:"input-date"})
    divModal.appendChild(inputDate)

    // Project assigned
    const labelProject = document.createElement("label")
    labelProject.setAttribute("for", "project");
    labelProject.innerHTML = "Project:"
    divModal.appendChild(labelProject)
    const inputProject = document.createElement("input")
    setAttributes(inputProject, {type:"text", id:"project", name:"project", class:"input-project", size:"30", placeholder:"Project here..."})
    divModal.appendChild(inputProject)

    // Priority assigned
    const labelPriority = document.createElement("label")
    labelPriority.setAttribute("for", "priority");
    labelPriority.innerHTML = "Priority:"
    divModal.appendChild(labelPriority)

    divModal.insertAdjacentHTML('beforeend',`
        <select id="priority" name="priority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High" selected="selected">High</option>
        </select>
    `)
    // Button confirm
    const btnConfirm = document.createElement("input")
    setAttributes(btnConfirm, {type:"submit", value:"Submit"})
    divModal.appendChild(btnConfirm)
    
    btnConfirm.addEventListener("click", () => {
        let valueTitle = document.querySelector(".input-title").value
        let valueContent = document.querySelector(".input-content").value
        let valueDate = document.querySelector(".input-date").value
        let valueProject = document.querySelector(".input-project").value
        let valuePriority = document.querySelector("#priority").value
        contentDiv.innerHTML = ""
        const newTask = new CreateTask(valueTitle, valueContent, valueDate, valuePriority, false, valueProject)
        const idDate = () => Date.now().toString()

        console.log(newTask)
        console.log(idDate())
        localStorage.setItem(idDate(), JSON.stringify(newTask))
        displayTask(localStorage)
    })


    // Button back to main page
    const btnBackToTask = document.createElement("button")
    btnBackToTask.innerHTML = "Back Home"
    divModal.appendChild(btnBackToTask)

    btnBackToTask.addEventListener('click', () => {
        contentDiv.innerHTML = "";
        displayTask(localStorage);
    })

}

export default modalAddTask;