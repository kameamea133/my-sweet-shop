import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./helper/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
