const repo = () => {
  let tasksRetrieved = 0;

  const get = (id) => {
    console.log(`getting task ${id} [retrieved: ${tasksRetrieved}]`);
    tasksRetrieved++;
    return {
      name: 'new task from db'
    }
  };

  const save = () => {
    console.log(`task ${id} saved to db`);
  };

  return {
    get: get,
    save: save
  };
};

module.exports = repo();