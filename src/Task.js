export class Task {
    constructor(name, description, priority) {
      this.name = name;
      this.description = description;
      this.priority = priority;
    }
    get getName() {
      return this.name;
    }
    get getDescription() {
      return this.description;
    }
    get getPriority() {
      return this.priority;
    }
    set setName(value) {
      if(value)
      this.name = value;
    }
    set setDescription(value) {
      if(value)
      this.description = value;
    }
    set setPriority(value) {
      if(value)
      this.priority = value;
    }
}