var Task = require("./task.js");
var repoFactory = require("./repoFactory");

var task1 = new Task(repoFactory.task.get(1));
var user = repoFactory.user.get(1);
var project = repoFactory.project.get(1);

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();