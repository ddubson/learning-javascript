const repo = () => {
  let tasksRetrieved = 0;

  const get = (id) => {
    console.log(`getting task ${id} [retrieved: ${tasksRetrieved}]`);
    tasksRetrieved++;
    return {
      name: 'new task from db'
    }
  };

  return {
    get: get
  };
};

module.exports = repo();