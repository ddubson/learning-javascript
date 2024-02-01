var Task = function(name) {
    this.name = name;
    this.completed = false;
}

// Prototype structure
// ClassName.prototype.methodName = function() {}
Task.prototype.complete = function () {
    this.completed = true;
}

Task.prototype.save = function() {
    console.log('saving Task', this.name);
}

module.exports = Task;