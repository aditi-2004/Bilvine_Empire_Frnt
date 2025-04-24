// // // import React, { useState, useEffect } from 'react';
// // // import './Shop.css';

// // // function Shop() {
// // //   const [products, setProducts] = useState([]);
// // //   const [cart, setCart] = useState([]);
// // //   const [quantities, setQuantities] = useState({});
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   // Fetch products from backend
// // //   useEffect(() => {
// // //     const fetchProducts = async () => {
// // //       try {
// // //         const response = await fetch('http://localhost:5000/api/products');
// // //         if (!response.ok) {
// // //           throw new Error('Failed to fetch products');
// // //         }
// // //         const data = await response.json();
        
// // //         // Transform the data to match your frontend structure
// // //         const transformedProducts = data.map(product => ({
// // //           id: product._id,
// // //           name: product.product_name,
// // //           price: `$${product.price}`,
// // //           description: product.product_description,
// // //           // If you don't have images in your backend, you can use placeholder images
// // //           image: `/assets/images/${product.product_name.toLowerCase().replace(/\s+/g, '')}.png`,
// // //         }));
        
// // //         setProducts(transformedProducts);
// // //         setLoading(false);
// // //       } catch (err) {
// // //         setError(err.message);
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchProducts();
// // //   }, []);

// // //   // Function to update quantity
// // //   const updateQuantity = (id) => {
// // //     setQuantities((prevQuantities) => ({
// // //       ...prevQuantities,
// // //       [id]: (prevQuantities[id] || 1) + 1,
// // //     }));
// // //   };

// // //   // Add to Cart Function
// // //   const addToCart = (product) => {
// // //     const quantity = quantities[product.id] || 1;
// // //     const updatedCart = [...cart, { ...product, quantity }];
// // //     setCart(updatedCart);
// // //     localStorage.setItem('cart', JSON.stringify(updatedCart));

// // //     alert(`${quantity}x ${product.name} added to cart!`);
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <div className="shop-container">
// // //         <div className="loading">Loading products...</div>
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="shop-container">
// // //         <div className="error">Error: {error}</div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="shop-container">
// // //       <h1 className="shop-title">Gym Supplements Store</h1>
// // //       <p className="shop-subtitle">Get the best fitness supplements for peak performance.</p>

// // //       <div className="shop-products">
// // //         {products.map((product) => (
// // //           <div key={product.id} className="product-card">
// // //             <img src={product.image} alt={product.name} className="product-image" />
// // //             <h2 className="product-name">{product.name}</h2>
// // //             <p className="product-description">{product.description}</p>
// // //             <p className="product-price">{product.price}</p>

// // //             <div className="quantity-selector">
// // //               Qty: {quantities[product.id] || 1}{' '}
// // //               <span 
// // //                 className="plus-sign" 
// // //                 onClick={() => updateQuantity(product.id)}
// // //               >
// // //                 +
// // //               </span>
// // //             </div>

// // //             <button 
// // //               className="add-to-cart" 
// // //               onClick={() => addToCart(product)}
// // //             >
// // //               Add to Cart
// // //             </button>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       <div className="cart-link">
// // //         <a href="/cart">
// // //           Go to Cart ({cart.reduce((total, item) => total + item.quantity, 0)} items)
// // //         </a>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Shop;



// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import './Shop.css';

// // function Shop() {
// //   const [products, setProducts] = useState([]);
// //   const [cart, setCart] = useState([]);
// //   const [quantities, setQuantities] = useState({});
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // Fetch products from backend
// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/api/products');
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch products');
// //         }
// //         const data = await response.json();
        
// //         // Transform the data to match your frontend structure, handling the `image: ` format and price
// //         const transformedProducts = data.map(product => {
// //           // Debug the product object to identify the price structure
// //           console.log('Product data:', product);

// //           // Handle price: Check if it's in `$numberDouble` format or a plain number/string
// //           let price = 0;
// //           if (product.price && typeof product.price === 'object' && product.price['$numberDouble']) {
// //             price = parseFloat(product.price['$numberDouble']) || 0; // Handle MongoDB numberDouble
// //           } else if (typeof product.price === 'number' || typeof product.price === 'string') {
// //             price = parseFloat(product.price) || 0; // Handle plain number or string
// //           } else {
// //             console.warn(`Price is undefined or invalid for product ${product.product_name}:`, product.price);
// //             price = 0; // Fallback to 0 if price is missing or invalid
// //           }

