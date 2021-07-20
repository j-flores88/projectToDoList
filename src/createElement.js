const createElement = (type, content) => {
    let newElement = document.createElement(type);

    newElement.innerHTML = content;

    return newElement
}

export { createElement };