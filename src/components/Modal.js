import React from 'react'
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0
    }
}

const modal = {
    visible: {
        opacity: 1,
        y: '200px',
        transition: {
            type: 'spring', delay: .5
        }
    },
    hidden: {
        y: '-100vh',
        opacity: 0
    }
}

const Modal = ({ showModal, setModal }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div
                    className="backdrop"
                    variants={backdrop}
                    animate="visible"
                    initial="hidden"
                    exit="hidden"
                >
                    <motion.div
                        variants={modal}
                        className='modal'>
                        <p>Want to make another pizza?</p>
                        <Link to="/">
                            <button onClick={() => setModal(false)} >Start Again</button>
                        </Link>
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal
