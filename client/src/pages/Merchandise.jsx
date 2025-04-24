// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import "./Merchandise.css";
// // import { motion } from "framer-motion";

// // // Products data
// // const products = [
// //   {
// //     id: 1,
// //     name: "AthFlex Premium T-Shirt",
// //     price: "Rs. 1,299.00",
// //     image: "/assets/images/merch1.png",
// //     sizes: ["S", "M", "L", "XL", "XXL"],
// //     colors: ["Black", "Gray", "White"],
// //     fit: "Athletic Fit",
// //     category: "Limited Edition",
// //     description: "Moisture-wicking fabric perfect for intense workouts"
// //   },
// //   {
// //     id: 2,
// //     name: "Performance Workout Tee",
// //     price: "Rs. 999.00",
// //     image: "/assets/images/merch2.png",
// //     sizes: ["S", "M", "L", "XL"],
// //     colors: ["Black", "Navy Blue"],
// //     fit: "Regular Fit",
// //     category: "Bestseller",
// //     description: "Breathable cotton blend for maximum comfort"
// //   },
// //   {
// //     id: 3,
// //     name: "AthFlex Training Tank",
// //     price: "Rs. 1,199.00",
// //     image: "/assets/images/merch3.png",
// //     sizes: ["S", "M", "L", "XL"],
// //     colors: ["Black", "Red"],
// //     fit: "Relaxed Fit",
// //     category: "New Arrival",
// //     description: "Perfect for heavy lifting and cardio sessions"
// //   },
// //   {
// //     id: 4,
// //     name: "Muscle Fit Compression Shirt",
// //     price: "Rs. 1,599.00",
// //     image: "/assets/images/merch4.png",
// //     sizes: ["S", "M", "L", "XL"],
// //     colors: ["Black", "Blue"],
// //     fit: "Compression Fit",
// //     category: "Premium Collection",
// //     description: "Supports muscles and improves circulation during workouts"
// //   },
// //   {
// //     id: 5,
// //     name: "Pro Lifting Gloves",
// //     price: "Rs. 799.00",
// //     image: "/assets/images/gloves.png",
// //     sizes: ["S", "M", "L"],
// //     colors: ["Black", "Red"],
// //     fit: "Ergonomic Fit",
// //     category: "Essential Gear",
// //     description: "Padded palm protection for heavy lifting sessions"
// //   },
// //   {
// //     id: 6,
// //     name: "Performance Shorts",
// //     price: "Rs. 999.00",
// //     image: "/assets/images/shorts.png",
// //     sizes: ["S", "M", "L", "XL"],
// //     colors: ["Black", "Gray", "Navy"],
// //     fit: "Athletic Fit",
// //     category: "Bestseller",
// //     description: "4-way stretch fabric with hidden pocket for your essentials"
// //   },
// //   {
// //     id: 7,
// //     name: "Insulated Fitness Bottle",
// //     price: "Rs. 699.00",
// //     image: "/assets/images/bottle.png",
// //     sizes: ["500ml", "750ml"],
// //     colors: ["Black", "Silver", "Blue"],
// //     fit: "N/A",
// //     category: "Accessories",
// //     description: "Double-walled insulation keeps drinks cold for 24 hours"
// //   },
// //   {
// //     id: 8,
// //     name: "Core Training T-Shirt",
// //     price: "Rs. 899.00",
// //     image: "/assets/images/tshirts.png",
// //     sizes: ["S", "M", "L", "XL"],
// //     colors: ["Black", "White", "Gray"],
// //     fit: "Standard Fit",
// //     category: "Everyday Collection",
// //     description: "Durable cotton-polyester blend for everyday training"
// //   },
// // ];

// // // Animation variants
// // const containerVariants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: {
// //       staggerChildren: 0.1
// //     }
// //   }
// // };

// // const itemVariants = {
// //   hidden: { y: 50, opacity: 0 },
// //   visible: {
// //     y: 0,
// //     opacity: 1,
// //     transition: {
// //       type: "spring",
// //       stiffness: 100,
// //       damping: 12
// //     }
// //   },
// //   hover: {
// //     scale: 1.05,
// //     boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
// //     transition: {
// //       duration: 0.3
// //     }
// //   }
// // };

// // function Merchandise() {
// //   const [cart, setCart] = useState([]);
// //   const [productSelections, setProductSelections] = useState({});
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [modalProduct, setModalProduct] = useState(null);
// //   const [filters, setFilters] = useState({
// //     category: "All",
// //     priceRange: "All",
// //     size: "All"
// //   });

