import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    x: '100vw',
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', delay: .5 }
  },
}

const nextVariants = {
  hidden: {
    x: '100vw'
  },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 110 }
  }
}


const buttonVariants = {
  hover: {
    scale: 1.07,
    textShadow: '0px 0px 8px rgba(255,255,255,1)',
    boxShadow: '0px 0px 8px rgba(255,255,255,.5)',
    transition: {
      yoyo: Infinity,
      duration: 0.3
    }
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate="visible"
      className="base container">

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              whileHover={{
                scale: 1.1,
                color: '#f8e112',
                originX: 0
              }}
              key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div
          variants={nextVariants}
          className="next">
          <Link to="/toppings">
            <motion.button
              variants={buttonVariants}
              whileHover='hover'
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;