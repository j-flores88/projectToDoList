import { projects } from ".";
import { Task } from './Task'

export const addTasks = (prjct, name, descriton, priority) => {
    let currPj;
    projects.forEach(pj => {
        if(pj.name === prjct) currPj = pj
    });   
    const newTask = new Task(name, descriton, priority);
    currPj.setTasks = newTask;
};