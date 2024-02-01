const Task = function(name) {
    this.name = name;
    this.completed = false;
};

Task.prototype.complete = function () {
    console.log(`completing task ${this.name}`);
    this.completed = true;
};

Task.prototype.save = function() {
    console.log('saving Task', this.name);
};

const task = new Task("Task 1");
task.complete();
task.save();

const urgentTask = new Task("Urgent Task");
urgentTask.notify = () => {
    console.log("Notifying");
};
urgentTask.save = function() {
  this.notify();
  Task.prototype.save.call(this);
};
urgentTask.complete();
urgentTask.save();

