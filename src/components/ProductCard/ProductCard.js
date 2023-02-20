import { StyledPrice, StyledDescription, Wrapper} from "./StyledProductCard";
export default function ProductCard({ title, category, imageSrc, description, price, id, brand }) {
  return (
    <Wrapper key={id}>
      <h1>{title}</h1>
      <p className="category">{category}</p>
      <p className="brand">{brand}</p>
      <div className="img">
        <img src={imageSrc} alt={title} />
      </div>
      <p className="description">{description}</p>
      <h2 className="price">{price.toFixed(2)} zł</h2>
    </Wrapper>
  );
}
