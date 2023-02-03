import "./ProductsList.css";
import { products } from "../data/data";
import ProductCard from "./ProductCard";
export default function ProductsList() {
  return (
    <div className="list-container">
      <div className="btn-container">
        <button className="btn-up">Sortuj rosnąco</button>
        <button className="btn-down">Sortuj malejąco</button>
      </div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          category={product.category}
          mark={product.mark}
          description={product.description}
          price={product.price}
          imageSrc={product.images[0]}
        ></ProductCard>
      ))}
    </div>
  );
}
