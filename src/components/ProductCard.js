import "./ProductCard.css"
export default function ProductCard({title, category, imageSrc, mark, description, price, id}) {
    return (
        <article key={id} className="card-container">
            <h1 className="card-title">{title}</h1>
            <p className="card-category">{category}</p>
            <div className="card-img"><img src={imageSrc} alt={title}/></div>
            <p className="card-description">{description}</p>
            <h2 className="card-price">{price.toFixed(2)} zł</h2>
        </article>
    )
}