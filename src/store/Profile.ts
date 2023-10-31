import { create } from "zustand";

interface ProfileState {
  name: string;
  age: number;
  friends?: string[];
  family?: string[];
  environment: string;
  setProfile: (
    name: string,
    age: number,
    friends: string[],
    family: []
  ) => void;
  setEnvironment: (env: string) => void;
}

export const useProfileStore = create<ProfileState>()((set) => ({
  name: "",
  age: 5,
  friends: [],
  family: [],
  environment: "",
  setProfile: (name, age, friends, family) => {
    set((state) => ({
      ...state,
      name,
      age,
      friends,
      family,
    }));
  },
  setEnvironment: (env) => {
    set((state) => ({
      ...state,
      environment: env,
    }));
  },
}));
