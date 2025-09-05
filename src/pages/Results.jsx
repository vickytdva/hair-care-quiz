import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductSlider from '../components/ProductSlider';
import { getAnswers, clearAnswers } from '../utils'; // make sure you have a function to clear localStorage answers

export default function Results() {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem('wishlist')) || []
  );

  const answers = getAnswers();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let allProducts = [];
        const pages = [1, 2];
        for (let page of pages) {
          const res = await axios.get(
            `https://jeval.com.au/collections/hair-care/products.json?page=${page}`
          );
          allProducts = [...allProducts, ...res.data.products];
        }

        const filtered =
          Object.keys(answers).length === 0
            ? allProducts
            : allProducts.filter(product =>
                Object.values(answers).some(answer =>
                  product.title.toLowerCase().includes(answer.toLowerCase()) ||
                  product.body_html.toLowerCase().includes(answer.toLowerCase()) ||
                  product.tags.join(' ').toLowerCase().includes(answer.toLowerCase())
                )
              );

        const sorted = [
          ...filtered.filter(p => wishlist.includes(p.id)),
          ...filtered.filter(p => !wishlist.includes(p.id))
        ];

        setProducts(sorted);
      } catch (err) {
        console.log('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, [wishlist, answers]);

  const toggleWishlist = id => {
    let updated;
    if (wishlist.includes(id)) {
      updated = wishlist.filter(i => i !== id);
    } else {
      updated = [...wishlist, id];
    }
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  const handleRestart = () => {
    clearAnswers(); // clear quiz answers from localStorage
    navigate('/question1'); // go to first question
  };

  return (
    <div className="results-page container">
      <h1>Your Hair Care Recommendations ✨</h1>
      {products.length > 0 ? (
        <ProductSlider products={products} toggleWishlist={toggleWishlist} />
      ) : (
        <p>Loading products... 💇‍♀️</p>
      )}

      {/* Start Quiz Again button */}
      <button onClick={handleRestart} style={{ marginTop: '20px' }}>
        Start Quiz Again
      </button>
    </div>
  );
}
