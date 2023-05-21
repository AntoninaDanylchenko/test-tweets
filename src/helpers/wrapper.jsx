const wrapper = async (fn, id, data) => {
  try {
    await fn(id, data);
  } catch (error) {
    console.log(error);
  }
};

export default wrapper;
