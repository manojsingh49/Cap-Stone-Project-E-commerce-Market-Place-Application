const registerUser = async (userData) => {
  try {
    const response = await axios.post("${API_BASE_URL}register", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
const loginUser = async (userData) => {
  try {
    const response = await axios.post("${API_BASE_URL}login", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export { registerUser, loginUser };
