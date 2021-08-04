import { createElement } from "./createElement";
import { projects } from ".";
import { projectList } from ".";

export const renderProjects = () => {
    projectList.innerHTML = '';
    projects.forEach(project => {
        const pjAppend = createElement('div', '', 'projectDiv');
        const pjTitle = createElement('h4', project.name, 'projectTitle');
        const btnDiv = createElement('div', '', 'btnDiv')
        const deleteBtn = createElement('i', `<i class="fas fa-trash delete"></i>`);

        btnDiv.appendChild(deleteBtn);

        pjAppend.appendChild(pjTitle);
        pjAppend.appendChild(btnDiv);
        projectList.appendChild(pjAppend);
    })
}