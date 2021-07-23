export const renderInput = (placeholder, buttonType, classes, ids) => {
    const newBTn = `<i class="fas fa-${buttonType} ${classes}"></i>`
    const mainInput = `
        <input type="text" id="${ids}" placeholder="${placeholder}"> 
        ${newBTn}
        `
    const inputDiv = document.createElement('div');

    inputDiv.innerHTML = mainInput;
    return inputDiv;
}