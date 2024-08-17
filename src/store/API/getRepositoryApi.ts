import { createApi } from "@reduxjs/toolkit/query/react";
import { getRepository } from "../fetchUtils/getRepository";
import { DetailedRepository } from "../../types/repository";

const getRepositoryApi = createApi({
  reducerPath: "getRepositoryApi",
  baseQuery: getRepository,
  endpoints: (build) => ({
    getRepository: build.query<DetailedRepository, string>({
      query: (name: string) => name,
    }),
  }),
});

export { getRepositoryApi };
export const { useGetRepositoryQuery } = getRepositoryApi;
