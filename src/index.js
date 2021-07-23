import { Project } from "./Project";
import { Task } from "./Task";
import { createElement } from "./createElement";

import { renderInput } from "./renderInput";
import { renderProject } from "./renderProject ";
import { addTasks } from "./addTasks";
import { renderTasks } from "./renderTasks";

const content = document.getElementById('content');
const deleteButton = `<i class="fas fa-times delete"></i>`;
const addButton = `plus`;
const projects = []


const newPrcjInput = renderInput('Project Name', addButton, 'newProject', 'newPrjctText');

content.appendChild(newPrcjInput);

window.addEventListener('click', (e) => {
    if(e.target.classList.contains('newProject')){
        const input = document.getElementById('newPrjctText')
        const newPrjct = new Project(input.value.toUpperCase().trim())
        renderProject(newPrjct);
        projects.push(newPrjct)
        input.value = ''
    } else if(e.target.classList.contains('newTask')) {
        const input = document.getElementById('newTask');
        const newTask = new Task(input.value.toUpperCase().trim());
        const currentProject = e.path[2].innerText.trim();
        addTasks(currentProject, newTask)
        input.value = ''  
    } 
});

export { content, deleteButton, addButton, projects }