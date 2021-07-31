import { createProject } from "./createProject";
import {  showModal } from "./taskModal";
import { setCurrentProject } from "./setCurrentProject";
import { removeTask } from "./removeTask";
import { removeProject } from "./removeProject";

const newPjText = document.getElementById('newPjText');
const newPjBtn = document.getElementById('newPjBtn');
const newTaskBtn = document.getElementById('newTaskBtn');

export const projectList = document.getElementById('projectList');
export const projects = [];
export let currentProject = `TODAYS' TASKS`

newPjBtn.addEventListener('click', () => {
    if(newPjText.value === '') return
    createProject(newPjText.value.trim().toUpperCase());
    newPjText.value = ''
});

newTaskBtn.addEventListener('click', () => {
    showModal();
});

window.addEventListener('click', (e) => {
    const target = e.target;
    if(target.classList.contains('projectTitle')) {
        currentProject = target.innerText
        setCurrentProject(currentProject)
    }
    if(target.classList.contains('delete')) {
        if(e.path[3].id === 'taskDiv') {
            removeTask(currentProject, e.path[3].innerText);
        } else if (e.path[3].className === 'projectDiv') {
            removeProject(e.path[3].outerText);
        }   
    }
});

createProject(`TODAYS' TASKS`);
setCurrentProject(projects[0].name)