// //   useEffect(() => {
// //     // Load cart from localStorage when component mounts
// //     const savedCart = localStorage.getItem("cart");
// //     if (savedCart) {
// //       setCart(JSON.parse(savedCart));
// //     }
    
// //     // Initialize product selections
// //     const initialSelections = {};
// //     products.forEach(product => {
// //       initialSelections[product.id] = {
// //         size: "",
// //         color: ""
// //       };
// //     });
// //     setProductSelections(initialSelections);
// //   }, []);

// //   // Helper function to extract numeric price from string format
// //   const extractPriceValue = (priceStr) => {
// //     // Check if priceStr is already a number
// //     if (typeof priceStr === 'number') {
// //       return priceStr;
// //     }
    
// //     // Check if priceStr is a string before using replace
// //     if (typeof priceStr === 'string') {
// //       // Remove currency symbol, commas, and anything that's not a digit or decimal point
// //       return parseFloat(priceStr.replace(/[^\d.]/g, ''));
// //     }
    
// //     // Return 0 if priceStr is undefined or not a string or number
// //     return 0;
// //   };

// //   const updateProductSelection = (productId, field, value) => {
// //     setProductSelections(prev => ({
// //       ...prev,
// //       [productId]: {
// //         ...prev[productId],
// //         [field]: value
// //       }
// //     }));
// //   };

// //   const addToCart = (product) => {
// //     const selection = productSelections[product.id];
    
// //     if (!selection.size && product.sizes.length) {
// //       alert("Please select a size");
// //       return;
// //     }
// //     if (!selection.color && product.colors.length) {
// //       alert("Please select a color");
// //       return;
// //     }

// //     // Extract numeric price value and store it in the cart item
// //     const numericPrice = extractPriceValue(product.price);
    
// //     const updatedProduct = {
// //       ...product,
// //       size: selection.size,
// //       color: selection.color,
// //       quantity: 1,
// //       numericPrice: numericPrice // Store numeric price for calculations
// //     };

// //     // Check if this item (with same size/color) is already in cart
// //     const existingItemIndex = cart.findIndex(item => 
// //       item.id === product.id && 
// //       item.size === selection.size && 
// //       item.color === selection.color
// //     );

// //     let updatedCart;
// //     if (existingItemIndex >= 0) {
// //       // Update quantity if item exists
// //       updatedCart = [...cart];
// //       updatedCart[existingItemIndex].quantity += 1;
// //     } else {
// //       // Add new item to cart
// //       updatedCart = [...cart, updatedProduct];
// //     }

// //     setCart(updatedCart);
// //     localStorage.setItem("cart", JSON.stringify(updatedCart));
    
// //     // Show confirmation with animation
// //     const productElement = document.getElementById(`product-${product.id}`);
// //     const cartElement = document.getElementById("cart-box");
    
// //     if (productElement && cartElement) {
// //       const productRect = productElement.getBoundingClientRect();
// //       const cartRect = cartElement.getBoundingClientRect();
      
// //       const notification = document.createElement("div");
// //       notification.className = "add-to-cart-notification";
// //       notification.innerHTML = "✓";
// //       document.body.appendChild(notification);
      
// //       notification.style.top = `${productRect.top + 20}px`;
// //       notification.style.left = `${productRect.left + 20}px`;
      
// //       setTimeout(() => {
// //         notification.style.top = `${cartRect.top + 20}px`;
// //         notification.style.left = `${cartRect.left + 20}px`;
// //         notification.style.opacity = "0";
// //         notification.style.transform = "scale(0.5)";
        
// //         setTimeout(() => {
// //           document.body.removeChild(notification);
// //         }, 500);
// //       }, 100);
// //     }
// //   };

// //   const openProductModal = (product) => {
// //     setModalProduct(product);
// //     setIsModalOpen(true);
// //   };

// //   const closeProductModal = () => {
// //     setIsModalOpen(false);
// //   };

// //   const calculateCartTotal = () => {
// //     return cart.reduce((total, item) => {
// //       // Use the stored numeric price if available, otherwise extract it
// //       const price = typeof item.numericPrice === 'number' ? item.numericPrice : extractPriceValue(item.price);
// //       return total + (price * item.quantity);
// //     }, 0).toFixed(2);
// //   };

// //   const getUniqueCategories = () => {
// //     const categories = products.map(product => product.category);
// //     return ["All", ...new Set(categories)];
// //   };

