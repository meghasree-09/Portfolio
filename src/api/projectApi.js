import axios from "axios";

const API_URL = "http://localhost:8000/api/projects";

export const getProjects = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getProject = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};