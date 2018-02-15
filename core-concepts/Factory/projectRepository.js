const repo = () => {

  const get = (id) => {
    console.log(`getting project ${id}`);
    return {
      name: 'new project from db'
    }
  };

  const save = () => {
    console.log(`project ${id} saved to db`);
  };

  return {
    get: get,
    save: save
  };
};

module.exports = repo();