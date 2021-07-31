import { createElement } from './createElement';
const taskArea = document.getElementById('taskArea')

export const renderTasks = (currPj) => {
    taskArea.innerHTML = '';
    const tasks = currPj.getTasks
    if(tasks.length === 0) return
    
    
    console.log(tasks)
  
    tasks.forEach(task => {
        
        const btnSpan = createElement('div', '')
        const tasksDiv = createElement('div', '')
        tasksDiv.setAttribute('id', 'taskDiv');
        const taskTitle = createElement('div', task.name, 'tasktitle');
        const deleteBtn = createElement('i', `<i class="fas fa-trash delete"></i>`);
        const completeBtn = createElement('i', `<i class="fas fa-check complete"></i>`);
        const priorityBtn = createElement('i', `<i class="fas fa-flag priority"></i>`);
        btnSpan.appendChild(deleteBtn)
        btnSpan.appendChild(completeBtn)
        btnSpan.appendChild(priorityBtn)
        tasksDiv.appendChild(taskTitle);
        tasksDiv.appendChild(btnSpan)
        taskArea.appendChild(tasksDiv);
    })
    // currProjectDiv.appendChild(tasksArea)
}