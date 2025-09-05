import ProductCard from './ProductCard';

// Horizontal scrollable slider, showing 2 products at a time
export default function ProductSlider({ products, toggleWishlist }) {
  const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

  return (
    <div className="slider">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          toggleWishlist={toggleWishlist}
          isWishlisted={wishlist.includes(product.id)}
        />
      ))}
    </div>
  );
}
