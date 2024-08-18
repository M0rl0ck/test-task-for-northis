import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Styles from "./inputSearch.module.css";
import { setStoreSearchValue } from "../../store/reducers/searchSlice";
import { useAppDispatch } from "../../store/hooks/hooks";

const InputSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useAppDispatch();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setStoreSearchValue(searchValue));
  };
  return (
    <form action="" onSubmit={onSubmit} className={Styles.form}>
      <TextField
        sx={{ width: "912px", backgroundColor: "white" }}
        size="small"
        value={searchValue}
        placeholder="Введите поисковый запрос"
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        color="info"
        size="large"
        disabled={searchValue === ""}
      >
        Искать
      </Button>
    </form>
  );
};

export { InputSearch };
