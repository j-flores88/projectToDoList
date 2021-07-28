import { createElement } from "./createElement";
import { projects } from ".";
import { projectList } from ".";


export const renderProjects = () => {
    projectList.innerHTML = '';
    projects.forEach(project => {
        const pjAppend = createElement('div', '');
        const pjTitle = createElement('h4', project.name);
        const pjBtn = createElement('i', `<i class="fas fa-trash delete"></i>`)
        pjAppend.appendChild(pjTitle);
        pjAppend.appendChild(pjBtn)
        projectList.appendChild(pjAppend)
    })
}