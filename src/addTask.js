import displayTask from "./task"
import CreateTask from "./createTask"

const btnConfirm = document.querySelector(".input-task")
const btnBackToTask = document.querySelector(".btn-back-home")
const contentDiv = document.querySelector(".content")
const modalAddingTask = document.querySelector(".modal-add-task")
const inputTitle = document.querySelector(".input-title")
const inputContent = document.querySelector(".input-content")
const inputDate = document.querySelector(".input-date")
const inputPriority = document.querySelector("#priority")
const inputProject = document.querySelector(".input-project")

const handleConfirmClick = () => {
    let valueTitle = inputTitle.value;
    let valueContent = inputContent.value;
    let valueDate = inputDate.value;
    let valueProject = inputProject.value;
    let valuePriority = inputPriority.value;

    contentDiv.innerHTML = ""; // Clear existing content

    const newTask = new CreateTask(valueTitle, valueContent, valueDate, valuePriority, false, valueProject);
    const idDate = () => Date.now().toString();

    localStorage.setItem(idDate(), JSON.stringify(newTask));
    modalAddingTask.classList.add("hidden");

    // Clear inputs properly
    inputTitle.value = "";
    inputContent.value = "";
    inputDate.value = "";
    inputProject.value = "";

    displayTask(localStorage);
};

const modalAddTask = () => {
    modalAddingTask.classList.remove("hidden");

    // Remove existing event listener before adding a new one
    btnConfirm.removeEventListener("click", handleConfirmClick);
    btnConfirm.addEventListener("click", handleConfirmClick);

    btnBackToTask.addEventListener("click", () => {
        contentDiv.innerHTML = "";
        modalAddingTask.classList.add("hidden");
        displayTask(localStorage);
    });
};

export default modalAddTask;