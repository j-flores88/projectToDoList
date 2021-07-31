export const createElement = (type, content, classes) => {
    let newElement = document.createElement(type);
    if(classes) newElement.classList.add(classes);
    newElement.innerHTML = content;

    return newElement
};