const wrapper = async (ctrl, id, data) => {
  try {
    await ctrl(id, data);
  } catch (error) {
    return error;
  }
};

export default wrapper;
