import React from 'react'
import { motion } from 'framer-motion'

const Reveal = ({children, delay = 0, y = 40, duration = 1.5}) => {
  return (
    <motion.div initial={{opacity: 0, y}} whileInView={{opacity: 1, y: 0}} transition={{duration, delay, ease:[0.25, 0.8, 0.25, 1]}} viewport={{once: true, amount: 0.2}}>
        {children}
    </motion.div>
  )
}

export default Reveal