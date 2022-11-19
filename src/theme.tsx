import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#0000FF" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
        },
      },
    },
  },
  typography: {
    button: {
      fontSize: "1rem",
    },
  },
});

export default theme;
