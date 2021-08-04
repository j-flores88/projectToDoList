
import { projects } from ".";
import { findWorkingProject } from "./findWorkingProject";
import { renderTasks } from "./renderTasks";
import { Task } from './Task'

export const addTasks = (prjct, name, descriton, priority) => {
    const currPj = findWorkingProject(prjct)

    const newTask = new Task(name, descriton, priority);
    currPj.setTasks = newTask;
    localStorage.setItem('PROJECTS', JSON.stringify(projects));
    renderTasks(currPj)
};