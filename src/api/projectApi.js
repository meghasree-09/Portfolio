import axios from "axios";

const API_URL = "http://localhost:8000/api/projects";

const getAuthHeaders = () => {
  const token = sessionStorage.getItem("adminToken");

  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};


export const getProjects = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};


export const getProject = async (id) => {
  const response = await axios.get(
    `${API_URL}/${id}`
  );

  return response.data;
};


export const createProject = async (project) => {
  const response = await axios.post(
    API_URL,
    project,
    getAuthHeaders()
  );

  return response.data;
};


export const updateProject = async (id, project) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    project,
    getAuthHeaders()
  );

  return response.data;
};


export const deleteProject = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`,
    getAuthHeaders()
  );

  return response.data;
};