import axios from "axios";
const url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    const response = await axios.post(`${url}/add-user`, data);
    return response;
  } catch (error) {
    console.log(
      "Error while creating api:",
      error.response?.data || error.message,
    );

    throw error;
  }
};


export const getUsers = async () => {
  try {
    const response = await axios.get(`${url}/get-user`);
    return response;
  } catch (error) {
    console.log(
      "Error while creating api:",
      error.response?.data || error.message,
    );
    throw error;
  }
};
