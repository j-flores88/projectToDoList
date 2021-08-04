import { createProject } from "./createProject";
import { showModal } from "./taskModal";
import { setCurrentProject } from "./setCurrentProject";
import { removeTask } from "./removeTask";
import { removeProject } from "./removeProject";
import { taskPopUp } from "./taskPopUp";
import { renderProjects } from "./renderProjects ";
import { Project } from "./Project";


const newPjText = document.getElementById('newPjText');
const newPjBtn = document.getElementById('newPjBtn');
const newTaskBtn = document.getElementById('newTaskBtn');

export const projectList = document.getElementById('projectList');
export let projects = [];
export let currentProject = '';

export let data = localStorage.getItem('PROJECTS');

newPjBtn.addEventListener('click', () => {
    if(newPjText.value === '') return
    createProject(newPjText.value.trim().toUpperCase());
    newPjText.value = ''
});

newTaskBtn.addEventListener('click', () => {
    showModal('New Task', 'Task Name', 'Task Description', 'Create');
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
    if(target.classList.contains('edit')){
        showModal('Update Task', 'New Task Name', 'New Task Description', 'Update', currentProject, e.path[3].innerText);
    }
    if(target.classList.contains('tasktitle')) {
        taskPopUp(currentProject, e.path[2].innerText, e.path[1])
    }
});

if(JSON.parse(data).length > 0) {
    projects = JSON.parse(data);
    projects.forEach(project => {
        Object.setPrototypeOf(project, Project.prototype)
    })
    setCurrentProject(projects[0].name);
    currentProject = projects[0].name
    renderProjects()
}  else {
    createProject(`TODAYS' TASKS`);
    setCurrentProject(projects[0].name);
    currentProject = `TODAYS' TASKS`;
}