// //           return {
// //             id: product._id['$oid'], // Extract the ObjectId from the MongoDB format
// //             name: product.product_name,
// //             price: price, // Use the parsed price
// //             description: product.product_description,
// //             image: product.image ? product.image.replace(':', '').trim() : '/assets/images/dbilvineprt.png', // Handle `image: ` format and provide a fallback
// //           };
// //         });

// //         setProducts(transformedProducts);
// //         setLoading(false);
// //       } catch (err) {
// //         setError(err.message);
// //         setLoading(false);
// //       }
// //     };

// //     fetchProducts();
// //   }, []);

// //   // Function to update quantity
// //   const updateQuantity = (id) => {
// //     setQuantities((prevQuantities) => ({
// //       ...prevQuantities,
// //       [id]: (prevQuantities[id] || 1) + 1,
// //     }));
// //   };

// //   // Add to Cart Function
// //   const addToCart = (product) => {
// //     const quantity = quantities[product.id] || 1;
// //     const updatedCart = [...cart, { ...product, quantity }];
// //     setCart(updatedCart);
// //     localStorage.setItem('cart', JSON.stringify(updatedCart));

// //     alert(`${quantity}x ${product.name} added to cart!`);
// //   };

// //   if (loading) {
// //     return (
// //       <div className="shop-container">
// //         <div className="loading">Loading products...</div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="shop-container">
// //         <div className="error">Error: {error}</div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="shop-container">
// //       <h1 className="shop-title">Gym Supplements Store</h1>
// //       <p className="shop-subtitle">Get the best fitness supplements for peak performance.</p>

// //       <div className="shop-products">
// //         {products.map((product) => (
// //           <div key={product.id} className="product-card">
// //             <img src={product.image} alt={product.name} className="product-image" onError={(e) => e.target.src = '/assets/images/bilvineprt.png'} />
// //             <h2 className="product-name">{product.name}</h2>
// //             <p className="product-description">{product.description}</p>
// //             <p className="product-price">₹{(parseFloat(product.price) * 100).toFixed(2)}</p> {/* Convert to ₹ by multiplying by 100 (assuming dollars or a base unit) */}

// //             <div className="quantity-selector">
// //               Qty: {quantities[product.id] || 1}{' '}
// //               <span 
// //                 className="plus-sign" 
// //                 onClick={() => updateQuantity(product.id)}
// //               >
// //                 +
// //               </span>
// //             </div>

// //             <button 
// //               className="add-to-cart" 
// //               onClick={() => addToCart(product)}
// //             >
// //               Add to Cart
// //             </button>
// //           </div>
// //         ))}
// //       </div>

// //       <div className="cart-link">
// //         <Link to="/cart" className="cart-link-text">
// //           Go to Cart ({cart.reduce((total, item) => total + item.quantity, 0)} items)
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Shop;




// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Shop.css';

// function Shop() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [quantities, setQuantities] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeCategory, setActiveCategory] = useState('all');

//   // Fetch products from backend
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/products');
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         const data = await response.json();
        
//         // Transform the data to match your frontend structure
//         const transformedProducts = data.map(product => {
//           // Debug the product object to identify the price structure
//           console.log('Product data:', product);

//           // Handle price: Check if it's in `$numberDouble` format or a plain number/string
//           let price = 0;
//           if (product.price && typeof product.price === 'object' && product.price['$numberDouble']) {
//             price = parseFloat(product.price['$numberDouble']) || 0; // Handle MongoDB numberDouble
//           } else if (typeof product.price === 'number' || typeof product.price === 'string') {
//             price = parseFloat(product.price) || 0; // Handle plain number or string
//           } else {
//             console.warn(`Price is undefined or invalid for product ${product.product_name}:`, product.price);
//             price = 0; // Fallback to 0 if price is missing or invalid
//           }

//           return {
//             id: product._id['$oid'] || product._id, // Extract the ObjectId from the MongoDB format
//             name: product.product_name,
//             price: price, // Use the parsed price
//             description: product.product_description,
//             image: product.image ? product.image.replace(':', '').trim() : '/assets/images/dbilvineprt.png', // Handle `image: ` format and provide a fallback
//             category: product.product_category || 'Supplements',
//             brand: product.brand_name || 'Fitness Brand'
//           };
//         });

//         setProducts(transformedProducts);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchProducts();
    
//     // Initialize cart from localStorage if available
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }
//   }, []);

//   // Function to update quantity
//   const updateQuantity = (id) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [id]: (prevQuantities[id] || 1) + 1,
//     }));
//   };

//   // Add to Cart Function
//   const addToCart = (product) => {
//     const quantity = quantities[product.id] || 1;
//     const updatedCart = [...cart, { ...product, quantity }];
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));

