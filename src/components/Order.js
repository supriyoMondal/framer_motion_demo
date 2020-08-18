import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'

const containerVariants = {
  hidden: {
    x: '100vw',
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring', when: 'beforeChildren', mass: 0.4, damping: 10,
      staggerChildren: 0.4
    }
  }
}
const childVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}
const Order = ({ pizza, setModal }) => {

  useEffect(() => {
    setTimeout(() => setModal(true), 4000)
  }, [])

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate="visible"
      className="container order">
      <h2>
        {'Thank you for your order :)'}
      </h2>

      <motion.p
        variants={childVariant}
      >You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div
        variants={childVariant}>
        {pizza.toppings.map(topping =>
          <motion.div key={topping}>{topping}</motion.div>)
        }
      </motion.div>


    </motion.div>
  )
}

export default Order;