// //   const filterProducts = () => {
// //     return products.filter(product => {
// //       // Filter by category
// //       if (filters.category !== "All" && product.category !== filters.category) {
// //         return false;
// //       }
      
// //       // Filter by price range
// //       if (filters.priceRange !== "All") {
// //         const price = extractPriceValue(product.price);
// //         if (filters.priceRange === "Under500" && price >= 500) return false;
// //         if (filters.priceRange === "500-1000" && (price < 500 || price > 1000)) return false;
// //         if (filters.priceRange === "1000-1500" && (price < 1000 || price > 1500)) return false;
// //         if (filters.priceRange === "Above1500" && price <= 1500) return false;
// //       }
      
// //       // Filter by size
// //       if (filters.size !== "All" && !product.sizes.includes(filters.size)) {
// //         return false;
// //       }
      
// //       return true;
// //     });
// //   };

// //   const handleFilterChange = (filterType, value) => {
// //     setFilters(prev => ({
// //       ...prev,
// //       [filterType]: value
// //     }));
// //   };

// //   const filteredProducts = filterProducts();

// //   return (
// //     <div className="bg-gradient min-h-screen py-10">
// //       <div className="max-w-7xl mx-auto px-4">
// //         {/* Header Section */}
// //         <motion.div
// //           className="header-section"
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           <h1 className="main-title">AthFlex Merchandise</h1>
// //           <p className="subtitle">
// //             Elevate your fitness journey with our premium gym wear designed for performance and style.
// //           </p>
// //         </motion.div>

// //         {/* Promotional Banner */}
// //         <motion.div 
// //           className="promo-banner"
// //           initial={{ opacity: 0, scale: 0.9 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //         >
// //           <div className="banner-content">
// //             <h2>LIMITED TIME OFFER</h2>
// //             <p>Use code <span className="promo-code">ATHFLEX20</span> for 20% OFF on all merchandise</p>
// //             <p className="small-text">Valid until April 30, 2025</p>
// //           </div>
// //         </motion.div>

// //         {/* Vision & Mission Section */}
// //         <div className="vision-mission-container">
// //           <motion.div
// //             className="vision-box"
// //             initial={{ opacity: 0, x: -50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8, delay: 0.4 }}
// //           >
// //             <div className="vision-content">
// //               <h2 className="section-title">Our Vision</h2>
// //               <p>
// //                 More than just gym wear – We aim to revolutionize the market with unique, purposeful products. 
// //                 Inspiring Change – As a homegrown brand, we prove that humble beginnings can lead to industry transformation.
// //               </p>
// //             </div>
// //           </motion.div>
          
// //           <motion.div
// //             className="mission-box"
// //             initial={{ opacity: 0, x: 50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8, delay: 0.6 }}
// //           >
// //             <div className="mission-content">
// //               <h2 className="section-title">Our Mission</h2>
// //               <p>
// //                 Next-Level Quality – Delivering premium gym wear at an affordable price, designed for the Indian audience.
// //                 Global Vision – Expanding beyond borders to inspire individuals worldwide on their fitness journey.
// //               </p>
// //             </div>
// //           </motion.div>
// //         </div>

// //         {/* Filter Section */}
// //         <motion.div 
// //           className="filter-section"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           <h3 className="filter-title">Filter Products</h3>
// //           <div className="filter-controls">
// //             <div className="filter-group">
// //               <label>Category</label>
// //               <select 
// //                 value={filters.category}
// //                 onChange={(e) => handleFilterChange('category', e.target.value)}
// //                 className="filter-select"
// //               >
// //                 {getUniqueCategories().map(category => (
// //                   <option key={category} value={category}>{category}</option>
// //                 ))}
// //               </select>
// //             </div>
            
// //             <div className="filter-group">
// //               <label>Price Range</label>
// //               <select 
// //                 value={filters.priceRange}
// //                 onChange={(e) => handleFilterChange('priceRange', e.target.value)}
// //                 className="filter-select"
// //               >
// //                 <option value="All">All Prices</option>
// //                 <option value="Under500">Under Rs. 500</option>
// //                 <option value="500-1000">Rs. 500 - Rs. 1000</option>
// //                 <option value="1000-1500">Rs. 1000 - Rs. 1500</option>
// //                 <option value="Above1500">Above Rs. 1500</option>
// //               </select>
// //             </div>
            
