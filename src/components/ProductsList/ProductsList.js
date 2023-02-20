import { products } from "../../data/data";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";
import { Wrapper, WrapperButtons } from "./StyledProductsList";
import Button from "../Atoms/Button";
import Select from "../Atoms/Select";

export default function ProductsList() {
  const [isAscendingOrder, setIsAscendingOrder] = useState(true);
  const [brand, setBrand] = useState(null);

  const handleSelect = (e) => {
    setBrand(e.target.value);
  };

  const productsToRender = brand !== null ? products.filter((product) => product.brand === brand) : products;
  isAscendingOrder ? productsToRender.sort((a, b) => a.price - b.price) : productsToRender.sort((a, b) => b.price - a.price);

  return (
    <Wrapper>
      <WrapperButtons>
        <Button title="Sortuj rosnąco" onClick={() => setIsAscendingOrder(true)} />
        <Button title="Sortuj malejąco" onClick={() => setIsAscendingOrder(false)} />
        <Select products={products} onChange={handleSelect} />
      </WrapperButtons>
      {productsToRender.map(({ id, title, category, description, price, images, brand }) => (
        <ProductCard key={id} brand={brand} title={title} category={category} description={description} price={price} imageSrc={images[0]}></ProductCard>
      ))}
    </Wrapper>
  );
}
