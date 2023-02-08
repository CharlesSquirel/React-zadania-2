import "./ProductsList.css";
import { products } from "../data/data";
import ProductCard from "./ProductCard";
import { useState } from "react";

export default function ProductsList() {
  const [isAscendingOrder, setIsAscendingOrder] = useState(true);
  const [brand,setBrand] = useState(null)
  isAscendingOrder ? products.sort((a, b) => a.price - b.price) : products.sort((a, b) => b.price - a.price);
  // const selectInput = document.querySelector(".select-input").value;
  // const handleSelect = {
  //   brand !== null ? products.filter(product => product.brand === brand) : brand;
  // }
  return (
    <div className="list-container">
      <div className="btn-container">
        <button className="btn btn-up" onClick={() => setIsAscendingOrder(true)}>
          Sortuj rosnąco
        </button>
        <button className="btn btn-down" onClick={() => setIsAscendingOrder(false)}>
          Sortuj malejąco
        </button>
        <div className="select-box">
          <select className="select-input">
            <option className="select-placeholder" disabled selected hidden>
              Sortuj wg marki
            </option>
            {products.map((product) => {
              return <option value={product.brand}>{product.brand}</option>;
            })}
          </select>
        </div>
      </div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          category={product.category}
          description={product.description}
          price={product.price}
          imageSrc={product.images[0]}
        ></ProductCard>
      ))}
    </div>
  );
}