// //             {/* <div className="filter-group">
// //               <label>Size</label>
// //               <select 
// //                 value={filters.size}
// //                 onChange={(e) => handleFilterChange('size', e.target.value)}
// //                 className="filter-select"
// //               >
// //                 <option value="All">All Sizes</option>
// //                 <option value="S">S</option>
// //                 <option value="M">M</option>
// //                 <option value="L">L</option>
// //                 <option value="XL">XL</option>
// //                 <option value="XXL">XXL</option>
// //               </select>
// //             </div> */}
// //           </div>
// //         </motion.div>

// //         {/* Count of Products */}
// //         <div className="product-count">
// //           Showing {filteredProducts.length} of {products.length} products
// //         </div>

// //         {/* Product Grid */}
// //         <motion.div 
// //           className="product-grid"
// //           variants={containerVariants}
// //           initial="hidden"
// //           animate="visible"
// //         >
// //           {filteredProducts.length > 0 ? (
// //             filteredProducts.map((product) => (
// //               <motion.div
// //                 id={`product-${product.id}`}
// //                 key={product.id}
// //                 className="product-card"
// //                 variants={itemVariants}
// //                 whileHover="hover"
// //               >
// //                 <div className="product-image-container" onClick={() => openProductModal(product)}>
// //                   <img
// //                     src={product.image}
// //                     alt={product.name}
// //                     className="product-image"
// //                   />
// //                   <div className="quick-view-overlay">
// //                     <span>Quick View</span>
// //                   </div>
// //                 </div>
                
// //                 <div className="product-details">
// //                   <h2 className="product-name">{product.name}</h2>
// //                   <p className="product-price">{product.price}</p>
// //                   <div className="product-meta">
// //                     <span className="product-fit">{product.fit}</span>
// //                     <span className="product-category">{product.category}</span>
// //                   </div>
                  
// //                   {/* {product.sizes.length > 0 && (
// //                     <div className="product-option">
// //                       <label>Size</label>
// //                       <select
// //                         onChange={(e) => updateProductSelection(product.id, 'size', e.target.value)}
// //                         value={productSelections[product.id]?.size || ""}
// //                         className="product-select"
// //                       >
// //                         <option value="">Select Size</option>
// //                         {product.sizes.map((size) => (
// //                           <option key={size} value={size}>{size}</option>
// //                         ))}
// //                       </select>
// //                     </div>
// //                   )}

// //                   {product.colors.length > 0 && (
// //                     <div className="product-option">
// //                       <label>Color</label>
// //                       <select
// //                         onChange={(e) => updateProductSelection(product.id, 'color', e.target.value)}
// //                         value={productSelections[product.id]?.color || ""}
// //                         className="product-select"
// //                       >
// //                         <option value="">Select Color</option>
// //                         {product.colors.map((color) => (
// //                           <option key={color} value={color}>{color}</option>
// //                         ))}
// //                       </select>
// //                     </div>
// //                   )} */}

// //                   <button
// //                     className="add-to-cart-btn"
// //                     onClick={() => addToCart(product)}
// //                   >
// //                     Add to Cart
// //                   </button>
// //                 </div>
// //               </motion.div>
// //             ))
// //           ) : (
// //             <div className="no-products-message">
// //               No products match your filter criteria. Please try different filters.
// //             </div>
// //           )}
// //         </motion.div>

// //         {/* Cart Section */}
// //         <motion.div
// //           id="cart-box"
// //           className="cart-box"
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.8 }}
// //         >
// //           <h2 className="cart-title">Your Shopping Cart</h2>
// //           {cart.length > 0 ? (
// //             <>
// //               <div className="cart-summary">
// //                 <p className="cart-count">{cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart</p>
// //                 <p className="cart-total">Total: Rs. {calculateCartTotal()}</p>
// //               </div>
// //               <div className="cart-items-preview">
// //                 {cart.slice(0, 3).map((item, index) => (
// //                   <div key={`${item.id}-${index}`} className="cart-item-mini">
// //                     <span>{item.name} {item.size ? `(${item.size})` : ''} × {item.quantity}</span>
// //                   </div>
// //                 ))}
// //                 {cart.length > 3 && <div className="cart-more">+ {cart.length - 3} more items</div>}
// //               </div>
// //             </>
// //           ) : (
// //             <p className="empty-cart-message">Your cart is empty.</p>
// //           )}
// //           <Link to="/cart">
// //             <button className="view-cart-btn">
// //               {cart.length > 0 ? 'View Cart & Checkout' : 'View Cart'}
// //             </button>
// //           </Link>
// //         </motion.div>

