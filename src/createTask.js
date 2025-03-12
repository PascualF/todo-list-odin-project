export default class CreateTask{
    constructor(title, content, dueDate, priority,completion, project){
        this.title = title; // normal text
        this.content = content; // normal text
        this.dueDate = dueDate; // new Date - Inserted by the user
        this.priority = priority; // 3 options, Low, Medium, High?
        this.completion = completion; // boolean check. true of false
        this.project = project // the kind of project
    } 
}