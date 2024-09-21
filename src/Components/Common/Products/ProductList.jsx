
import "./ProductList.css";
import ProductData from "./ProductData.js";
import Card from "../Card/Card.jsx";

const ProductList = () => {
  return (
    <div className="product">
        <h1> Card List</h1>
      <div className="container">
        <div className="product-wrapper">
          {ProductData.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
