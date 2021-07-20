import { content } from "./index";

const renderOnPage = (parent, child) => {
    const parentEl = document.createElement(parent)
    parentEl.appendChild(child);
    content.appendChild(parentEl)
}

export { renderOnPage };