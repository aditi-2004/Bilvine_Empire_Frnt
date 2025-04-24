



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Shop.css';

function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://gym-backend-l7s5.onrender.com/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        
        const transformedProducts = data.map(product => {
          let price = 0;
          if (product.price && typeof product.price === 'object' && product.price['$numberDouble']) {
            price = parseFloat(product.price['$numberDouble']) || 0;
          } else if (typeof product.price === 'number' || typeof product.price === 'string') {
            price = parseFloat(product.price) || 0;
          } else {
            console.warn(`Price is undefined or invalid for product ${product.product_name}:`, product.price);
            price = 0;
          }

          return {
            id: product._id['$oid'] || product._id,
            name: product.product_name,
            price: price,
            description: product.product_description,
            image: product.image ? product.image.replace(':', '').trim() : '/assets/images/dbilvineprt.png',
            category: product.product_category || 'Supplements',
            brand: product.brand_name || 'Fitness Brand',
          };
        });

        setProducts(transformedProducts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
    
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const updateQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 1) + 1,
    }));
  };

  const addToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    const updatedCart = [...cart, { ...product, quantity }];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerText = `${quantity}x ${product.name} added to cart!`;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('toast-hide');
      setTimeout(() => document.body.removeChild(toast), 500);
    }, 3000);
  };
  
  const filterProducts = (category) => {
    setActiveCategory(category);
  };
  
  const categories = [
    'all',
    'Build Muscle Products',
    'Whey Protein Isolate',
    'Ashwagandha',
    'Whey Protein',
    'Carbohydrates',
    'Beef Protein',
    'Acetyl-L-Carnitine',
    'Plant Protein',
  ];
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const popularProducts = filteredProducts.slice(0, 6); // Top 6 products for "What People Love"

  if (loading) {
    return (
      <div className="shop-container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <div>Loading products...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="shop-container">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  return (
    <motion.div
      className="shop-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Banner Section */}
      <motion.div
        className="shop-hero"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="shop-hero-content">
          <motion.h1
            className="shop-title"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Premium Fitness Supplements
          </motion.h1>
          <motion.p
            className="shop-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Scientifically formulated for peak athletic performance
          </motion.p>
        </div>
      </motion.div>
      
      {/* Trust Badges */}
      <motion.div
        className="trust-badges"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        {[
          { text: ['NO.1', 'WHEY PROTEIN', 'ON <span class="badge-shops">Major Retailers</span>'], highlight: 'NO.1' },
          { text: ['BANNED SUBSTANCES', 'FREE AS PER', '<span class="badge-highlight">WADA/NADA</span>'], highlight: 'WADA/NADA' },
          { text: ['CERTIFIED', '<span class="badge-highlight">WHEY PROTEIN</span>'], highlight: 'WHEY PROTEIN' },
          { text: ['WORKS WITH', '<span class="badge-highlight">100+</span>', 'NATIONAL LEVEL ATHLETES'], highlight: '100+' },
          { text: ['<span class="badge-highlight">200%</span>', 'MONEY BACK', 'GUARANTEE'], highlight: '200%' },
        ].map((badge, index) => (
          <motion.div
            key={index}
            className="badge"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            {badge.text.map((line, i) => (
              <div key={i} dangerouslySetInnerHTML={{ __html: line }} />
            ))}
          </motion.div>
        ))}
      </motion.div>
      
      {/* Category Cards */}
      <motion.div
        className="category-cards"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="category-cards-container">
          {categories.map((category) => (
            <motion.div
              key={category}
              className={`category-card ${activeCategory === category ? 'active' : ''}`}
              onClick={() => filterProducts(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Main Product Grid */}
      <motion.h2
        className="section-title"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        Shop <span className="highlight">Supplements</span>
      </motion.h2>
      <motion.div
        className="shop-products"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="product-card"
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              exit={{ opacity: 0 }}
            >
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  onError={(e) => e.target.src = '/assets/images/bilvineprt.png'}
                />
                {Math.random() > 0.7 && <span className="product-tag">BESTSELLER</span>}
                {Math.random() > 0.8 && <span className="product-tag sale">SALE</span>}
              </div>
              <div className="product-brand">{product.brand}</div>
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <p className="product-price">₹{(parseFloat(product.price) * 100).toFixed(2)}</p>
                <div className="product-actions">
                  <div className="quantity-selector">
                    <span className="qty-label">Qty:</span>
                    <span className="qty-value">{quantities[product.id] || 1}</span>
                    <span
                      className="plus-sign"
                      onClick={() => updateQuantity(product.id)}
                    >
                      +
                    </span>
                  </div>
                  <button
                    className="add-to-cart"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* What People Love Section */}
      <motion.h2
        className="section-title"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        What People <span className="highlight">Love</span>
      </motion.h2>
      <motion.div
        className="popular-products"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        <AnimatePresence>
          {popularProducts.map((product) => (
            <motion.div
              key={product.id}
              className="popular-card"
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: { scale: 1, opacity: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              exit={{ opacity: 0 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="popular-image"
                onError={(e) => e.target.src = '/assets/images/bilvineprt.png'}
              />
              <div className="popular-name">{product.name}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="cart-link"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <Link to="/cart" className="cart-link-text">
          <span className="cart-icon">🛒</span>
          Go to Cart ({cart.reduce((total, item) => total + (item.quantity || 1), 0)} items)
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Shop;