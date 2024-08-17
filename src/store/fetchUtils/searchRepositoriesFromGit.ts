import { Octokit } from "@octokit/core";
import type { GraphQlQueryResponseData } from "@octokit/graphql";
import { PageInfo } from "../../types/pageInfo";
import { Repository } from "../../types/repository";
import { normalizeRepositories } from "../API/utils/normalizeRepository";

const token = import.meta.env.VITE_GITHUB_API_TOKEN;
const octokit = new Octokit({ auth: token });
const searchRepositories = async (
  searchingValue: string
): Promise<{
  data: {
    pageInfo: PageInfo;
    repositoryCount: number;
    repositories: Repository[];
  };
}> => {
  const {
    search: { pageInfo, repositoryCount, edges },
  } = await octokit.graphql<GraphQlQueryResponseData>({
    query: `{search (type:REPOSITORY, first:20, after:null, query: "${searchingValue} in:name") {
edges {
  node {
    ... on Repository {
      name,
      id
      primaryLanguage {
        name
      }
      stargazerCount,
      forkCount,
      updatedAt,
      }
    }
  }
     pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
      
    }
  repositoryCount
  }}}`,
  });
  const repositories = normalizeRepositories(edges);

  return { data: { repositories, pageInfo, repositoryCount } };
};

export { searchRepositories };
