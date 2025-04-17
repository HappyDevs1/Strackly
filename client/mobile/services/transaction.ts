import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/transaction";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createTransaction = async (transactionData: any, orgId: string, employeeId: any, itemId: any) => {
  try {
    const response = await api.post(`/create/${orgId}/${employeeId}/${itemId}`, transactionData);
    console.log("Transaction created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating transaction:", error);
    throw error;
  }
}

export const getAllTransactions = async (orgId: string) => {
  try {
    const response = await api.get(`/transactions/${orgId}`);
    console.log("Fetched all transactions successfully:", response.data);
    if (response.status !== 200) {
      throw new Error(`Error fetching transactions: ${response.statusText}`);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
}