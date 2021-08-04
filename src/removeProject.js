import { projects } from "."
import { renderProjects } from "./renderProjects "

export const removeProject = (project) => {
    for(let i = 0; i < projects.length; i++) {
        if(projects[i].name === project) {
          projects.splice(i, 1)
        }
    }
    localStorage.setItem('PROJECTS', JSON.stringify(projects));
    renderProjects()
}