import { findWorkingProject } from "./findWorkingProject";
export let modalWrap = null;
import { Modal } from 'bootstrap';


export const taskPopUp = (project, currTask,) => {
    if(modalWrap !== null) modalWrap.remove();
    const workingProject = findWorkingProject(project);
    const currentTask = workingProject.getTasks.find((task) => {
        return task.name.includes(currTask)
    });

    modalWrap = document.createElement('div');
    modalWrap.innerHTML = `
        <div class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${currentTask.getName}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>${currentTask.getDescription}.</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.append(modalWrap);
    let modal = new Modal(modalWrap.querySelector('.modal'));
    modal.show()
}