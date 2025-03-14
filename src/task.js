import setAttributes from "./setAttributes";


const displayTask = (localStorageContent) => {
    const content = document.querySelector(".content");
    //content.innerHTML = ""

    if(localStorageContent.length === 0){
        content.insertAdjacentHTML('beforeend', `<h1>No tasks to show, create one...</h1>`)
    } else {
        // in here it will all depend on the date, the projects.
        const h1 = document.createElement("h1")
        h1.innerHTML = "Tasks"
        content.appendChild(h1)

        const ul = document.createElement("ul");
        ul.setAttribute("class", "list-tasks")
        content.appendChild(ul);

        Object.keys(localStorageContent).forEach((key, index) =>{
            const taskItem = JSON.parse(localStorageContent[key])

            const li = document.createElement("li")
            li.setAttribute("class", "list-task-item")
            ul.appendChild(li);

            //get a hidden ID...
            const p_id_date = document.createElement("p")
            setAttributes(p_id_date, {class:"p-id-date"})
            p_id_date.innerHTML = key
            li.appendChild(p_id_date)

            // Title paragraph
            const pTitle = document.createElement("p")
            // checkox
            const checkBox = document.createElement("input")
            setAttributes(checkBox, {type:"checkbox", class:"checkbox"})
            pTitle.innerHTML = taskItem["title"]

            li.appendChild(pTitle).appendChild(checkBox) // appending Title and checkbox

            // Content description
            const pContent = document.createElement("p")
            pContent.innerHTML = taskItem["content"]
            li.appendChild(pContent)

            // create the date
            const pDate = document.createElement("p")
            pDate.innerHTML = taskItem["dueDate"]
            li.appendChild(pDate)
            // create priority
            const pPriority = document.createElement("p")
            pPriority.innerHTML = taskItem["priority"]
            li.appendChild(pPriority)
            // Create Project
            const pProject = document.createElement("p")
            pProject.innerHTML = taskItem["project"]
            li.appendChild(pProject)
            // Create Button Edit
            const btnEdit = document.createElement("button")
            btnEdit.setAttribute("class", "btn-edit")
            btnEdit.innerHTML = "Edit"
            li.appendChild(btnEdit)
            // Create Button Delete
            const btnDelete = document.createElement("button")
            btnDelete.setAttribute("class", "btn-delete")
            btnDelete.innerHTML = "Delete"
            li.appendChild(btnDelete)
        })
    }    
}

export default displayTask;