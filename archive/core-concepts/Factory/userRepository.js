const repo = () => {
  const get = (id) => {
    console.log(`getting user ${id}`);
    return {
      name: 'new user from db'
    }
  };

  const save = () => {
    console.log(`user ${id} saved to db`);
  };

  return {
    get: get,
    save: save
  };
};

module.exports = repo();