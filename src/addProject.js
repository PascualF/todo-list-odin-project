import displayProject from "./project"
import CreateProject from "./createProject"

const btnConfirm = document.querySelector(".input-project-add")
const btnBackToTask = document.querySelector(".btn-back-home-project")
const contentUlProject = document.querySelector(".list-projects")
const modalAddingProject = document.querySelector(".modal-add-project")
const inputTitle = document.querySelector(".project-title")

const clearProjectList = () => {
    contentUlProject.innerHTML = ""
}

const saveAndDisplayProject = () => {

    console.log("submit works")
    const valueTitleProject = inputTitle.value.trim();
    if(!valueTitleProject) return; //This will prevent empty inputs project

    clearProjectList() //Clearing 

    const newProject = new CreateProject(valueTitleProject);
    const projectId = `P-${Date.now()}`;

    localStorage.setItem(projectId, JSON.stringify(newProject));
    modalAddingProject.classList.add("hidden")
    inputTitle.value = ""
    displayProject(localStorage)
}

const handleBackClick = () => {
    clearProjectList()
    modalAddingProject.classList.add("hidden")
    displayProject(localStorage);
}

const modalAddProject = () => {
    modalAddingProject.classList.remove("hidden");

    // Removes previous event listeners before adding new ones
    btnConfirm.removeEventListener("click", saveAndDisplayProject);
    btnBackToTask.removeEventListener("click", handleBackClick);

    // Adding new event listeners
    btnConfirm.addEventListener("click", saveAndDisplayProject, {once:true});
    btnBackToTask.addEventListener("click", handleBackClick, {once:true});
}

export default modalAddProject;