// //         {/* Product Detail Modal */}
// //         {isModalOpen && modalProduct && (
// //           <div className="modal-overlay" onClick={closeProductModal}>
// //             <motion.div 
// //               className="product-modal"
// //               onClick={e => e.stopPropagation()}
// //               initial={{ opacity: 0, scale: 0.8 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               exit={{ opacity: 0, scale: 0.8 }}
// //             >
// //               <button className="close-modal" onClick={closeProductModal}>×</button>
// //               <div className="modal-content">
// //                 <div className="modal-image-container">
// //                   <img src={modalProduct.image} alt={modalProduct.name} className="modal-image" />
// //                 </div>
// //                 <div className="modal-details">
// //                   <h2 className="modal-title">{modalProduct.name}</h2>
// //                   <p className="modal-price">{modalProduct.price}</p>
// //                   <p className="modal-description">{modalProduct.description}</p>
                  
// //                   <div className="modal-meta">
// //                     <div className="meta-item">
// //                       <span className="meta-label">Fit:</span> {modalProduct.fit}
// //                     </div>
// //                     <div className="meta-item">
// //                       <span className="meta-label">Category:</span> {modalProduct.category}
// //                     </div>
// //                   </div>
                  
// //                   {modalProduct.sizes.length > 0 && (
// //                     <div className="modal-option">
// //                       <label>Size</label>
// //                       <select
// //                         onChange={(e) => updateProductSelection(modalProduct.id, 'size', e.target.value)}
// //                         value={productSelections[modalProduct.id]?.size || ""}
// //                         className="modal-select"
// //                       >
// //                         <option value="">Select Size</option>
// //                         {modalProduct.sizes.map((size) => (
// //                           <option key={size} value={size}>{size}</option>
// //                         ))}
// //                       </select>
// //                     </div>
// //                   )}

// //                   {modalProduct.colors.length > 0 && (
// //                     <div className="modal-option">
// //                       <label>Color</label>
// //                       <select
// //                         onChange={(e) => updateProductSelection(modalProduct.id, 'color', e.target.value)}
// //                         value={productSelections[modalProduct.id]?.color || ""}
// //                         className="modal-select"
// //                       >
// //                         <option value="">Select Color</option>
// //                         {modalProduct.colors.map((color) => (
// //                           <option key={color} value={color}>{color}</option>
// //                         ))}
// //                       </select>
// //                     </div>
// //                   )}
                  
// //                   <button 
// //                     className="modal-add-btn"
// //                     onClick={() => {
// //                       addToCart(modalProduct);
// //                       closeProductModal();
// //                     }}
// //                   >
// //                     Add to Cart
// //                   </button>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>
// //         )}

// //         {/* Customer Testimonials */}
// //         <motion.div 
// //           className="testimonials-section"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 0.8, delay: 1 }}
// //         >
// //           <h2 className="section-title">What Our Customers Say</h2>
// //           <div className="testimonials-grid">
// //             <div className="testimonial-card">
// //               <div className="testimonial-rating">★★★★★</div>
// //               <p className="testimonial-text">"The quality of AthFlex t-shirts is incredible. They're comfortable during workouts and look great too!"</p>
// //               <p className="testimonial-author">- Rahul S.</p>
// //             </div>
// //             <div className="testimonial-card">
// //               <div className="testimonial-rating">★★★★★</div>
// //               <p className="testimonial-text">"I've tried many fitness brands, but AthFlex offers the best price-to-quality ratio. Highly recommended!"</p>
// //               <p className="testimonial-author">- Priya M.</p>
// //             </div>
// //             <div className="testimonial-card">
// //               <div className="testimonial-rating">★★★★☆</div>
// //               <p className="testimonial-text">"These workout gloves saved my hands! Perfect grip and very durable. Will buy again."</p>
// //               <p className="testimonial-author">- Vikram K.</p>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Merchandise;





import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Merchandise.css";
import { motion } from "framer-motion";

