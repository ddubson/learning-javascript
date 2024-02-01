const TaskRepo = (() => {
  let taskRepo;

  function createRepo() {
    return new Object("Task");
  }

  return {
    getInstance: () => {
      if (!taskRepo) {
        taskRepo = createRepo();
      }
      return taskRepo;
    }
  }
})();

const repo1 = TaskRepo.getInstance();
const repo2 = TaskRepo.getInstance();

if(repo1 === repo2) {
  console.log("Repo 1 and 2 are the same");
}