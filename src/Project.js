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
}