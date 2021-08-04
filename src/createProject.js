import { Project } from "./Project"
import { projects } from ".";
import { renderProjects } from "./renderProjects ";

export const createProject = (projectName) => {
    const newProject = new Project(projectName);
    projects.push(newProject);
    localStorage.setItem('PROJECTS', JSON.stringify(projects));
    renderProjects();
}