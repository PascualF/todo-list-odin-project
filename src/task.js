import setAttributes from "./setAttributes";

const displayTask = (localStorageContent, projectFilter = null) => {
    const content = document.querySelector(".content");
    content.innerHTML = ""

    if(localStorageContent.length === 0){
        content.insertAdjacentHTML('beforeend', `<h1>No tasks to show, create one...</h1>`)
    } else {
        // in here it will all depend on the date, the projects.
        const h1 = document.createElement("h1")
        h1.innerHTML = "Tasks"
        content.appendChild(h1)

        const divTasks = document.createElement("div");
        divTasks.setAttribute("class", "list-tasks")
        content.appendChild(divTasks);



        Object.keys(localStorageContent).forEach((key, index) =>{
            const taskItem = JSON.parse(localStorageContent[key])
            if(key[0] !== 'P'){
                const divTaskCard = document.createElement("div")
                divTaskCard.setAttribute("class", "list-task-item")
                divTasks.appendChild(divTaskCard);
                if(projectFilter ===  taskItem["project"] || projectFilter === null){
                divTaskCard.setAttribute("border", "1px solid black")
                divTaskCard.innerHTML = `
                    <div class="task-card">
                        <p class="p-id-date">${key}</p>
                        <div class="title-header">
                            <input type="checkbox" class="checkbox">
                            <h3 class="title-task">${taskItem["title"]}</h3>
                        </div>
                        <div class="task-inside-card">
                            <p class="content-task">${taskItem["content"]}</p>
                            <p class="dueDate-task">${taskItem["dueDate"]}</p>
                            <p class="priority-task">${taskItem["priority"]}</p>
                            <p class="project-task">${taskItem["project"]}</p>
                        </div>
                        <div class="btn-actions">
                            <button class="btn-edit">Edit</button>
                            <button class="btn-delete">Delete</button>
                        </div>
                    </div>
                    `
                }
            }
        })
    }    
}

export default displayTask;