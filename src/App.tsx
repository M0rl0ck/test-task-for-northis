import { useEffect } from "react";
import Styles from "./App.module.css";
import { useSearchRepositoriesQuery } from "./store/API/getRepositoriesApi";
import { useGetRepositoryQuery } from "./store/API/getRepositoryApi";

function App() {
  const { isError, isLoading, data } = useSearchRepositoriesQuery("world");

  const {
    isError: isError2,
    isLoading: isLoading2,
    data: data2,
  } = useGetRepositoryQuery("MDEwOlJlcG9zaXRvcnkyMTMzNzA0NQ==");

  return (
    <div className={Styles.App}>
      data:{" "}
      {data && (
        <div>
          <p>Count: {data.repositoryCount}</p>
          <p>Name: {data.repositories[1].name}</p>
          <p>ID: {data.repositories[1].id}</p>
          <p>{data.repositories[1].primaryLanguage}</p>
        </div>
      )}
      {data2 && (
        <div>
          <p>Name: {data2.name}</p>
          <p>ID: {data2.id}</p>
          <p>Lang: {data2.primaryLanguage}</p>
          <div>
            {data2.languages.map((lang) => (
              <span>{lang} </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
