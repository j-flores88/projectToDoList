import { createElement } from './createElement';
const taskArea = document.getElementById('taskArea')

export const renderTasks = (currPj) => {
    taskArea.innerHTML = '';
    const tasks = currPj.getTasks;
    if(tasks.length === 0) return
    tasks.forEach(task => {
        
        const btnDiv = createElement('div', '', 'btnDiv');
        const tasksDiv = createElement('div', '');
        tasksDiv.setAttribute('id', 'taskDiv');
        const taskTitle = createElement('div', task.name, 'tasktitle');
        const editBtn = createElement('i', '<i class="fas fa-edit edit"></i>');
        const deleteBtn = createElement('i', `<i class="fas fa-trash delete"></i>`);
        const priorityBtn = createElement('i', `<i class="fas fa-flag priority"></i>`);
        if(task.priority === 'Low') priorityBtn.classList.add('low');
        if(task.priority === 'Medium') priorityBtn.classList.add('medium');
        if(task.priority === 'High') priorityBtn.classList.add('high');
        
        btnDiv.appendChild(editBtn);
        btnDiv.appendChild(priorityBtn);
        btnDiv.appendChild(deleteBtn);
        tasksDiv.appendChild(taskTitle);
        tasksDiv.appendChild(btnDiv);
        taskArea.appendChild(tasksDiv);
    })
}