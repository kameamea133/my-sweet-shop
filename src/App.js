import "./App.css";
import { Routes, Route } from "react-router-dom";
import OverviewCarousel from "./components/overview-carousel/OverviewCarousel";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./helper/theme";

const DUMMY_IMAGES = [
  "https://st.depositphotos.com/1361307/2948/i/950/depositphotos_29481459-stock-photo-neapolitan-ice-cream.jpg",
  "https://thumbs.dreamstime.com/b/various-varieties-ice-cream-cones-mint-blueberry-strawberry-pistachio-cherry-chocolate-isolated-white-background-158155276.jpg",
  "https://jessicainthekitchen.com/wp-content/uploads/2022/03/Avocado-Ice-Cream6525.jpg",
  "https://www.valgourmand.com/1941/bonbon-tendres-fruits-plies-2kg.jpg",
  "https://www.cdiscount.com/pdt2/7/0/6/1/1200x1200/ckb5060636005706/rw/ckb-ltd-gumball-distributeur-de-chewing-gum-bonbon.jpg",
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={<OverviewCarousel imagesArray={DUMMY_IMAGES} />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
