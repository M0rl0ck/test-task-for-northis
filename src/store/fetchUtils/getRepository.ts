import { Octokit } from "@octokit/core";
import type { GraphQlQueryResponseData } from "@octokit/graphql";
import { DetailedRepository } from "../../types/repository";
import { normalizeDetailedRepository } from "../API/utils/normalizeRepository";

const token = import.meta.env.VITE_GITHUB_API_TOKEN;
const octokit = new Octokit({ auth: token });
const getRepository = async (
  id: string
): Promise<{
  data: DetailedRepository;
}> => {
  const { node } = await octokit.graphql<GraphQlQueryResponseData>({
    query: `{
  node (id: "${id}") {
    ... on Repository {
      name
      id
      primaryLanguage {
        name
      }
      languages(first:100) {
        edges {
          node {
            name
          }
        }
      }
      description
      stargazerCount
      licenseInfo {
        name
      }
    }
  }}`,
  });

  const repository = normalizeDetailedRepository(node);
  console.log(repository);

  return { data: { ...repository } };
};

export { getRepository };
