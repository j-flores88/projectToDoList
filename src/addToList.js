const addTolist = (currentProject, taskName) => {
    this.name = taskName

    const newTask = document.createElement('li');

    currentProject.appendChild(newTask)
};

export { addTolist };