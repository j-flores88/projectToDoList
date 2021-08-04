export class Project{
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
    get getName() {
        return this.name;
    }
    set setName(value){
        if(value)
        this.name = value;
    }
    get getTasks() {
      return this.tasks;
    }
    set setTasks(value) {
      if(value)
      this.tasks.push(value);
    }
    findTask(value) {
      if(value)
      for(let i = 0; i < this.tasks.length; i++) {
        if(this.tasks[i].name === value) {
          return true
        }
      }
    }
    deleteTask(value) {
      if(value)
      for(let i = 0; i < this.tasks.length; i++) {
        if(this.tasks[i].name === value) {
          this.tasks.splice(i, 1)
        }
      }
    }
}