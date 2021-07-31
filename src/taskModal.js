export let modalWrap = null;
import { Modal } from 'bootstrap';

export const showModal = () => {
    if(modalWrap !== null) modalWrap.remove();

    modalWrap = document.createElement('div');
    modalWrap.innerHTML = `
        <div class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">New Task</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <input type="text" class="form-control" id="newTaskText" placeholder="Task Name" required>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" id="taskDescription" placeholder="Task Description" rows="3" required></textarea>
                        </div>
                            <div class="input-group mb-3">
                                <select class="form-select" id="prioritySelect" required>
                                <option selected>Priority</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                                </select>
                            </div>
                            <div class="input-group mb-3">
                                <select class="form-select" id="projectSelect" required>
                                <option selected>Select Project</option>
                            
                                </select>
                            </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary createBtn">Create</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    modalWrap.querySelector('.createBtn').onclick = () => {
        const taskNAme = modalWrap.querySelector('#newTaskText').value.trim();
        const taskDescription = modalWrap.querySelector('#taskDescription').value.trim();
        const taskPriority = modalWrap.querySelector('#prioritySelect').value;

        if(taskNAme === '') return;
        if(taskDescription === '') return;
        if(taskPriority === 'Priority') return;
        modal.hide()
    }

    document.body.append(modalWrap);
    let modal = new Modal(modalWrap.querySelector('.modal'));
    modal.show()
}