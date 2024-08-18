import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface SearchState {
  searchValue: string;
}

const initialState: SearchState = {
  searchValue: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setStoreSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

const selectSearchValue = (state: RootState) => state.searchValue.searchValue;
const { setStoreSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
export { selectSearchValue, searchSlice, setStoreSearchValue };