//     // Create a toast notification instead of alert
//     const toast = document.createElement('div');
//     toast.className = 'toast-notification';
//     toast.innerText = `${quantity}x ${product.name} added to cart!`;
//     document.body.appendChild(toast);
    
//     // Remove the toast after 3 seconds
//     setTimeout(() => {
//       toast.classList.add('toast-hide');
//       setTimeout(() => document.body.removeChild(toast), 500);
//     }, 3000);
//   };
  
//   // Filter products by category
//   const filterProducts = (category) => {
//     setActiveCategory(category);
//   };
  
//   // Get all unique categories
//   const categories = ['all', ...new Set(products.map(product => product.category))];
  
//   // Filter products based on active category
//   const filteredProducts = activeCategory === 'all' 
//     ? products 
//     : products.filter(product => product.category === activeCategory);

//   if (loading) {
//     return (
//       <div className="shop-container">
//         <div className="loading">
//           <div className="loading-spinner"></div>
//           <div>Loading products...</div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="shop-container">
//         <div className="error">Error: {error}</div>
//       </div>
//     );
//   }

//   return (
//     <div className="shop-container">
//       {/* Hero Banner Section */}
//       <div className="shop-hero">
//         <div className="shop-hero-content">
//           <h1 className="shop-title">Premium Fitness Supplements</h1>
//           <p className="shop-subtitle">Scientifically formulated for peak athletic performance</p>
//         </div>
//       </div>
      
//       {/* Trust Badges */}
//       <div className="trust-badges">
//         <div className="badge">
//           <span className="badge-highlight">NO.1</span> 
//           <div>WHEY PROTEIN</div>
//           <div>ON <span className="badge-shops">Major Retailers</span></div>
//         </div>
//         <div className="badge">
//           <span>BANNED SUBSTANCES</span>
//           <div>FREE AS PER</div>
//           <div className="badge-highlight">WADA/NADA</div>
//         </div>
//         <div className="badge">
//           <span>CERTIFIED</span>
//           <div className="badge-highlight">WHEY PROTEIN</div>
//         </div>
//         <div className="badge">
//           <span>WORKS WITH</span>
//           <div className="badge-highlight">100+</div>
//           <div>NATIONAL LEVEL ATHLETES</div>
//         </div>
//         <div className="badge">
//           <span className="badge-highlight">200%</span>
//           <div>MONEY BACK</div>
//           <div>GUARANTEE</div>
//         </div>
//       </div>
      
//       {/* Category Filter */}
//       <div className="category-filters">
//         {categories.map((category) => (
//           <button 
//             key={category} 
//             className={`category-button ${activeCategory === category ? 'active' : ''}`}
//             onClick={() => filterProducts(category)}
//           >
//             {category.charAt(0).toUpperCase() + category.slice(1)}
//           </button>
//         ))}
//       </div>

//       <h2 className="section-title">What People <span className="highlight">Love</span></h2>
      
//       {/* Product Grid */}
//       <div className="shop-products">
//         {filteredProducts.map((product) => (
//           <div key={product.id} className="product-card">
//             <div className="product-image-container">
//               <img 
//                 src={product.image} 
//                 alt={product.name} 
//                 className="product-image" 
//                 onError={(e) => e.target.src = '/assets/images/bilvineprt.png'} 
//               />
//               {Math.random() > 0.7 && <span className="product-tag">BESTSELLER</span>}
//               {Math.random() > 0.8 && <span className="product-tag sale">SALE</span>}
//             </div>
//             <div className="product-brand">{product.brand}</div>
//             <h2 className="product-name">{product.name}</h2>
//             <p className="product-description">{product.description}</p>
//             <div className="product-footer">
//               <p className="product-price">₹{(parseFloat(product.price) * 100).toFixed(2)}</p>
//               <div className="product-actions">
//                 <div className="quantity-selector">
//                   <span className="qty-label">Qty:</span>
//                   <span className="qty-value">{quantities[product.id] || 1}</span>
//                   <span 
//                     className="plus-sign" 
//                     onClick={() => updateQuantity(product.id)}
//                   >
//                     +
//                   </span>
//                 </div>
//                 <button 
//                   className="add-to-cart" 
//                   onClick={() => addToCart(product)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="cart-link">
//         <Link to="/cart" className="cart-link-text">
//           <span className="cart-icon">🛒</span>
//           Go to Cart ({cart.reduce((total, item) => total + (item.quantity || 1), 0)} items)
//         </Link>
//       </div>
      
//     </div>
    
//   );
// }

// export default Shop;






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
        const response = await fetch('http://localhost:5000/api/products');
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