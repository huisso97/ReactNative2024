import axios from "axios";

const BACKEND_URL =
  "https://reactnative2024-b994a-default-rtdb.asia-southeast1.firebasedatabase.app";

const storeExpense = async (expenseData) => {
  const response = await axios.post(`${BACKEND_URL}/expense.json`, expenseData);
  const id = response.data.name;

  return id;
};

const fetchExpense = async () => {
  const response = await axios.get(`${BACKEND_URL}/expense.json`);

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };

    expenses.push(expenseObj);
  }

  return expenses;
};

const updateExpense = async (id, expenseData) => {
  return axios.put(BACKEND_URL + `/expense/${id}.json`, expenseData);
};

const deleteExpense = (id) => {
  return axios.delete(BACKEND_URL + `/expense/${id}.json`);
};

export { fetchExpense, storeExpense, updateExpense, deleteExpense };
