export let modalWrap = null;
import { Modal } from 'bootstrap'


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
                            <input type="text" class="form-control" id="newTaskText" placeholder="Task Name">
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" id="taskDescription" placeholder="Task Description" rows="3"></textarea>
                        </div>
                            <div class="input-group">
                                <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                <option selected>Priority</option>
                                <option value="1">Low</option>
                                <option value="2">Medium</option>
                                <option value="3">High</option>
                                </select>

                            </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Create</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.append(modalWrap);
    let modal = new Modal(modalWrap.querySelector('.modal'));
    modal.show()
}