// Products data
const products = [
  {
    id: 1,
    name: "AthFlex Premium T-Shirt",
    price: "₹1,299.00",
    image: "/assets/images/merch1.png",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Gray", "White"],
    fit: "Athletic Fit",
    category: "Limited Edition",
    description: "Moisture-wicking fabric perfect for intense workouts"
  },
  {
    id: 2,
    name: "Performance Workout Tee",
    price: "₹999.00",
    image: "/assets/images/merch2.png",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy Blue"],
    fit: "Regular Fit",
    category: "Bestseller",
    description: "Breathable cotton blend for maximum comfort"
  },
  {
    id: 3,
    name: "AthFlex Training Tank",
    price: "₹1,199.00",
    image: "/assets/images/merch3.png",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Red"],
    fit: "Relaxed Fit",
    category: "New Arrival",
    description: "Perfect for heavy lifting and cardio sessions"
  },
  {
    id: 4,
    name: "Muscle Fit Compression Shirt",
    price: "₹1,599.00",
    image: "/assets/images/merch4.png",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Blue"],
    fit: "Compression Fit",
    category: "Premium Collection",
    description: "Supports muscles and improves circulation during workouts"
  },
  {
    id: 5,
    name: "Pro Lifting Gloves",
    price: "₹799.00",
    image: "/assets/images/gloves.png",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Red"],
    fit: "Ergonomic Fit",
    category: "Essential Gear",
    description: "Padded palm protection for heavy lifting sessions"
  },
  {
    id: 6,
    name: "Performance Shorts",
    price: "₹999.00",
    image: "/assets/images/shorts.png",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy"],
    fit: "Athletic Fit",
    category: "Bestseller",
    description: "4-way stretch fabric with hidden pocket for your essentials"
  },
  {
    id: 7,
    name: "Insulated Fitness Bottle",
    price: "₹699.00",
    image: "/assets/images/bottle.png",
    sizes: ["500ml", "750ml"],
    colors: ["Black", "Silver", "Blue"],
    fit: "N/A",
    category: "Accessories",
    description: "Double-walled insulation keeps drinks cold for 24 hours"
  },
  {
    id: 8,
    name: "Core Training T-Shirt",
    price: "₹899.00",
    image: "/assets/images/tshirts.png",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray"],
    fit: "Standard Fit",
    category: "Everyday Collection",
    description: "Durable cotton-polyester blend for everyday training"
  },
  {
    id: 9,
    name: "AthFlex Premium T-Shirt",
    price: "₹1,299.00",
    image: "/assets/images/merch1.png",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Gray", "White"],
    fit: "Athletic Fit",
    category: "Limited Edition",
    description: "Moisture-wicking fabric perfect for intense workouts"
  },
  {
    id: 10,
    name: "AthFlex Premium T-Shirt",
    price: "₹1,299.00",
    image: "/assets/images/merch1.png",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Gray", "White"],
    fit: "Athletic Fit",
    category: "Limited Edition",
    description: "Moisture-wicking fabric perfect for intense workouts"
  },
  {
    id: 11,
    name: "AthFlex Premium T-Shirt",
    price: "₹1,299.00",
    image: "/assets/images/merch1.png",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Gray", "White"],
    fit: "Athletic Fit",
    category: "Limited Edition",
    description: "Moisture-wicking fabric perfect for intense workouts"
  },
  {
    id: 112,
    name: "AthFlex Premium T-Shirt",
    price: "₹1,299.00",
    image: "/assets/images/merch1.png",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Gray", "White"],
    fit: "Athletic Fit",
    category: "Limited Edition",
    description: "Moisture-wicking fabric perfect for intense workouts"
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3
    }
  }
};

