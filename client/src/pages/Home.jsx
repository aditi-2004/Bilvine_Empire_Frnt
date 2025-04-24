
// // // // import React, { useState, useEffect, useMemo } from 'react';
// // // // import { Link, useHistory } from 'react-router-dom';
// // // // import { motion } from 'framer-motion';
// // // // import './Home.css';

// // // // const Home = () => {
// // // //   const [username, setUsername] = useState('');
// // // //   const [videoIndex, setVideoIndex] = useState(0); // Track which video to show
// // // //   const [cartCount, setCartCount] = useState(0); // Track number of items in cart
// // // //   const history = useHistory(); // Use useHistory for react-router-dom v5
// // // //   const backgroundVideos = useMemo(() => [
// // // //     '/assets/images/homevideo.mp4',
// // // //     '/assets/images/AdobeStock_618060694_Video_HD_Preview.mp4'
// // // //   ], []); // Memoize backgroundVideos to prevent re-creation on every render

// // // //   useEffect(() => {
// // // //     // Preload videos
// // // //     backgroundVideos.forEach((video) => {
// // // //       const vid = document.createElement('video');
// // // //       vid.src = video;
// // // //       vid.load();
// // // //     });

// // // //     console.log('useEffect running with videoIndex:', videoIndex); // Debug log
// // // //     const storedUsername = localStorage.getItem('username');
// // // //     if (storedUsername) {
// // // //       setUsername(storedUsername);
// // // //     }

// // // //     // Load cart count from localStorage
// // // //     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
// // // //     setCartCount(storedCart.length);

// // // //     // Set up the video slideshow interval (e.g., change video every 5 seconds)
// // // //     const interval = setInterval(() => {
// // // //       console.log('Interval running, current index:', videoIndex); // Debug log
// // // //       setVideoIndex((prevIndex) => (prevIndex + 1) % backgroundVideos.length);
// // // //     }, 5000); // Change video every 5 seconds

// // // //     // Cleanup interval on component unmount
// // // //     return () => clearInterval(interval);
// // // //   }, [backgroundVideos, videoIndex]); // Dependencies include memoized backgroundVideos and videoIndex

// // // //   const handleLogout = () => {
// // // //     // Clear all user-related data from localStorage (matching the older Home.js)
// // // //     localStorage.removeItem('email');
// // // //     localStorage.removeItem('password');
// // // //     localStorage.removeItem('username');
    
// // // //     // Reset the username state
// // // //     setUsername('');
    
// // // //     // Redirect to the login page using useHistory
// // // //     history.push('/login');
// // // //   };

// // // //   return (
// // // //     <div className="main">
// // // //       {/* Video background slideshow */}
// // // //       <video 
// // // //         className="background-video" 
// // // //         autoPlay 
// // // //         loop 
// // // //         muted 
// // // //         playsInline
// // // //         style={{
// // // //           position: 'absolute',
// // // //           top: 0,
// // // //           left: 0,
// // // //           width: '100%',
// // // //           height: '100%',
// // // //           objectFit: 'cover',
// // // //           zIndex: -1, /* Stays behind content but above the gradient */
// // // //           opacity: 1,
// // // //           transition: 'opacity 1.5s ease-in-out' /* Smooth transition between videos */
// // // //         }}
// // // //         onError={(e) => console.error('Video loading error:', e)} // Debug error handling
// // // //       >
// // // //         <source src={backgroundVideos[videoIndex]} type="video/mp4" />
// // // //         Your browser does not support the video tag.
// // // //       </video>
// // // //       <div className="page1">
// // // //         <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>I CAN!</motion.h1>
// // // //         <div className="top">
// // // //           <div className="header container">
// // // //             <motion.div className="logo" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
// // // //               <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">BILVINE'S ENERGYM<span className="text-teal-500">!</span></h2>
// // // //             </motion.div>
// // // //             <div className="nav-link">
// // // //               <ul className="flex gap-6 lg:gap-8 items-center">
// // // //                 <li><Link to="/" className="link text-lg lg:text-xl">HOME</Link></li>
// // // //                 <li><Link to="/merchandise" className="link text-lg lg:text-xl">Merchandise</Link></li>
// // // //                 <li><Link to="/shop" className="link text-lg lg:text-xl">Shop</Link></li>
// // // //                 <li><Link to="/support" className="link text-lg lg:text-xl">Support</Link></li>
// // // //                 <li>
// // // //                   <Link to="/cart" className="link cart-link text-lg lg:text-xl">
// // // //                     Cart {cartCount > 0 && `(${cartCount})`}
// // // //                   </Link>
// // // //                 </li>
// // // //               </ul>
// // // //             </div>
// // // //             <div className="back">
// // // //               {username ? (
// // // //                 <div className="flex items-center gap-4">
// // // //                   <span className="text-lg lg:text-xl font-medium">Welcome, {username}</span>
// // // //                   <button className="btn text-base lg:text-lg px-6 py-3 rounded-full" onClick={handleLogout}>Logout</button>
// // // //                 </div>
// // // //               ) : (
// // // //                 <Link to="/login" className="btn text-base lg:text-lg px-6 py-3 rounded-full">Login</Link>
// // // //               )}
// // // //             </div>
// // // //           </div>
// // // //           <motion.div className="content" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
// // // //             <h2>"Look in the mirror. That's your competition"</h2>
// // // //             <h3>ABHISHEK DHIMAN</h3>
// // // //           </motion.div>
// // // //         </div>
// // // //         <div className="footer-up">
// // // //           <motion.div className="image" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
// // // //             <img src="/assets/images/home.png" alt="Bilvine Fitness Empire Gym" />
// // // //           </motion.div>
// // // //           <motion.div className="footer-content" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
// // // //             <p>"Embark on a transformative fitness journey with our state-of-the-art gym, where passion meets purpose, and every workout is a step towards a healthier, stronger you."</p>
// // // //             <Link to="/join-us">
// // // //               <motion.button className="btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>JOIN US!</motion.button>
// // // //             </Link>
// // // //           </motion.div>
// // // //           <motion.div className="About" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
// // // //             <Link to="/diet"><span>DIET PLANS</span></Link>
// // // //             <Link to="/workout"><span>WORKOUT PLAN</span></Link>
// // // //             <Link to="/expert-advice"><span>EXPERT ADVICE</span></Link>
// // // //             <Link to="/FatToFitCourse"><span>Fat to Fit Course</span></Link>
// // // //             <Link to="/postures" className="link"><span>POSTURES</span></Link>
// // // //           </motion.div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Home;


// // // // src/pages/Home.js
// // // import React, { useState, useEffect, useMemo } from 'react';
// // // import { Link, useHistory } from 'react-router-dom';
// // // import { motion } from 'framer-motion';
// // // import './Home.css';

// // // const Home = () => {
// // //   const [username, setUsername] = useState('');
// // //   const [videoIndex, setVideoIndex] = useState(0);
// // //   const [cartCount, setCartCount] = useState(0);
// // //   const history = useHistory();
// // //   const backgroundVideos = useMemo(() => [
// // //     '/assets/images/homevideo.mp4',
// // //     '/assets/images/AdobeStock_618060694_Video_HD_Preview.mp4'
// // //   ], []);

// // //   useEffect(() => {
// // //     backgroundVideos.forEach((video) => {
// // //       const vid = document.createElement('video');
// // //       vid.src = video;
// // //       vid.load();
// // //     });

// // //     const storedUsername = localStorage.getItem('username');
// // //     if (storedUsername) setUsername(storedUsername);

// // //     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
// // //     setCartCount(storedCart.length);

// // //     const interval = setInterval(() => {
// // //       setVideoIndex((prevIndex) => (prevIndex + 1) % backgroundVideos.length);
// // //     }, 5000);

// // //     return () => clearInterval(interval);
// // //   }, [backgroundVideos, videoIndex]);

// // //   const handleLogout = () => {
// // //     localStorage.removeItem('email');
// // //     localStorage.removeItem('password');
// // //     localStorage.removeItem('username');
// // //     setUsername('');
// // //     history.push('/login');
// // //   };

