import { findWorkingProject } from "./findWorkingProject"
import { renderTasks } from "./renderTasks";

export const removeTask = (project, task) => {
    const workingProject = findWorkingProject(project);
    workingProject.deleteTask(task);
    renderTasks(workingProject);
}