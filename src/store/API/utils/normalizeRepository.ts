import {
  RequestRepository,
  Repository,
  DetailedRepository,
  RequestDetailedRepository,
} from "../../../types/repository";

const normalizeRepositories = (
  repositories: RequestRepository[]
): Repository[] => {
  return repositories.map((repository) => {
    const { name, id, stargazerCount, forkCount, updatedAt } = repository.node;
    const primaryLanguage = repository.node.primaryLanguage?.name;
    return {
      name,
      id,
      primaryLanguage,
      stargazerCount,
      forkCount,
      updatedAt,
    };
  });
};

const normalizeDetailedRepository = (
  repository: RequestDetailedRepository
): DetailedRepository => {
  const {
    name,
    id,
    primaryLanguage,
    languages,
    description,
    stargazerCount,
    licenseInfo,
  } = repository;

  return {
    name,
    id,
    primaryLanguage: primaryLanguage.name,
    languages: languages.edges.map((edge) => edge.node.name),
    description,
    stargazerCount,
    license: licenseInfo?.name,
  };
};

export { normalizeRepositories, normalizeDetailedRepository };
