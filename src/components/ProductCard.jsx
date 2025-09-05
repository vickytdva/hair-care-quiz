// Small card for each hair product 🛍️
export default function ProductCard({ product, toggleWishlist, isWishlisted }) {
    const imgSrc = product.images?.[0]?.src || 'https://via.placeholder.com/250';
  
    return (
      <div className="product-card">
        <img src={imgSrc} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.variants?.[0]?.price || 'N/A'}</p>
        <button onClick={() => toggleWishlist(product.id)}>
          {isWishlisted ? '❤️' : '🤍'}
        </button>
      </div>
    );
  }
  