export let modalWrap = null;
import { Modal } from 'bootstrap';
import { currentProject } from '.';
import { addTasks } from './addTasks';
import { findWorkingProject } from './findWorkingProject';
import { renderTasks } from './renderTasks';

export const showModal = (title, taskName, description, btnName, project, currTask) => {
    if(modalWrap !== null) modalWrap.remove();

    modalWrap = document.createElement('div');
    modalWrap.innerHTML = `
        <div class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <input type="text" class="form-control" id="newTaskText" placeholder="${taskName}" required>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" id="taskDescription" placeholder="${description}" rows="3" required></textarea>
                        </div>
                            <div class="input-group mb-3">
                                <select class="form-select" id="prioritySelect" required>
                                <option selected>Priority</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                                </select>
                            </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary doneBtn">${btnName}</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    modalWrap.querySelector('.doneBtn').onclick = () => {
        const taskName = modalWrap.querySelector('#newTaskText').value.trim();
        const taskDescription = modalWrap.querySelector('#taskDescription').value.trim();
        const taskPriority = modalWrap.querySelector('#prioritySelect').value;

        if(taskName === '') return;
        if(taskDescription === '') return;
        if(taskPriority === 'Priority') return;

        if(!project && !currTask) {
            addTasks(currentProject, taskName, taskDescription, taskPriority)
        } else {
            const currentProject = findWorkingProject(project)
            const currentTask = currentProject.getTasks.find((task) => {
                return task.name.includes(currTask)
            });
            currentTask.setName = taskName;
            currentTask.setdescription = taskDescription;
            currentTask.setPriority = taskPriority;
            renderTasks(currentProject);
        }
        modal.hide()
    }
    document.body.append(modalWrap);
    let modal = new Modal(modalWrap.querySelector('.modal'));
    modal.show()
}