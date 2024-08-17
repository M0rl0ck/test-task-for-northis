import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { PageInfo } from "../../types/pageInfo";

interface PageInfoState {
  pageInfo: PageInfo | null;
}

const initialState: PageInfoState = {
  pageInfo: null,
};

const pageInfoSlice = createSlice({
  name: "pageInfo",
  initialState,
  reducers: {
    setPageInfo: (state, action: PayloadAction<PageInfo>) => {
      state.pageInfo = action.payload;
    },
  },
});

const selectSearchValue = (state: RootState) => state.pageInfo.pageInfo;

const { setPageInfo } = pageInfoSlice.actions;

export default pageInfoSlice.reducer;
export { pageInfoSlice, selectSearchValue, setPageInfo };