// // //   return (
// // //     <div className="main">
// // //       <video 
// // //         className="background-video" 
// // //         autoPlay loop muted playsInline
// // //         style={{
// // //           position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
// // //           objectFit: 'cover', zIndex: -1, opacity: 1, transition: 'opacity 1.5s ease-in-out'
// // //         }}
// // //         onError={(e) => console.error('Video loading error:', e)}
// // //       >
// // //         <source src={backgroundVideos[videoIndex]} type="video/mp4" />
// // //         Your browser does not support the video tag.
// // //       </video>
// // //       <div className="page1">
// // //         <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>I CAN!</motion.h1>
// // //         <div className="top">
// // //           <div className="header container">
// // //             <motion.div className="logo" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
// // //               <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">BILVINE'S ENERGYM<span className="text-teal-500">!</span></h2>
// // //             </motion.div>
// // //             <div className="nav-link">
// // //               <ul className="flex gap-6 lg:gap-8 items-center">
// // //                 <li><Link to="/" className="link text-lg lg:text-xl">HOME</Link></li>
// // //                 <li><Link to="/merchandise" className="link text-lg lg:text-xl">Merchandise</Link></li>
// // //                 <li><Link to="/shop" className="link text-lg lg:text-xl">Shop</Link></li>
// // //                 <li><Link to="/support" className="link text-lg lg:text-xl">Support</Link></li>
// // //                 <li>
// // //                   <Link to="/cart" className="link cart-link text-lg lg:text-xl">
// // //                     Cart {cartCount > 0 && `(${cartCount})`}
// // //                   </Link>
// // //                 </li>
// // //               </ul>
// // //             </div>
// // //             <div className="back">
// // //               {username ? (
// // //                 <div className="flex items-center gap-4">
// // //                   <span className="text-lg lg:text-xl font-medium">Welcome, {username}</span>
// // //                   <button className="btn text-base lg:text-lg px-6 py-3 rounded-full" onClick={handleLogout}>Logout</button>
// // //                 </div>
// // //               ) : (
// // //                 <Link to="/login" className="btn text-base lg:text-lg px-6 py-3 rounded-full">Login</Link>
// // //               )}
// // //             </div>
// // //           </div>
// // //           <motion.div className="content" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
// // //             <h2>"Look in the mirror. That's your competition"</h2>
// // //             <h3>ABHISHEK DHIMAN</h3>
// // //           </motion.div>
// // //         </div>
// // //         <div className="footer-up">
// // //           <motion.div className="image" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
// // //             <img src="/assets/images/home.png" alt="Bilvine Fitness Empire Gym" />
// // //           </motion.div>
// // //           <motion.div className="footer-content" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
// // //             <p>"Embark on a transformative fitness journey with our state-of-the-art gym, where passion meets purpose, and every workout is a step towards a healthier, stronger you."</p>
// // //             <Link to="/join-us">
// // //               <motion.button className="btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>JOIN US!</motion.button>
// // //             </Link>
// // //           </motion.div>
// // //           <motion.div className="About" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
// // //             <Link to="/diet"><span>DIET PLANS</span></Link>
// // //             <Link to="/workout"><span>WORKOUT PLAN</span></Link>
// // //             <Link to="/expert-advice"><span>EXPERT ADVICE</span></Link>
// // //             <Link to="/FatToFitCourse"><span>Fat to Fit Course</span></Link>
// // //             <Link to="/postures"><span>POSTURES</span></Link>
// // //             <Link to="/yoga-meditation"><span>YOGA & MEDITATION</span></Link> {/* New Link */}
// // //           </motion.div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Home;



// // import React, { useState, useEffect, useMemo } from 'react';
// // import { Link, useHistory } from 'react-router-dom';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import './Home.css';

// // const Home = () => {
// //   const [username, setUsername] = useState('');
// //   const [videoIndex, setVideoIndex] = useState(0);
// //   const [cartCount, setCartCount] = useState(0);
// //   const [isVideoLoaded, setIsVideoLoaded] = useState(false);
// //   const history = useHistory();
  
// //   const backgroundVideos = useMemo(() => [
// //     '/assets/images/homevideo.mp4',
// //     '/assets/images/AdobeStock_618060694_Video_HD_Preview.mp4'
// //   ], []);

// //   useEffect(() => {
// //     // Preload videos for smoother transitions
// //     backgroundVideos.forEach((video) => {
// //       const vid = document.createElement('video');
// //       vid.src = video;
// //       vid.load();
// //       vid.onloadeddata = () => setIsVideoLoaded(true);
// //     });

// //     const storedUsername = localStorage.getItem('username');
// //     if (storedUsername) setUsername(storedUsername);

// //     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
// //     setCartCount(storedCart.length);

// //     // Enhanced video transition with fade effect
// //     const interval = setInterval(() => {
// //       setIsVideoLoaded(false); // Start fade out
// //       setTimeout(() => {
// //         setVideoIndex((prevIndex) => (prevIndex + 1) % backgroundVideos.length);
// //         setTimeout(() => setIsVideoLoaded(true), 200); // Start fade in after video changes
// //       }, 500);
// //     }, 8000); // Longer duration for better user experience

// //     return () => clearInterval(interval);
// //   }, [backgroundVideos]);

// //   const handleLogout = () => {
// //     localStorage.removeItem('email');
// //     localStorage.removeItem('password');
// //     localStorage.removeItem('username');
// //     setUsername('');
// //     history.push('/login');
// //   };

// //   // Animation variants for enhanced transitions
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: { 
// //       opacity: 1,
// //       transition: {
// //         when: "beforeChildren",
// //         staggerChildren: 0.2,
// //         duration: 0.6
// //       }
// //     },
// //     exit: {
// //       opacity: 0,
// //       transition: { duration: 0.3 }
// //     }
// //   };

// //   const itemVariants = {
// //     hidden: { y: 20, opacity: 0 },
// //     visible: { 
// //       y: 0, 
// //       opacity: 1,
// //       transition: { duration: 0.5 }
// //     }
// //   };

// //   const fadeInVariants = {
// //     hidden: { opacity: 0 },
// //     visible: { 
// //       opacity: 1,
// //       transition: { duration: 1.2 }
// //     }
// //   };

// //   const scaleVariants = {
// //     hidden: { scale: 0.8, opacity: 0 },
// //     visible: { 
// //       scale: 1, 
// //       opacity: 1,
// //       transition: { 
// //         type: "spring",
// //         stiffness: 100,
// //         damping: 15
// //       }
// //     }
// //   };

// //   return (
// //     <motion.div 
// //       className="main"
// //       initial="hidden"
// //       animate="visible"
// //       variants={containerVariants}
// //     >
// //       <AnimatePresence>
// //         <motion.video 
// //           key={videoIndex}
// //           className="background-video" 
// //           autoPlay loop muted playsInline
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: isVideoLoaded ? 1 : 0 }}
// //           exit={{ opacity: 0 }}
// //           transition={{ duration: 1.5, ease: "easeInOut" }}
// //           style={{
// //             position: 'absolute', 
// //             top: 0, 
// //             left: 0, 
// //             width: '100%', 
// //             height: '100%',
// //             objectFit: 'cover', 
// //             zIndex: -1,
// //           }}
// //           onError={(e) => console.error('Video loading error:', e)}
// //         >
// //           <source src={backgroundVideos[videoIndex]} type="video/mp4" />
// //           Your browser does not support the video tag.
// //         </motion.video>
// //       </AnimatePresence>
      
// //       <div className="page1">
// //         <motion.h1 
// //           initial={{ scale: 0, opacity: 0 }} 
// //           animate={{ scale: 1, opacity: 0.15 }} 
// //           transition={{ 
// //             duration: 1.2, 
// //             type: "spring", 
// //             stiffness: 60,
// //             delay: 0.3
// //           }}
// //           className="hero-text"
// //         >
// //           I CAN!
// //         </motion.h1>
        
