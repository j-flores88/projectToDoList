import { renderInput } from "./renderInput";
import { renderOnPage } from "./renderOnPage";
import { createElement } from "./createElement";
import { addButton, deleteButton } from ".";

export const renderProject = (project) => {
    const projectTitle = createElement('h1', `${project.name} ${deleteButton}`)
    const projectInput = renderInput('New Task', addButton, 'newTask', 'newTask');
    const projectList = document.createElement('ul');

    renderOnPage('div', projectTitle, projectInput, projectList)
}