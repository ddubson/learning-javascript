// Nodejs example
var Task = require("./task_with_prototypes.js");

var task1 = new Task("constructors");
var task2 = new Task("modules");
var task3 = new Task("singletons");
var task4 = new Task("prototypes");

task1.complete();
task2.save();
task3.save();
task4.save();