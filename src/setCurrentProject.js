import _ from "lodash";

const title = document.getElementById('currentTaskTitle');

export const setCurrentProject = (currProject) => {
    title.innerHTML = currProject;
}