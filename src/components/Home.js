import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const buttonVariants = {
  hover: {
    scale: 1.07,
    textShadow: '0px 0px 8px rgba(255,255,255,1)',
    boxShadow: '0px 0px 8px rgba(255,255,255,.5)',
    transition: {
      yoyo: Infinity,
      duration: 0.3
    }
  },
  // visible: {
  //   x: [0, -20, 20, -20, 20, 0],
  //   transition: { delay: 2 }
  // }
}

const Home = () => {
  return (
    <motion.div className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: .7,
        duration: 1
      }}
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover='hover'
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;