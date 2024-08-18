import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const Repositories = () => {
  return (
    <Stack direction={"row"} spacing={0} height={"100%"}>
      <Box sx={{ width: "67%", height: "100%" }}>Repositories</Box>
      <Box sx={{ width: "33%", height: "100%" }}>DetailedRepository</Box>
    </Stack>
  );
};

export { Repositories };