// //         <div className="top">
// //           <motion.div 
// //             className="header container glass-effect"
// //             initial={{ y: -100, opacity: 0 }}
// //             animate={{ y: 0, opacity: 1 }}
// //             transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
// //           >
// //             <motion.div 
// //               className="logo pulse-animation" 
// //               variants={itemVariants}
// //             >
// //               <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight glow-text">
// //                 BILVINE'S ENERGYM<span className="text-teal-500">!</span>
// //               </h2>
// //             </motion.div>
            
// //             <motion.div className="nav-link" variants={itemVariants}>
// //               <ul className="flex gap-6 lg:gap-8 items-center">
// //                 <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
// //                   <Link to="/" className="link text-lg lg:text-xl hover-effect">HOME</Link>
// //                 </motion.li>
// //                 <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
// //                   <Link to="/merchandise" className="link text-lg lg:text-xl hover-effect">Merchandise</Link>
// //                 </motion.li>
// //                 <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
// //                   <Link to="/shop" className="link text-lg lg:text-xl hover-effect">Shop</Link>
// //                 </motion.li>
// //                 <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
// //                   <Link to="/support" className="link text-lg lg:text-xl hover-effect">Support</Link>
// //                 </motion.li>
// //                 <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
// //                   <Link to="/cart" className="link cart-link text-lg lg:text-xl hover-effect">
// //                     Cart {cartCount > 0 && (
// //                       <motion.span 
// //                         className="cart-badge"
// //                         initial={{ scale: 0 }}
// //                         animate={{ scale: 1 }}
// //                         transition={{ type: "spring", stiffness: 500, damping: 10 }}
// //                       >
// //                         {cartCount}
// //                       </motion.span>
// //                     )}
// //                   </Link>
// //                 </motion.li>
// //               </ul>
// //             </motion.div>
            
// //             <motion.div className="back" variants={itemVariants}>
// //               {username ? (
// //                 <div className="flex items-center gap-4">
// //                   <motion.span 
// //                     className="text-lg lg:text-xl font-medium welcome-text"
// //                     initial={{ opacity: 0, x: 20 }}
// //                     animate={{ opacity: 1, x: 0 }}
// //                     transition={{ duration: 0.5 }}
// //                   >
// //                     Welcome, {username}
// //                   </motion.span>
// //                   <motion.button 
// //                     className="btn neo-btn text-base lg:text-lg px-6 py-3 rounded-full" 
// //                     onClick={handleLogout}
// //                     whileHover={{ 
// //                       scale: 1.05,
// //                       boxShadow: "0 10px 25px rgba(63, 155, 146, 0.7)"
// //                     }} 
// //                     whileTap={{ scale: 0.95 }}
// //                   >
// //                     Logout
// //                   </motion.button>
// //                 </div>
// //               ) : (
// //                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
// //                   <Link to="/login" className="btn neo-btn text-base lg:text-lg px-6 py-3 rounded-full">Login</Link>
// //                 </motion.div>
// //               )}
// //             </motion.div>
// //           </motion.div>
          
// //           <motion.div 
// //             className="content" 
// //             variants={fadeInVariants}
// //           >
// //             <motion.h2 
// //               className="quote-text"
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.5 }}
// //             >
// //               "Look in the mirror. That's your competition"
// //             </motion.h2>
// //             <motion.h3 
// //               className="author-text"
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.8 }}
// //             >
// //               ABHISHEK DHIMAN
// //             </motion.h3>
// //           </motion.div>
// //         </div>
        
// //         <motion.div 
// //           className="footer-up glass-panel"
// //           variants={fadeInVariants}
// //         >
// //           <motion.div 
// //             className="image shine-effect" 
// //             variants={scaleVariants}
// //             whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
// //           >
// //             <img 
// //               src="/assets/images/home.png" 
// //               alt="Bilvine Fitness Empire Gym" 
// //               className="image-filter"
// //             />
// //           </motion.div>
          
// //           <motion.div 
// //             className="footer-content" 
// //             variants={itemVariants}
// //           >
// //             <motion.p 
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.7, delay: 1 }}
// //               className="inspire-text"
// //             >
// //               "Embark on a transformative fitness journey with our state-of-the-art gym, where passion meets purpose, and every workout is a step towards a healthier, stronger you."
// //             </motion.p>
            
// //             <Link to="/join-us">
// //               <motion.button 
// //                 className="btn join-btn" 
// //                 whileHover={{ 
// //                   scale: 1.1, 
// //                   boxShadow: "0 0 25px rgba(63, 155, 146, 0.8)",
// //                   textShadow: "0 0 8px rgba(255, 255, 255, 0.8)"
// //                 }} 
// //                 whileTap={{ scale: 0.9 }}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5, delay: 1.2 }}
// //               >
// //                 JOIN US!
// //               </motion.button>
// //             </Link>
// //           </motion.div>
          
// //           <motion.div 
// //             className="About fitness-links"
// //             variants={itemVariants}
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.7, delay: 1.4, staggerChildren: 0.1 }}
// //           >
// //             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
// //               <Link to="/diet"><span className="service-link">DIET PLANS</span></Link>
// //             </motion.div>
// //             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
// //               <Link to="/workout"><span className="service-link">WORKOUT PLAN</span></Link>
// //             </motion.div>
// //             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
// //               <Link to="/expert-advice"><span className="service-link">EXPERT ADVICE</span></Link>
// //             </motion.div>
// //             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
// //               <Link to="/FatToFitCourse"><span className="service-link">Fat to Fit Course</span></Link>
// //             </motion.div>
// //             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
// //               <Link to="/postures"><span className="service-link">POSTURES</span></Link>
// //             </motion.div>
// //             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
// //               <Link to="/yoga-meditation"><span className="service-link">YOGA & MEDITATION</span></Link>
// //             </motion.div>
// //           </motion.div>
// //         </motion.div>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default Home;




// import React, { useState, useEffect, useMemo } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import './Home.css';

// const Home = () => {
//   const [username, setUsername] = useState('');
//   const [videoIndex, setVideoIndex] = useState(0);
//   const [cartCount, setCartCount] = useState(0);
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);
//   const history = useHistory();

//   const backgroundVideos = useMemo(
//     () => [
//       '/assets/images/homevideo.mp4',
//       '/assets/images/AdobeStock_618060694_Video_HD_Preview.mp4',
//     ],
//     []
//   );

//   useEffect(() => {
//     const loadVideos = async () => {
//       for (const video of backgroundVideos) {
//         const vid = document.createElement('video');
//         vid.src = video;
//         vid.preload = 'auto';
//         vid.muted = true;
//         vid.playsInline = true;
//         try {
//           await vid.load();
//           setIsVideoLoaded(true);
//         } catch (error) {
//           console.error('Video loading error:', error);
//           setIsVideoLoaded(false);
//         }
//       }
//     };

//     loadVideos();

//     const storedUsername = localStorage.getItem('username');
//     if (storedUsername) setUsername(storedUsername);

//     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartCount(storedCart.length);

//     const interval = setInterval(() => {
//       setIsVideoLoaded(false);
//       setTimeout(() => {
//         setVideoIndex((prevIndex) => (prevIndex + 1) % backgroundVideos.length);
//         setTimeout(() => setIsVideoLoaded(true), 200);
//       }, 500);
//     }, 8000);

//     return () => clearInterval(interval);
//   }, [backgroundVideos]);

//   const handleLogout = () => {
//     localStorage.removeItem('email');
//     localStorage.removeItem('password');
//     localStorage.removeItem('username');
//     setUsername('');
//     history.push('/login');
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: 'beforeChildren',
//         staggerChildren: 0.2,
//         duration: 0.6,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.7, ease: 'easeOut' },
//     },
//   };

//   const cardVariants = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: { duration: 0.5, type: 'spring', stiffness: 100 },
//     },
//   };

//   return (
//     <motion.div
//       className="main"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <AnimatePresence>
//         {isVideoLoaded ? (
//           <motion.video
//             key={videoIndex}
//             className="background-video"
//             autoPlay
//             loop
//             muted
//             playsInline
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.5 }}
//             style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}
//             onError={(e) => {
//               console.error('Video error:', e);
//               setIsVideoLoaded(false);
//             }}
//           >
//             <source src={backgroundVideos[videoIndex]} type="video/mp4" />
//             Your browser does not support the video tag.
//           </motion.video>
//         ) : (
//           <motion.img
//             src="/assets/images/fallback-bg.jpg"
//             className="background-video"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.5 }}
//             style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}
//           />
//         )}
//       </AnimatePresence>

