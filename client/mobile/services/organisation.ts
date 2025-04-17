import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/organisation";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createOrganisation = async (orgData: any, masId: string) => {
  try {
    const response = await api.post(`/create/${masId}`, orgData);
    console.log("Organisation created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating organisation:", error);
    throw error;
  }
};

export const getOrganisation = async (orgId: string) => {
  try {
    const response = await api.get(`/get/${orgId}`);
    console.log("Fetched organisation successfully:", response.data);
    if (response.status !== 200) {
      throw new Error(`Error fetching organisation: ${response.statusText}`);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching organisation:", error);
    throw error;
  }
};