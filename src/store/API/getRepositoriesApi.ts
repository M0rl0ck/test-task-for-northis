import { createApi } from "@reduxjs/toolkit/query/react";
import { searchRepositories } from "../fetchUtils/searchRepositoriesFromGit";
import { SearchRepositoriesRequest } from "../../types/searchRepositoriesRequest";

const getRepositoriesApi = createApi({
  reducerPath: "getRepositoriesApi",
  baseQuery: searchRepositories,
  endpoints: (build) => ({
    searchRepositories: build.query<SearchRepositoriesRequest, string>({
      query: (name: string) => name,
    }),
  }),
});

export { getRepositoriesApi };
export const { useSearchRepositoriesQuery } = getRepositoriesApi;