function Merchandise() {
  const [cart, setCart] = useState([]);
  const [productSelections, setProductSelections] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: "All",
    size: "All"
  });

  useEffect(() => {
    // Load cart from localStorage when component mounts
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    
    // Initialize product selections with default values
    const initialSelections = {};
    products.forEach(product => {
      initialSelections[product.id] = {
        size: product.sizes.length > 0 ? product.sizes[0] : "",
        color: product.colors.length > 0 ? product.colors[0] : ""
      };
    });
    setProductSelections(initialSelections);
  }, []);

  // Enhanced extractPriceValue function to handle ₹ symbol correctly
  const extractPriceValue = (priceStr) => {
    if (typeof priceStr === 'number') return priceStr;
    if (typeof priceStr === 'string') {
      const numericString = priceStr.replace(/[^0-9.]/g, ''); // Remove ₹ and other non-numeric characters
      const price = parseFloat(numericString);
      return isNaN(price) ? 0 : price;
    }
    return 0;
  };

  const updateProductSelection = (productId, field, value) => {
    setProductSelections(prev => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [field]: value
      }
    }));
  };

  const addToCart = (product) => {
    const selection = productSelections[product.id];
    
    if (!selection.size && product.sizes.length > 0) {
      alert("Please select a size");
      return;
    }
    if (!selection.color && product.colors.length > 0) {
      alert("Please select a color");
      return;
    }

    const numericPrice = extractPriceValue(product.price);
    
    const updatedProduct = {
      ...product,
      size: selection.size,
      color: selection.color,
      quantity: 1,
      numericPrice: numericPrice
    };

    const existingItemIndex = cart.findIndex(item => 
      item.id === product.id && 
      item.size === selection.size && 
      item.color === selection.color
    );

    let updatedCart;
    if (existingItemIndex >= 0) {
      updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart = [...cart, updatedProduct];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    
    const productElement = document.getElementById(`product-${product.id}`);
    const cartElement = document.getElementById("cart-box");
    
    if (productElement && cartElement) {
      const productRect = productElement.getBoundingClientRect();
      const cartRect = cartElement.getBoundingClientRect();
      
      const notification = document.createElement("div");
      notification.className = "add-to-cart-notification";
      notification.innerHTML = "✓";
      document.body.appendChild(notification);
      
      notification.style.top = `${productRect.top + 20}px`;
      notification.style.left = `${productRect.left + 20}px`;
      
      setTimeout(() => {
        notification.style.top = `${cartRect.top + 20}px`;
        notification.style.left = `${cartRect.left + 20}px`;
        notification.style.opacity = "0";
        notification.style.transform = "scale(0.5)";
        
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 500);
      }, 100);
    }
  };

  const openProductModal = (product) => {
    setModalProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
  };

  const calculateCartTotal = () => {
    return cart.reduce((total, item) => {
      const price = item.numericPrice || extractPriceValue(item.price);
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  const getUniqueCategories = () => {
    const categories = products.map(product => product.category);
    return ["All", ...new Set(categories)];
  };

  const filterProducts = () => {
    return products.filter(product => {
      if (filters.category !== "All" && product.category !== filters.category) return false;
      if (filters.priceRange !== "All") {
        const price = extractPriceValue(product.price);
        if (filters.priceRange === "Under500" && price >= 500) return false;
        if (filters.priceRange === "500-1000" && (price < 500 || price > 1000)) return false;
        if (filters.priceRange === "1000-1500" && (price < 1000 || price > 1500)) return false;
        if (filters.priceRange === "Above1500" && price <= 1500) return false;
      }
      if (filters.size !== "All" && !product.sizes.includes(filters.size)) return false;
      return true;
    });
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const filteredProducts = filterProducts();

  return (
    <div className="bg-gradient min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="header-section"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="main-title">AthFlex Merchandise</h1>
          <p className="subtitle">
            Elevate your fitness journey with our premium gym wear designed for performance and style.
          </p>
        </motion.div>

        {/* Promotional Banner */}
        <motion.div 
          className="promo-banner"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="banner-content">
            <h2>LIMITED TIME OFFER</h2>
            <p>Use code <span className="promo-code">ATHFLEX20</span> for 20% OFF on all merchandise</p>
            <p className="small-text">Valid until April 30, 2025</p>
          </div>
        </motion.div>

        {/* Vision & Mission Section */}
        <div className="vision-mission-container">
          <motion.div
            className="vision-box"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="vision-content">
              <h2 className="section-title">Our Vision</h2>
              <p>
                More than just gym wear – We aim to revolutionize the market with unique, purposeful products. 
                Inspiring Change – As a homegrown brand, we prove that humble beginnings can lead to industry transformation.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="mission-box"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="mission-content">
              <h2 className="section-title">Our Mission</h2>
              <p>
                Next-Level Quality – Delivering premium gym wear at an affordable price, designed for the Indian audience.
                Global Vision – Expanding beyond borders to inspire individuals worldwide on their fitness journey.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Filter Section */}
        <motion.div 
          className="filter-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="filter-title">Filter Products</h3>
          <div className="filter-controls">
            <div className="filter-group">
              <label>Category</label>
              <select 
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="filter-select"
              >
                {getUniqueCategories().map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label>Price Range</label>
              <select 
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                className="filter-select"
              >
                <option value="All">All Prices</option>
                <option value="Under500">Under ₹500</option>
                <option value="500-1000">₹500 - ₹1000</option>
                <option value="1000-1500">₹1000 - ₹1500</option>
                <option value="Above1500">Above ₹1500</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label>Size</label>
              <select 
                value={filters.size}
                onChange={(e) => handleFilterChange('size', e.target.value)}
                className="filter-select"
              >
                <option value="All">All Sizes</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                {/* <option value="XL">XL</option>
                <option value="XXL">XXL</option> */}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Count of Products */}
        <div className="product-count">
          Showing {filteredProducts.length} of {products.length} products
        </div>

        {/* Product Grid */}
        <motion.div 
          className="product-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div
                id={`product-${product.id}`}
                key={product.id}
                className="product-card"
                variants={itemVariants}
                whileHover="hover"
              >
                <div className="product-image-container" onClick={() => openProductModal(product)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="quick-view-overlay">
                    <span>Quick View</span>
                  </div>
                </div>
                
                <div className="product-details">
                  
                  <h2 className="product-name">{product.name}</h2>
                  <p className="product-price">{product.price}</p>
                  <div className="product-meta">
                    <span className="product-fit">{product.fit}</span>
                    <span className="product-category">{product.category}</span>
                  </div>
                  
                  {/* <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button> */}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="no-products-message">
              No products match your filter criteria. Please try different filters.
            </div>
          )}
        </motion.div>

        {/* Cart Section */}
        <motion.div
          id="cart-box"
          className="cart-box"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="cart-title">Your Shopping Cart</h2>
          {cart.length > 0 ? (
            <>
              <div className="cart-summary">
                <p className="cart-count">{cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart</p>
                <p className="cart-total">Total: ₹{calculateCartTotal()}</p>
              </div>
              <div className="cart-items-preview">
                {cart.slice(0, 3).map((item, index) => (
                  <div key={`${item.id}-${index}`} className="cart-item-mini">
                    <span>{item.name} {item.size ? `(${item.size})` : ''} × {item.quantity} - ₹{(item.numericPrice * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                {cart.length > 3 && <div className="cart-more">+ {cart.length - 3} more items</div>}
              </div>
            </>
          ) : (
            <p className="empty-cart-message">Your cart is empty.</p>
          )}
          <Link to="/cart">
            <button className="view-cart-btn">
              {cart.length > 0 ? 'View Cart & Checkout' : 'View Cart'}
            </button>
          </Link>
        </motion.div>

        {/* Product Detail Modal */}
        {isModalOpen && modalProduct && (
          <div className="modal-overlay" onClick={closeProductModal}>
            <motion.div 
              className="product-modal"
              onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <button className="close-modal" onClick={closeProductModal}>×</button>
              <div className="modal-content">
                <div className="modal-image-container">
                  <img src={modalProduct.image} alt={modalProduct.name} className="modal-image" />
                </div>
                <div className="modal-details">
                  <h2 className="modal-title">{modalProduct.name}</h2>
                  <p className="modal-price">{modalProduct.price}</p>
                  <p className="modal-description">{modalProduct.description}</p>
                  
                  <div className="modal-meta">
                    <div className="meta-item">
                      <span className="meta-label">Fit:</span> {modalProduct.fit}
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Category:</span> {modalProduct.category}
                    </div>
                  </div>
                  
                  {modalProduct.sizes.length > 0 && (
                    <div className="modal-option">
                      <label>Size</label>
                      <select
                        onChange={(e) => updateProductSelection(modalProduct.id, 'size', e.target.value)}
                        value={productSelections[modalProduct.id]?.size || ""}
                        className="modal-select"
                      >
                        <option value="">Select Size</option>
                        {modalProduct.sizes.map((size) => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {modalProduct.colors.length > 0 && (
                    <div className="modal-option">
                      <label>Color</label>
                      <select
                        onChange={(e) => updateProductSelection(modalProduct.id, 'color', e.target.value)}
                        value={productSelections[modalProduct.id]?.color || ""}
                        className="modal-select"
                      >
                        <option value="">Select Color</option>
                        {modalProduct.colors.map((color) => (
                          <option key={color} value={color}>{color}</option>
                        ))}
                      </select>
                    </div>
                  )}
                  
                  <button 
                    className="modal-add-btn"
                    onClick={() => {
                      addToCart(modalProduct);
                      closeProductModal();
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Customer Testimonials */}
        <motion.div 
          className="testimonials-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">"The quality of AthFlex t-shirts is incredible. They're comfortable during workouts and look great too!"</p>
              <p className="testimonial-author">- Rahul S.</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">"I've tried many fitness brands, but AthFlex offers the best price-to-quality ratio. Highly recommended!"</p>
              <p className="testimonial-author">- Priya M.</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★☆</div>
              <p className="testimonial-text">"These workout gloves saved my hands! Perfect grip and very durable. Will buy again."</p>
              <p className="testimonial-author">- Vikram K.</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★☆</div>
              <p className="testimonial-text">"These workout gloves saved my hands! Perfect grip and very durable. Will buy again."</p>
              <p className="testimonial-author">- Vikram K.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Merchandise;