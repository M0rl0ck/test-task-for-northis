import { PageInfo } from "./pageInfo";
import { Repository } from "./repository";

type SearchRepositoriesRequest = {
  pageInfo: PageInfo;
  repositoryCount: number;
  repositories: Repository[];
};

export type { SearchRepositoriesRequest };
