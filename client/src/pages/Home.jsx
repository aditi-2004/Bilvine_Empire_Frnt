

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