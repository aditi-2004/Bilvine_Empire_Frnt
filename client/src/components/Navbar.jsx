// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex-shrink-0">
//             <Link to="/" className="text-2xl font-bold">
//               BILVINE'S ENERGYM<span className="text-blue-600">!</span>
//             </Link>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <Link to="/" className="px-3 py-2 text-gray-700 hover:text-blue-600">HOME</Link>
//               <Link to="/merchandise" className="px-3 py-2 text-gray-700 hover:text-blue-600">Merchandise</Link>
//               <Link to="/shop" className="px-3 py-2 text-gray-700 hover:text-blue-600">Shop</Link>
//               <Link to="/support" className="px-3 py-2 text-gray-700 hover:text-blue-600">Support</Link>
//             </div>
//           </div>
//           <div>
//             <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className="bg-transparent glass-effect fixed top-0 left-0 w-full z-50"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div className="flex-shrink-0" variants={itemVariants}>
            <Link to="/" className="text-3xl font-extrabold glow-text text-white">
              BILVINE'S ENERGYM<span className="text-teal-400">!</span>
            </Link>
          </motion.div>
          <motion.div className="hidden md:flex items-center space-x-6" variants={itemVariants}>
            <Link to="/" className="nav-link hover-effect text-lg font-medium text-white">
              HOME
            </Link>
            <Link to="/merchandise" className="nav-link hover-effect text-lg font-medium text-white">
              Merchandise
            </Link>
            <Link to="/shop" className="nav-link hover-effect text-lg font-medium text-white">
              Shop
            </Link>
            <Link to="/support" className="nav-link hover-effect text-lg font-medium text-white">
              Support
            </Link>
            <Link to="/diet" className="nav-link hover-effect text-lg font-medium text-white">
              Diet Plans
            </Link>
            <Link to="/workout" className="nav-link hover-effect text-lg font-medium text-white">
              Workout Plans
            </Link>
            <Link to="/yoga-meditation" className="nav-link hover-effect text-lg font-medium text-white">
              Yoga & Meditation
            </Link>
            <Link to="/postures" className="nav-link hover-effect text-lg font-medium text-white">
              Postures
            </Link>
            <Link to="/expert-advice" className="nav-link hover-effect text-lg font-medium text-white">
              Expert Advice
            </Link>
            <Link to="/fat-to-fit" className="nav-link hover-effect text-lg font-medium text-white">
              Fat to Fit Course
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link
              to="/login"
              className="neo-btn text-base font-semibold px-6 py-2 rounded-full text-white"
            >
              Login
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;