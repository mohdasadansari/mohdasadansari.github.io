import React from 'react'
import { motion } from 'framer-motion'
import "./MyPlatform.css"

const MyPlatform = ({img, name, link, delay}) => {
  return (
    <motion.a 
      href={link} 
      target='_blank' 
      rel='noopener noreferrer'
      className='platform-link'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay || 0 }}
    >
      <div className='platforms glass-card tilt-card'>
        <img src={img} alt={name}></img>
        <h2>{name}</h2>
      </div>
    </motion.a>
  )
}

export default MyPlatform