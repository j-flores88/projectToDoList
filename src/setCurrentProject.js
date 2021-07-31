import _ from "lodash";
import { projects } from ".";
import { renderTasks } from "./renderTasks";

const title = document.getElementById('currentTaskTitle');

export const setCurrentProject = (currProject) => {
    title.innerHTML = currProject;
    const workingProject = projects.find((project) => {
        return project.name.includes(currProject);
    })

    renderTasks(workingProject);
}