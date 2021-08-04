import { findWorkingProject } from "./findWorkingProject"
import { renderTasks } from "./renderTasks";
import { projects } from ".";

export const removeTask = (project, task) => {
    const workingProject = findWorkingProject(project);
    workingProject.deleteTask(task);
    localStorage.setItem('PROJECTS', JSON.stringify(projects));
    renderTasks(workingProject);
}