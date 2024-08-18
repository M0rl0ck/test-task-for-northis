import { Box, Typography } from "@mui/material";
// import Styles from "./App.module.css";
import { InputSearch } from "./components/search/InputSearch";
import { useAppSelector } from "./store/hooks/hooks";
import { selectSearchValue } from "./store/reducers/searchSlice";
import { Repositories } from "./components/Repositories/ContainerRepositories/Repositories";

function App() {
  const searchValue = useAppSelector(selectSearchValue);
  return (
    <>
      <InputSearch />
      {searchValue ? (
        <Repositories />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <Typography variant="h3" component={"p"}>
            Добро пожаловать
          </Typography>
        </Box>
      )}
    </>
  );
}

export default App;
