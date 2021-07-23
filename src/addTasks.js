import { projects } from ".";

export const addTasks = (prjct, task) => {
    let currPj;
    projects.forEach(pj => {
        if(pj.name === prjct) currPj = pj
    });   
    currPj.setTasks = task
};