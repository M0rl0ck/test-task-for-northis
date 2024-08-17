import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchSliceReducer from "./reducers/searchSlice";
import repositoriesSliceReducer from "./reducers/repositoriesSlice";
import pageInfoSliceREducer from "./reducers/pageInfoSlice";
import repositoryCountSliceReducer from "./reducers/repositoryCountSlice";
import { getRepositoriesApi } from "./API/getRepositoriesApi";
import { getRepositoryApi } from "./API/getRepositoryApi";

const rootReducer = combineReducers({
  [getRepositoriesApi.reducerPath]: getRepositoriesApi.reducer,
  [getRepositoryApi.reducerPath]: getRepositoryApi.reducer,
  searchValue: searchSliceReducer,
  repositories: repositoriesSliceReducer,
  pageInfo: pageInfoSliceREducer,
  repositoryCount: repositoryCountSliceReducer,
});

const initStore = (preloadState: RootState | undefined = undefined) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        getRepositoriesApi.middleware,
        getRepositoryApi.middleware
      ),
    preloadedState: preloadState,
  });
};

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof initStore>;
type AppDispatch = AppStore["dispatch"];

export type { RootState, AppStore, AppDispatch };
export const store = initStore();
