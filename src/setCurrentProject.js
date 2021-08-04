import { findWorkingProject } from "./findWorkingProject";
import { renderTasks } from "./renderTasks";

const title = document.getElementById('currentTaskTitle');

export const setCurrentProject = (currProject) => {
    title.innerHTML = currProject;
    const workingProject = findWorkingProject(currProject)

    renderTasks(workingProject);
}