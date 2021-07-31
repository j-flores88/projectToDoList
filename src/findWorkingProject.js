import { projects } from ".";
export const findWorkingProject = (projectToFind) => {
    const workingProject = projects.find((project) => {
        return project.name.includes(projectToFind);
    })
    return workingProject
}