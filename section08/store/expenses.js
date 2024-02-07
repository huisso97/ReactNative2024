import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage"; // AsyncStorage import 추가

const useExpenses = create(
  persist(
    (set) => ({
      expenses: [],
      addExpense: (payload) =>
        set((state) => {
          const id = new Date().toString() + Math.random().toString();
          return { expenses: [{ id: id, ...payload }, ...state.expenses] };
        }),
      setExpense: (payload) =>
        set((state) => {
          return {
            expenses: payload.reverse(),
          };
        }),
      deleteExpense: (payload) =>
        set((state) => {
          return {
            expenses: state.expenses.filter(
              (expense) => expense.id !== payload
            ),
          };
        }),
      updateExpense: (payload) =>
        set((state) => {
          const updatedIndex = state.expenses.findIndex(
            (expense) => expense.id === payload.id
          );
          const updatedExpense = state.expenses[updatedIndex];
          const updatedItem = { ...updatedExpense, ...payload.data };
          const updatedExpenses = [...state.expenses];
          updatedExpenses[updatedIndex] = updatedItem;
          return { expenses: updatedExpenses };
        }),
    }),
    {
      name: "food-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useExpenses;
