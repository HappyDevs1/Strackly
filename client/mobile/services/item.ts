import axios from "axios";
import { IP_ADDRESS } from "../utils/config";

const API_BASE_URL = `http://${IP_ADDRESS}:3000/api/item`;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createItem = async (itemData: any, orgId: string, masId: any) => {
  try {
    const response = await api.post(`/create/${orgId}/${masId}`, itemData);
    console.log("Item created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating item:", error);
    throw error;
  }
};

export const getAllItems = async (orgId: string) => {
  try {
    const response = await api.get(`/items/${orgId}`);
    console.log("Fetched all items successfully:", response.data);
    if (response.status !== 200) {
      throw new Error(`Error fetching items: ${response.statusText}`);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
}

export const getItem = async (itemId: string) => {
  try {
    const response = await api.get(`/item/${itemId}`);
    console.log("Fetched item successfully:", response.data);
    if (response.status !== 200) {
      throw new Error(`Error fetching item: ${response.statusText}`);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching item:", error);
    throw error;
  }
}

export const updateItem = async (itemId: string, itemData: any, masId: string) => {
  try {
    const response = await api.put(`/update/${itemId}/${masId}`, itemData);
    console.log("Item updated successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating item:", error);
    throw error;
  }
}

export const deleteItem = async (itemId: string, masId: string) => {
  try {
    const response = await api.delete(`/delete/${itemId}/${masId}`);
    console.log("Item deleted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
}