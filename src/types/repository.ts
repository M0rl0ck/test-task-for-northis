type RequestRepository = {
  node: {
    name: string;
    id: string;
    primaryLanguage: {
      name: string;
    };
    stargazerCount: number;
    forkCount: number;
    updatedAt: string;
  };
};

type Repository = {
  name: string;
  id: string;
  primaryLanguage: string;
  stargazerCount: number;
  forkCount: number;
  updatedAt: string;
};

type RequestDetailedRepository = {
  name: string;
  id: string;
  primaryLanguage: {
    name: string;
  };
  languages: {
    edges: {
      node: {
        name: string;
      };
    }[];
  };
  description: string;
  stargazerCount: number;
  licenseInfo: {
    name: string;
  };
};

type DetailedRepository = {
  name: string;
  id: string;
  primaryLanguage: string;
  languages: string[];
  description: string;
  stargazerCount: number;
  license: string;
};

export type {
  RequestRepository,
  Repository,
  RequestDetailedRepository,
  DetailedRepository,
};
