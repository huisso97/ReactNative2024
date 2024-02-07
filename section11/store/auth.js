import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage"; // AsyncStorage import 추가

const useAuth = create(
  persist(
    (set) => ({
      token: "",
      isAuthenticated: false,
      authenticate: (payload) =>
        set((state) => {
          console.log(payload);
          return {
            token: payload,
          };
        }),
      logout: (payload) =>
        set((state) => {
          return {
            token: null,
          };
        }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useAuth;
