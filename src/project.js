import setAttributes from "./setAttributes";

const displayProject = (localStorageContent) => {

    const listProjectContent = document.querySelector(".list-projects");

    if(localStorageContent.length !== 0){

        // This ID will P-datenumber........
        Object.keys(localStorageContent).forEach((key, index) =>{
            const taskItem = JSON.parse(localStorageContent[key])
            if(key[0] === 'P'){

                const li = document.createElement("li")
                listProjectContent.appendChild(li);

                li.innerHTML = `
                    <button class="sidebar-btn project-list">${taskItem["title"]}</button>
                    <p class="p-id-date">${key}</p>
                    <button class="btn-delete-project">X</button>
                `   
            }
        })
    }    
}

export default displayProject;