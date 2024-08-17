import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface RepositoryCountState {
  repositoryCount: number;
}
const initialState: RepositoryCountState = {
  repositoryCount: 0,
};

const repositoryCountSlice = createSlice({
  name: "repositoryCount",
  initialState,
  reducers: {
    setRepositoryCount: (state, action: PayloadAction<number>) => {
      state.repositoryCount = action.payload;
    },
  },
});
const selectRepositoryCount = (state: RootState) =>
  state.repositoryCount.repositoryCount;
const { setRepositoryCount } = repositoryCountSlice.actions;

export default repositoryCountSlice.reducer;
export { repositoryCountSlice, selectRepositoryCount, setRepositoryCount };
