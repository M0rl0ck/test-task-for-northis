import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Repository } from "../../types/repository";

interface RepositoriesState {
  repositories: Repository[];
}

const initialState: RepositoriesState = {
  repositories: [],
};

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    addRepositories: (state, action: PayloadAction<Repository[]>) => {
      state.repositories = [...state.repositories, ...action.payload];
    },
    clearRepositories: (state) => {
      state.repositories = [];
    },
  },
});

const selectRepositories = (state: RootState) => state.repositories;
const { addRepositories, clearRepositories } = repositoriesSlice.actions;

export default repositoriesSlice.reducer;
export {
  selectRepositories,
  repositoriesSlice,
  addRepositories,
  clearRepositories,
};
