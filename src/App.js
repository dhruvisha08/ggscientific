import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { ProductCategoryPage } from "./pages/ProductCategoryPage";
import { ProductPage } from "./pages/ProductPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap the routes inside Router */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductCategoryPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