//       <div className="page1">
//         <motion.h1
//           className="hero-text"
//           initial={{ scale: 0.5, opacity: 0 }}
//           animate={{ scale: 1, opacity: 0.15 }}
//           transition={{ duration: 1.5, type: 'spring', stiffness: 50 }}
//         >
//           I CAN!
//         </motion.h1>

//         <div className="top">
//           <motion.div
//             className="header container glass-effect"
//             variants={itemVariants}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false, amount: 0.2 }}
//           >
//             <motion.div className="logo pulse-animation" variants={itemVariants}>
//               <h2 className="glow-text text-4xl lg:text-5xl font-extrabold">
//                 BILVINE'S ENERGYM<span className="text-teal-400">!</span>
//               </h2>
//             </motion.div>
//             <motion.div className="nav-link" variants={itemVariants}>
//               <ul className="flex gap-8 items-center">
//                 {['/', '/merchandise', '/shop', '/support', '/cart'].map((path, idx) => (
//                   <motion.li
//                     key={path}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                     variants={itemVariants}
//                   >
//                     <Link
//                       to={path}
//                       className={`link hover-effect text-lg ${
//                         path === '/cart' ? 'cart-link' : ''
//                       }`}
//                     >
//                       {path === '/'
//                         ? 'HOME'
//                         : path === '/merchandise'
//                         ? 'Merchandise'
//                         : path === '/shop'
//                         ? 'Supplements'
//                         : path === '/support'
//                         ? 'Support'
//                         : `Cart ${cartCount > 0 ? `(${cartCount})` : ''}`}
//                       {path === '/cart' && cartCount > 0 && (
//                         <motion.span
//                           className="cart-badge"
//                           initial={{ scale: 0 }}
//                           animate={{ scale: 1 }}
//                           transition={{ type: 'spring', stiffness: 500 }}
//                         >
//                           {cartCount}
//                         </motion.span>
//                       )}
//                     </Link>
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//             <motion.div className="back" variants={itemVariants}>
//               {username ? (
//                 <motion.div
//                   className="flex items-center gap-4"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <span className="text-lg welcome-text">Welcome, {username}</span>
//                   <motion.button
//                     className="neo-btn px-6 py-2 rounded-full"
//                     onClick={handleLogout}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Logout
//                   </motion.button>
//                 </motion.div>
//               ) : (
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Link to="/login" className="neo-btn px-6 py-2 rounded-full">
//                     Login
//                   </Link>
//                 </motion.div>
//               )}
//             </motion.div>
//           </motion.div>

//           <motion.div
//             className="content"
//             variants={itemVariants}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false, amount: 0.3 }}
//           >
//             <motion.h2 className="quote-text">
//               "Look in the mirror. That's your competition"
//             </motion.h2>
//             <motion.h3 className="author-text">ABHISHEK DHIMAN</motion.h3>
//           </motion.div>
//         </div>

//         <motion.div
//           className="footer-up glass-panel"
//           variants={itemVariants}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.2 }}
//         >
//           <motion.div
//             className="image shine-effect"
//             variants={itemVariants}
//             whileHover={{ scale: 1.05 }}
//           >
//             <img
//               src="/assets/images/home.png"
//               alt="Bilvine Fitness Empire Gym"
//               className="image-filter"
//             />
//           </motion.div>

//           <motion.div className="footer-content" variants={itemVariants}>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               className="inspire-text"
//             >
//               "Embark on a transformative fitness journey with our state-of-the-art gym, where
//               passion meets purpose, and every workout is a step towards a healthier, stronger
//               you."
//             </motion.p>
//             <Link to="/join-us">
//               <motion.button
//                 className="join-btn enhanced-join"
//                 whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(63, 155, 146, 0.9)' }}
//                 whileTap={{ scale: 0.95 }}
//                 animate={{ boxShadow: ['0 0 10px rgba(63, 155, 146, 0.5)', '0 0 30px rgba(63, 155, 146, 0.9)'], transition: { duration: 1.5, repeat: Infinity, repeatType: 'reverse' } }}
//               >
//                 JOIN US!
//               </motion.button>
//             </Link>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           className="card-container"
//           variants={itemVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {[
//             {
//               to: '/diet',
//               title: 'Diet Plans',
//               // desc: 'Personalized diet plans for lasting results',
//               img: '/assets/images/dietplan.png',
//             },
//             {
//               to: '/yoga-meditation',
//               title: 'Yoga',
//               // desc: 'Daily yoga and meditation for a balanced life',
//               img: '/assets/images/yoga.png',
//             },
//             {
//               to: '/workout',
//               title: 'Workout Gear',
//               // desc: 'Top-quality gear to power your fitness journey',
//               img: '/assets/images/workout.png',
//             },
//             {
//               to: '/postures',
//               title: 'Postures',
//               // desc: 'Science-backed postures to boost metabolism and health',
//               img: '/assets/images/posture.png',
//             }  ,
//             {
//               to: '/FatToFitCourse',
//               title: 'Fat to Fit Course',
//               // desc: 'Transform your body with expert guidance',
//               img: '/assets/images/fat-to-fit.png',
//             },
//             {
//               to: '/expert-advice',
//               title: 'Expert Advice',
//               // desc: 'Get professional tips for your fitness journey',
//               img: '/assets/images/expert.png',
//             },
//           ].map((card, index) => (
//             <motion.div
//               key={index}
//               className="card"
//               variants={cardVariants}
//               whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <Link to={card.to} className="card-link">
//                 <img src={card.img} alt={card.title} className="card-image" />
//                 <div className="card-content">
//                   <h3 className="card-title">{card.title}</h3>
//                   <p className="card-desc">{card.desc}</p>
//                 </div>
//                 <span className="card-arrow">›</span>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.footer
//           className="footer glass-panel"
//           initial={{ y: 100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           <div className="container">
//             <div className="footer-content">
//               <div className="footer-section">
//                 <h4 className="footer-title">About Us</h4>
//                 <p className="footer-text">
//                   At Bilvine's EnergyM, we make group workouts fun, provide daily nutrition, and offer
//                   yoga & meditation to enhance your lifestyle with ease. #BeBetterEveryDay
//                 </p>
//               </div>
//               <div className="footer-section">
//                 <h4 className="footer-title">Quick Links</h4>
//                 <ul className="footer-links">
//                   <li><Link to="/franchise" className="footer-link">Franchise</Link></li>
//                   <li><Link to="/corporate" className="footer-link">Corporate Partnerships</Link></li>
//                   <li><Link to="/pass" className="footer-link">Pass Network</Link></li>
//                   <li><Link to="/careers" className="footer-link">Careers</Link></li>
//                 </ul>
//               </div>
//               <div className="footer-section">
//                 <h4 className="footer-title">Support</h4>
//                 <ul className="footer-links">
//                   <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
//                   <li><Link to="/terms-conditions" className="footer-link">Terms & Conditions</Link></li>
//                   <li><Link to="/support" className="footer-link">Contact Us</Link></li>
//                 </ul>
//               </div>
//               <div className="footer-section">
//                 <h4 className="footer-title">Download App</h4>
//                 <div className="app-links">
//                   <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
//                     <img src="/assets/images/app-store.png" alt="App Store" className="app-icon" />
//                   </a>
//                   <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
//                     <img src="/assets/images/google-play.png" alt="Google Play" className="app-icon" />
//                   </a>
//                 </div>
//                 <div className="social-links">
//                   <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                   <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//                     <i className="fab fa-instagram"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.footer>
//       </div>
//     </motion.div>
//   );
// };

// export default Home;



// import React, { useState, useEffect, useMemo } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import './Home.css';

// const Home = () => {
//   const [username, setUsername] = useState('');
//   const [videoIndex, setVideoIndex] = useState(0);
//   const [cartCount, setCartCount] = useState(0);
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);
//   const [activeTab, setActiveTab] = useState('all');
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
//   const history = useHistory();

