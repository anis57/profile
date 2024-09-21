import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";



import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./Components/Common/Products/ProductList.jsx";
import ProductDetails from "./Components/Common/ProductDetails/ProductDetails.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductList/>} />
      <Route path="/product/:id" element={<ProductDetails />} />
    
    </Routes>
  </BrowserRouter>
);
