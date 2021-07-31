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
    get getDueDate() {
      return this.dueDate;
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
    set setDueDate(value) {
      if(value)
      this.dueDate = value;
    }
    set setPriority(value) {
      if(value)
      this.priority = value;
    }
}