//   const backgroundVideos = useMemo(
//     () => [
//       '/assets/images/homevideo.mp4',
//       '/assets/images/AdobeStock_618060694_Video_HD_Preview.mp4',
//     ],
//     []
//   );

//   useEffect(() => {
//     const loadVideos = async () => {
//       for (const video of backgroundVideos) {
//         const vid = document.createElement('video');
//         vid.src = video;
//         vid.preload = 'auto';
//         vid.muted = true;
//         vid.playsInline = true;
//         try {
//           await vid.load();
//           setIsVideoLoaded(true);
//         } catch (error) {
//           console.error('Video loading error:', error);
//           setIsVideoLoaded(false);
//         }
//       }
//     };

//     loadVideos();

//     const storedUsername = localStorage.getItem('username');
//     if (storedUsername) setUsername(storedUsername);

//     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartCount(storedCart.length);

//     const interval = setInterval(() => {
//       setIsVideoLoaded(false);
//       setTimeout(() => {
//         setVideoIndex((prevIndex) => (prevIndex + 1) % backgroundVideos.length);
//         setTimeout(() => setIsVideoLoaded(true), 200);
//       }, 500);
//     }, 8000);

//     return () => clearInterval(interval);
//   }, [backgroundVideos]);

//   const handleLogout = () => {
//     localStorage.removeItem('email');
//     localStorage.removeItem('password');
//     localStorage.removeItem('username');
//     setUsername('');
//     history.push('/login');
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: 'beforeChildren',
//         staggerChildren: 0.2,
//         duration: 0.6,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.7, ease: 'easeOut' },
//     },
//   };

//   const cardVariants = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: { duration: 0.5, type: 'spring', stiffness: 100 },
//     },
//   };
  
//   const toggleMobileMenu = () => {
//     setShowMobileMenu(!showMobileMenu);
//   };

//   return (
//     <motion.div
//       className="main"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <AnimatePresence>
//         {isVideoLoaded ? (
//           <motion.video
//             key={videoIndex}
//             className="background-video"
//             autoPlay
//             loop
//             muted
//             playsInline
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.5 }}
//             style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}
//             onError={(e) => {
//               console.error('Video error:', e);
//               setIsVideoLoaded(false);
//             }}
//           >
//             <source src={backgroundVideos[videoIndex]} type="video/mp4" />
//             Your browser does not support the video tag.
//           </motion.video>
//         ) : (
//           <motion.img
//             src="/assets/images/fallback-bg.jpg"
//             className="background-video"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.5 }}
//             style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}
//           />
//         )}
//       </AnimatePresence>

//       {/* Navbar */}
//       <header>
//         <motion.nav 
//           className="navbar glass-effect d-flex"
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.h1 
//             className="logo-text"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 400, damping: 10 }}
//           >
//             BILVINE'S <span className="energym-text">ENERGYM</span><span className="accent-text">!</span>
//           </motion.h1>
//           <motion.ul 
//             className={`nav-links d-flex ${showMobileMenu ? 'show-mobile-menu' : ''}`}
//             animate={{ opacity: 1, x: 0 }}
//             initial={{ opacity: 0, x: 20 }}
//             transition={{ duration: 0.5, staggerChildren: 0.1 }}
//           >
//             <motion.li variants={itemVariants}><Link className="bold-link" to="/">Home</Link></motion.li>
//             <motion.li variants={itemVariants}><Link to="/merchandise">Merchandise</Link></motion.li>
//             <motion.li variants={itemVariants}><Link to="/shop">Supplements</Link></motion.li>
//             <motion.li variants={itemVariants}><Link to="/support">Support</Link></motion.li>
//             {/* <motion.li variants={itemVariants}><Link to="/diet">Diet Plans</Link></motion.li>
//             <motion.li variants={itemVariants}><Link to="/workout">Workout</Link></motion.li>
//             <motion.li variants={itemVariants}><Link to="/yoga-meditation">Yoga</Link></motion.li>
//             <motion.li variants={itemVariants}><Link to="/postures">Postures</Link></motion.li> */}
//             <motion.li variants={itemVariants}><Link to="/cart" className="cart-link">
//               Cart {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
//             </Link></motion.li>
//           </motion.ul>
//           <motion.div className="auth-buttons" variants={itemVariants}>
//             {username ? (
//               <motion.div
//                 className="user-welcome"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <span className="welcome-text">Welcome, {username}</span>
//                 <motion.button
//                   className="neo-btn logout-btn"
//                   onClick={handleLogout}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Logout
//                 </motion.button>
//               </motion.div>
//             ) : (
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link to="/login" className="neo-btn login-btn">
//                   Login
//                 </Link>
//               </motion.div>
//             )}
//           </motion.div>
//           <motion.span 
//             className="ham-bars"
//             onClick={toggleMobileMenu}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <i className="fa-solid fa-bars"></i>
//           </motion.span>
//         </motion.nav>
//       </header>

//       {/* Hero Section */}
//       <div className="hero-section d-flex">
//         <motion.h1
//           className="bg-hero-text"
//           initial={{ scale: 0.5, opacity: 0 }}
//           animate={{ scale: 1, opacity: 0.15 }}
//           transition={{ duration: 1.5, type: 'spring', stiffness: 50 }}
//         >
//           I CAN!
//         </motion.h1>

//         <motion.div 
//           className="header-text-section"
//           variants={itemVariants}
//         >
//           <motion.h1 
//             className="head-title"
//             variants={itemVariants}
//           >
//             Get body in <span className="shape-text">shape</span> & stay healthy
//           </motion.h1>
//           <motion.p 
//             className="hero-description"
//             variants={itemVariants}
//           >
//             Discover a vast collection of health and fitness content, nutritious
//             recipes, and inspiring transformation stories to help you achieve
//             and maintain a fit lifestyle.
//           </motion.p>
//           <motion.div 
//             className="btn-section"
//             variants={itemVariants}
//           >
//             <motion.button 
//               className="btn-primary join-now"
//               whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(63, 155, 146, 0.9)' }}
//               whileTap={{ scale: 0.95 }}
//             >
//             <Link to="/join-us">Join Us!</Link>
//             </motion.button>
//             <motion.button 
//               className="btn-outline download-app"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Download App
//             </motion.button>
//           </motion.div>
//         </motion.div>

//         <motion.div 
//           className="header-img-section"
//           variants={itemVariants}
//         >
//           <motion.img 
//             src="/assets/images/home.png" 
//             alt="Fitness Hero" 
//             whileHover={{ scale: 1.03 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           />
//           <motion.div 
//             className="tr-box box-1"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           >
//             <h1>500+</h1>
//             <p>Free Workout Videos</p>
//           </motion.div>
//           <motion.div 
//             className="tr-box box-2 d-flex"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//           >
//             <div className="play-icon">
//               <img src="/assets/images/bilvineprt.png" alt="" />
//             </div>
//             <div>
//               <h1>350+</h1>
//               <p>Video tutorials</p>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Habits Section */}
//       <section className="habits-section">
//         <motion.div 
//           className="habits-text-content"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1>Change Your Habits</h1>
//           <p className="section-description">
//             Our expert trainers create personalized workout plans that align
//             with your unique goals, whether you're aiming for weight loss,
//             muscle gain, improved endurance.
//           </p>
//         </motion.div>

