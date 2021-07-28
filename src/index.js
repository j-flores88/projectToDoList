import { Project } from "./Project";
import { Task } from "./Task";
import { createElement } from "./createElement";

import { renderProjects } from "./renderProjects ";
import { addTasks } from "./addTasks";
import { renderTasks } from "./renderTasks";
import { createProject } from "./createProject";
import {  showModal } from "./taskModal";


const projectsDiv = document.getElementById('projectsDiv');
const newPjText = document.getElementById('newPjText');
const newPjBtn = document.getElementById('newPjBtn');
const currProjectDiv = document.getElementById('currProjectDiv');
const newTaskText = document.getElementById('newTaskText');
const newTaskBtn = document.getElementById('newTaskBtn');
export const projectList = document.getElementById('projectList');
export const projects = [];

newPjBtn.addEventListener('click', () => {
    if(newPjText.value === '') return
    createProject(newPjText.value.trim().toUpperCase());
    newPjText.value = ''
});

newTaskBtn.addEventListener('click', () => {
    showModal();
});