//         <div className="habits-img-content">
//           {[
//             {
//               img: "/assets/images/bilvineprt.png",
//               title: "Movement",
//               desc: "We emphasize the importance of regular physical activity for everyone, regardless of their starting point."
//             },
//             {
//               img: "/assets/images/bilvineprt.png",
//               title: "Time",
//               desc: "Optimize your schedule to include daily fitness routines, making wellness a part of your life."
//             },
//             {
//               img: "/assets/images/bilvineprt.png",
//               title: "Practice",
//               desc: "Consistent practice and dedication are key to reaching your fitness goals."
//             },
//             {
//               img: "/assets/images/bilvineprt.png",
//               title: "Weight Loss",
//               desc: "Learn effective strategies for weight management and long-term health benefits."
//             }
//           ].map((habit, index) => (
//             <motion.div 
//               className="habits-img-card"
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false, amount: 0.3 }}
//               transition={{ delay: index * 0.2, duration: 0.5 }}
//               whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
//             >
//               <img src={habit.img} alt={habit.title} />
//               <h3>{habit.title}</h3>
//               <p className="habit-desc">{habit.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Run an Extra Mile Section */}
//       <section className="mile-easily-section d-flex">
//         <motion.div 
//           className="mile-text-content"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: false, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1>Run an Extra <br />Mile Easily</h1>
//           <p className="section-description">
//             Access a variety of running programs designed for all levels,
//             helping you to improve endurance and enjoy the journey of fitness.
//           </p>
//           <motion.button 
//             className="btn-primary"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Link to="/join-us">
//             Join Now
//             </Link>
//           </motion.button>
//         </motion.div>
//         <motion.div 
//           className="mile-image-content"
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: false, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="mile-image-card"></div>
//         </motion.div>
//       </section>

//       {/* Featured Programs */}
//       <motion.div
//         className="card-container"
//         variants={itemVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.2 }}
//       >
//         {[
//           {
//             to: '/diet',
//             title: 'Diet Plans',
//             img: '/assets/images/dietplan.png',
//           },
//           {
//             to: '/yoga-meditation',
//             title: 'Yoga',
//             img: '/assets/images/yoga.png',
//           },
//           {
//             to: '/workout',
//             title: 'Workout Gear',
//             img: '/assets/images/workout.png',
//           },
//           {
//             to: '/postures',
//             title: 'Postures',
//             img: '/assets/images/posture.png',
//           },
//           {
//             to: '/FatToFitCourse',
//             title: 'Fat to Fit Course',
//             img: '/assets/images/fat-to-fit.png',
//           },
//           {
//             to: '/expert-advice',
//             title: 'Expert Advice',
//             img: '/assets/images/expert.png',
//           },
//         ].map((card, index) => (
//           <motion.div
//             key={index}
//             className="card"
//             variants={cardVariants}
//             whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <Link to={card.to} className="card-link">
//               <img src={card.img} alt={card.title} className="card-image" />
//               <div className="card-content">
//                 <h3 className="card-title">{card.title}</h3>
//               </div>
//               <span className="card-arrow">›</span>
//             </Link>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Challenge Your Friend Section */}
//       <section className="challenge-section d-flex">
//         <motion.div 
//           className="challenge-text-section"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1>Challenge Your <span className="color-primary">Friend</span></h1>
//           <p className="section-description">
//             Engage in friendly competition and motivate each other to reach new
//             fitness milestones.
//           </p>
//           <motion.button 
//             className="btn-outline"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             See our Community
//           </motion.button>
//         </motion.div>

//         <motion.div 
//           className="challenge-img-section"
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: false, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         ></motion.div>

//         <div className="challenge-card-section">
//           {[
//             {
//               title: "Get Inspired",
//               desc: "Read success stories and expert advice to keep you motivated and inspired on your fitness journey.",
//               link: "/expert-advice"
//             },
//             {
//               title: "Join Our Mission",
//               desc: "Join us in our mission to make fitness accessible to everyone, with resources tailored to support you at every step.",
//               link: "/FatToFitCourse"
//             }
//           ].map((card, index) => (
//             <motion.div 
//               className="challenge-card"
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false, amount: 0.3 }}
//               transition={{ delay: index * 0.2, duration: 0.5 }}
//               whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
//             >
//               <h3>{card.title}</h3>
//               <p className="card-description">{card.desc}</p>
//               <Link to={card.link}><span>Learn More</span></Link>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* BMI Calculator */}
//       <motion.div 
//         className="bmi-text-content"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: false, amount: 0.3 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1>BMI Calculator</h1>
//         <p className="section-description">
//           Understand your body mass index and take the first step towards personalized fitness planning
//           to achieve improved endurance and overall wellness.
//         </p>
//       </motion.div>
      
//       <section className="calculator-section">
//         <motion.div 
//           className="calculator-container"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="full-content d-flex">
//             <motion.div 
//               className="bmi-table-section"
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: false, amount: 0.3 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//             >
//               <h1>BMI Calculator Chart</h1>
//               <table>
//                 <tr>
//                   <th>BMI</th>
//                   <th>Weight Status</th>
//                 </tr>
//                 <tr>
//                   <td>Below 18.5</td>
//                   <td>Underweight</td>
//                 </tr>
//                 <tr>
//                   <td>18.5 - 24.9</td>
//                   <td>Healthy</td>
//                 </tr>
//                 <tr>
//                   <td>25.0 - 29.9</td>
//                   <td>Overweight</td>
//                 </tr>
//                 <tr>
//                   <td>30.0 - and Above</td>
//                   <td>Obese</td>
//                 </tr>
//               </table>
//             </motion.div>
            
//             <motion.div 
//               className="bmi-form-section"
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: false, amount: 0.3 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//             >
//               <h1>Calculate your BMI</h1>
//               <p className="form-description">
//                 Use our BMI calculator to understand your body mass index and
//                 take the first step towards personalized fitness planning.
//               </p>
//               <form className="bmi-form">
//                 <input
//                   type="text"
//                   className="input-form-1"
//                   placeholder="Height/cm"
//                   name=""
//                   id=""
//                 />
//                 <input
//                   type="text"
//                   className="input-form-2"
//                   placeholder="Weight/kg"
//                   name=""
//                   id=""
//                 />
//                 <input
//                   type="text"
//                   className="input-form-3"
//                   placeholder="Age"
//                   name=""
//                   id=""
//                 />

//                 <select name="" id="" className="input-form-4">
//                   <option value="Gender" hidden>Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                 </select>

//                 <select name="" id="" className="input-form-5">
//                   <option value="Select an activity factor" hidden>
//                     Select an activity factor
//                   </option>
//                   <option value="Gym">Gym</option>
//                   <option value="Push ups">Push ups</option>
//                   <option value="Body Stretch">Body Stretch</option>
//                 </select>
//                 <motion.button 
//                   className="btn-primary"
//                   type="submit"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Calculate
//                 </motion.button>
//               </form>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Team Section */}
//       <section className="team-section">
//         <motion.div 
//           className="team-text-content"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1>Meet Our Team</h1>
//           <p className="section-description">
//             Our team of skilled and passionate fitness professionals is here to
//             guide, motivate, and support you every step of the way. Get to know
//             our trainers and experts
//           </p>
//         </motion.div>

//         <div className="team-container">
//           {[
//             { name: "Abhishek Dhiman", img: "/assets/images/home4.png" },
//             { name: "Aditi Goel", img: "/assets/images/home3.png" },
//             { name: "Aditi Gupta", img: "/assets/images/home3.png" },
//             { name: "AkashDeep Pal", img: "/assets/images/home4.png" },
//             // { name: "Cody Fisher", img: "/assets/images/trainers/trainer5.png" },
//             // { name: "Theresa Webb", img: "/assets/images/trainers/trainer6.png" }
//           ].map((trainer, index) => (
//             <motion.div 
//               className="team-card-section"
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false, amount: 0.1 }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//               whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
//             >
//               <img src={trainer.img} alt={trainer.name} />
//               <p className="trainer">{trainer.name}</p>
//               <span className="trainer-para">Trainer</span>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <motion.div 
//           className="footer-main-content d-flex"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="logo-section">
//             <Link to="/">
//               <h1 className="color-primary">BILVINE'S ENERGYM!</h1>
//             </Link>
//             <p className="footer-description">
//               Join us in our mission to make fitness accessible to everyone, with
//               resources tailored to support you at every step.
//              </p>
//              <p>At Bilvine's EnergyM, we make group workouts fun, provide daily nutrition, and offer 
//               yoga & meditation to enhance your lifestyle with ease. #BeBetterEveryDay
//             </p>
//             <div className="social-links">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-instagram"></i>
//               </a>
//             </div>
//           </div>
          
//           <div className="service-section">
//             <h2>Quick Links</h2>
//             <ul>
//               <li><Link to="/services" className="footer-link">Services</Link></li>
//               <li><Link to="/support" className="footer-link">Contact Us</Link></li>
//               <li><Link to="/affiliate" className="footer-link">Affiliate Program</Link></li>
//               <li><Link to="/about" className="footer-link">About Us</Link></li>
//             </ul>
//           </div>
          
//           <div className="service-section">
//             <h2>Programs</h2>
//             <ul>
//               <li><Link to="/fitness" className="footer-link">Fitness</Link></li>
//               <li><Link to="/platform" className="footer-link">Platform</Link></li>
//               <li><Link to="/workout-library" className="footer-link">Workout Library</Link></li>
//               <li><Link to="/app" className="footer-link">App Design</Link></li>
//             </ul>
//           </div>
          
//           <div className="service-section">
//             <h2>Download App</h2>
//             <div className="app-links">
//               <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
//                 <img src="/assets/images/app-store.png" alt="App Store" className="app-icon" />
//               </a>
//               <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
//                 <img src="/assets/images/google-play.png" alt="Google Play" className="app-icon" />
//               </a>
//             </div>
//           </div>
          
//         </motion.div>
        
//         <div className="footer-lest-content">
//           <span className="copyright">All rights reserved @BILVINE'S ENERGYM 2025</span>
//         </div>
//       </footer>
//     </motion.div>
//   );
// };

// export default Home;



import React, { useState, useEffect, useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';

const Home = () => {
  const [username, setUsername] = useState('');
  const [videoIndex, setVideoIndex] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const history = useHistory();

  // BMI Calculator States
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activityFactor, setActivityFactor] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const [showResult, setShowResult] = useState(false);

  const backgroundVideos = useMemo(
    () => [
      // '/assets/images/homevideo.mp4',
      // '/assets/images/AdobeStock_618060694_Video_HD_Preview.mp4',
    ],
    []
  );

  useEffect(() => {
    const loadVideos = async () => {
      for (const video of backgroundVideos) {
        const vid = document.createElement('video');
        vid.src = video;
        vid.preload = 'auto';
        vid.muted = true;
        vid.playsInline = true;
        try {
          await vid.load();
          setIsVideoLoaded(true);
        } catch (error) {
          console.error('Video loading error:', error);
          setIsVideoLoaded(false);
        }
      }
    };

    loadVideos();

    const storedUsername = localStorage.getItem('username');
    if (storedUsername) setUsername(storedUsername);

    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(storedCart.length);

    const interval = setInterval(() => {
      setIsVideoLoaded(false);
      setTimeout(() => {
        setVideoIndex((prevIndex) => (prevIndex + 1) % backgroundVideos.length);
        setTimeout(() => setIsVideoLoaded(true), 200);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, [backgroundVideos]);

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('username');
    setUsername('');
    history.push('/login');
  };

  // BMI Calculator Function
  const calculateBMI = (e) => {
    e.preventDefault();
    
    // Convert inputs to numbers and validate
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);
    
    if (!heightValue || !weightValue || heightValue <= 0 || weightValue <= 0) {
      alert("Please enter valid height and weight values");
      return;
    }
    
    // Calculate BMI: weight (kg) / (height (m))²
    const heightInMeters = heightValue / 100;
    const bmi = weightValue / (heightInMeters * heightInMeters);
    setBmiResult(bmi.toFixed(1));
    
    // Determine BMI category
    if (bmi < 18.5) {
      setBmiCategory("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setBmiCategory("Healthy");
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      setBmiCategory("Overweight");
    } else {
      setBmiCategory("Obese");
    }
    
    setShowResult(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, type: 'spring', stiffness: 100 },
    },
  };
  
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <motion.div
      className="main"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <AnimatePresence>
        {isVideoLoaded ? (
          <motion.video
            key={videoIndex}
            className="background-video"
            autoPlay
            loop
            muted
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}
            onError={(e) => {
              console.error('Video error:', e);
              setIsVideoLoaded(false);
            }}
          >
            <source src={backgroundVideos[videoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        ) : (
          <motion.img
            src="/assets/images/fallback-bg.jpg"
            className="background-video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}
          />
        )}
      </AnimatePresence>

      {/* Navbar */}
      <header>
        <motion.nav 
          className="navbar glass-effect d-flex"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="logo-text"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            BILVINE'S <span className="energym-text">ENERGYM</span><span className="accent-text">!</span>
          </motion.h1>
          <motion.ul 
            className={`nav-links d-flex ${showMobileMenu ? 'show-mobile-menu' : ''}`}
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            <motion.li variants={itemVariants}><Link className="bold-link" to="/">Home</Link></motion.li>
            <motion.li variants={itemVariants}><Link to="/merchandise">Merchandise</Link></motion.li>
            <motion.li variants={itemVariants}><Link to="/shop">Supplements</Link></motion.li>
            <motion.li variants={itemVariants}><Link to="/support">Support</Link></motion.li>
            {/* <motion.li variants={itemVariants}><Link to="/diet">Diet Plans</Link></motion.li>
            <motion.li variants={itemVariants}><Link to="/workout">Workout</Link></motion.li>
            <motion.li variants={itemVariants}><Link to="/yoga-meditation">Yoga</Link></motion.li>
            <motion.li variants={itemVariants}><Link to="/postures">Postures</Link></motion.li> */}
            <motion.li variants={itemVariants}><Link to="/cart" className="cart-link">
              Cart {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link></motion.li>
          </motion.ul>
          <motion.div className="auth-buttons" variants={itemVariants}>
            {username ? (
              <motion.div
                className="user-welcome"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="welcome-text">Welcome, {username}</span>
                <motion.button
                  className="neo-btn logout-btn"
                  onClick={handleLogout}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Logout
                </motion.button>
              </motion.div>
            ) : (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/login" className="neo-btn login-btn">
                  Login
                </Link>
              </motion.div>
            )}
          </motion.div>
          <motion.span 
            className="ham-bars"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fa-solid fa-bars"></i>
          </motion.span>
        </motion.nav>
      </header>

      {/* Hero Section */}
      <div className="hero-section d-flex">
        <motion.h1
          className="bg-hero-text"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.5, type: 'spring', stiffness: 50 }}
        >
          I CAN!
        </motion.h1>

        <motion.div 
          className="header-text-section"
          variants={itemVariants}
        >
          <motion.h1 
            className="head-title"
            variants={itemVariants}
          >
            Get body in <span className="shape-text">shape</span> & stay healthy
          </motion.h1>
          <motion.p 
            className="hero-description"
            variants={itemVariants}
          >
            Discover a vast collection of health and fitness content, nutritious
            recipes, and inspiring transformation stories to help you achieve
            and maintain a fit lifestyle.
          </motion.p>
          <motion.div 
            className="btn-section"
            variants={itemVariants}
          >
            <motion.button 
              className="btn-primary join-now"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(63, 155, 146, 0.9)' }}
              whileTap={{ scale: 0.95 }}
            >
            <Link to="/join-us">Join Us!</Link>
            </motion.button>
            <motion.button 
              className="btn-outline download-app"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download App
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="header-img-section"
          variants={itemVariants}
        >
          <motion.img 
            src="/assets/images/home.png" 
            alt="Fitness Hero" 
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.div 
            className="tr-box box-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1>500+</h1>
            <p>Free Workout Videos</p>
          </motion.div>
          <motion.div 
            className="tr-box box-2 d-flex"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="play-icon">
              <img src="/assets/images/bilvineprt.png" alt="" />
            </div>
            <div>
              <h1>350+</h1>
              <p>Video tutorials</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Habits Section */}
      <section className="habits-section">
        <motion.div 
          className="habits-text-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Change Your Habits</h1>
          <p className="section-description">
            Our expert trainers create personalized workout plans that align
            with your unique goals, whether you're aiming for weight loss,
            muscle gain, improved endurance.
          </p>
        </motion.div>

        <div className="habits-img-content">
          {[
            {
              img: "/assets/images/bilvineprt.png",
              title: "Movement",
              desc: "We emphasize the importance of regular physical activity for everyone, regardless of their starting point."
            },
            {
              img: "/assets/images/bilvineprt.png",
              title: "Time",
              desc: "Optimize your schedule to include daily fitness routines, making wellness a part of your life."
            },
            {
              img: "/assets/images/bilvineprt.png",
              title: "Practice",
              desc: "Consistent practice and dedication are key to reaching your fitness goals."
            },
            {
              img: "/assets/images/bilvineprt.png",
              title: "Weight Loss",
              desc: "Learn effective strategies for weight management and long-term health benefits."
            }
          ].map((habit, index) => (
            <motion.div 
              className="habits-img-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
            >
              <img src={habit.img} alt={habit.title} />
              <h3>{habit.title}</h3>
              <p className="habit-desc">{habit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Run an Extra Mile Section */}
      <section className="mile-easily-section d-flex">
        <motion.div 
          className="mile-text-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Run an Extra <br />Mile Easily</h1>
          <p className="section-description">
            Access a variety of running programs designed for all levels,
            helping you to improve endurance and enjoy the journey of fitness.
          </p>
          <motion.button 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/join-us">
            Join Now
            </Link>
          </motion.button>
        </motion.div>
        <motion.div 
          className="mile-image-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mile-image-card"></div>
        </motion.div>
      </section>

      {/* Featured Programs */}
      <motion.div
        className="card-container"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {[
          {
            to: '/diet',
            title: 'Diet Plans',
            img: '/assets/images/dietplan.png',
          },
          {
            to: '/yoga-meditation',
            title: 'Yoga',
            img: '/assets/images/yoga.png',
          },
          {
            to: '/workout',
            title: 'Workout Gear',
            img: '/assets/images/workout.png',
          },
          {
            to: '/postures',
            title: 'Postures',
            img: '/assets/images/posture.png',
          },
          {
            to: '/FatToFitCourse',
            title: 'Fat to Fit Course',
            img: '/assets/images/fat-to-fit.png',
          },
          {
            to: '/expert-advice',
            title: 'Expert Advice',
            img: '/assets/images/expert.png',
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="card"
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to={card.to} className="card-link">
              <img src={card.img} alt={card.title} className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
              </div>
              <span className="card-arrow">›</span>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Challenge Your Friend Section */}
      <section className="challenge-section d-flex">
        <motion.div 
          className="challenge-text-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Challenge Your <span className="color-primary">Friend</span></h1>
          <p className="section-description">
            Engage in friendly competition and motivate each other to reach new
            fitness milestones.
          </p>
          <motion.button 
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See our Community
          </motion.button>
        </motion.div>

        <motion.div 
          className="challenge-img-section"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        ></motion.div>

        <div className="challenge-card-section">
          {[
            {
              title: "Get Inspired",
              desc: "Read success stories and expert advice to keep you motivated and inspired on your fitness journey.",
              link: "/expert-advice"
            },
            {
              title: "Join Our Mission",
              desc: "Join us in our mission to make fitness accessible to everyone, with resources tailored to support you at every step.",
              link: "/FatToFitCourse"
            }
          ].map((card, index) => (
            <motion.div 
              className="challenge-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
            >
              <h3>{card.title}</h3>
              <p className="card-description">{card.desc}</p>
              <Link to={card.link}><span>Learn More</span></Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BMI Calculator - Updated with functionality */}
        <motion.div 
          className="bmi-text-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ color: "black" }}>BMI Calculator</h1>
          <p className="section-description" style={{ color: "black" }}>
            Understand your body mass index and take the first step towards personalized fitness planning
            to achieve improved endurance and overall wellness.
          </p>
        </motion.div>
        
        <section className="calculator-section">
          <motion.div 
            className="calculator-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="full-content d-flex">
          <motion.div 
            className="bmi-table-section"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 style={{ color: "black" }}>BMI Calculator Chart</h1>
            <table>
              <tbody>
            <tr>
              <th>BMI</th>
              <th>Weight Status</th>
            </tr>
            <tr>
              <td>Below 18.5</td>
              <td>Underweight</td>
            </tr>
            <tr>
              <td>18.5 - 24.9</td>
              <td>Healthy</td>
            </tr>
            <tr>
              <td>25.0 - 29.9</td>
              <td>Overweight</td>
            </tr>
            <tr>
              <td>30.0 - and Above</td>
              <td>Obese</td>
            </tr>
              </tbody>
            </table>
            
            {showResult && (
              <motion.div 
            className="bmi-result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              marginTop: "20px",
              padding: "15px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              color: "black"
            }}
              >
            <h2 style={{ marginBottom: "10px", color: "black" }}>Your Results</h2>
            <p style={{ fontSize: "18px", marginBottom: "5px", color: "black" }}>
              BMI: <strong>{bmiResult}</strong>
            </p>
            <p style={{ fontSize: "18px", color: "black" }}>
              Category: <strong style={{
                color: 
              bmiCategory === "Underweight" ? "#3498db" : 
              bmiCategory === "Healthy" ? "#2ecc71" : 
              bmiCategory === "Overweight" ? "#f39c12" : "#e74c3c"
              }}>
                {bmiCategory}
              </strong>
            </p>
              </motion.div>
            )}
          </motion.div>
          
          <motion.div 
            className="bmi-form-section"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 style={{ color: "black" }}>Calculate your BMI</h1>
            <p className="form-description" style={{ color: "black" }}>
              Use our BMI calculator to understand your body mass index and
              take the first step towards personalized fitness planning.
            </p>
            <form className="bmi-form" onSubmit={calculateBMI}>
              <input
            type="text"
            className="input-form-1"
            placeholder="Height/cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
              />
              <input
            type="text"
            className="input-form-2"
            placeholder="Weight/kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
              />
              <input
            type="text"
            className="input-form-3"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
              />

              <select 
            className="input-form-4"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
              >
            <option value="" hidden>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
              </select>

              <select 
            className="input-form-5"
            value={activityFactor}
            onChange={(e) => setActivityFactor(e.target.value)}
              >
            <option value="" hidden>
              Select an activity factor
            </option>
            <option value="Gym">Gym</option>
            <option value="Push ups">Push ups</option>
            <option value="Body Stretch">Body Stretch</option>
              </select>
              <motion.button 
            className="btn-primary"
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
              >
            Calculate
              </motion.button>
            </form>
          </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Team Section */}
      <section className="team-section">
        <motion.div 
          className="team-text-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Meet Our Team</h1>
          <p className="section-description">
            Our team of skilled and passionate fitness professionals is here to
            guide, motivate, and support you every step of the way. Get to know
            our trainers and experts
          </p>
        </motion.div>

        <div className="team-container">
          {[
            { name: "Abhishek Dhiman", img: "/assets/images/home4.png" },
            { name: "Aditi Goel", img: "/assets/images/home3.png" },
            { name: "Aditi Gupta", img: "/assets/images/home3.png" },
            { name: "Akashdeep Pal", img: "/assets/images/home4.png" },
            // { name: "Cody Fisher", img: "/assets/images/trainers/trainer5.png" },
            // { name: "Theresa Webb", img: "/assets/images/trainers/trainer6.png" }
          ].map((trainer, index) => (
            <motion.div 
              className="team-card-section"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
            >
              <img src={trainer.img} alt={trainer.name} />
              <p className="trainer">{trainer.name}</p>
              <span className="trainer-para">Trainer</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <motion.div 
          className="footer-main-content d-flex"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="logo-section">
            <Link to="/">
              <h1 className="color-primary">BILVINE'S ENERGYM!</h1>
            </Link>
            <p className="footer-description">
              Join us in our mission to make fitness accessible to everyone, with
              resources tailored to support you at every step.
             </p>
             <p>At Bilvine's EnergyM, we make group workouts fun, provide daily nutrition, and offer 
              yoga & meditation to enhance your lifestyle with ease. #BeBetterEveryDay
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="service-section">
            <h2>Download App</h2>
            <div className="app-links">
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/applestore.png" alt="App Store" className="app-icon" />
              </a>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/googleplay.png" alt="Google Play" className="app-icon" />
              </a>
            </div>
          </div>
        </motion.div>
        
        <div className="footer-lest-content">
          <span className="copyright">All rights reserved @BILVINE'S ENERGYM 2025</span>
        </div>
      </footer>
    </motion.div>
  );
};

export default Home;