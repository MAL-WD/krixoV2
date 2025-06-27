import React from 'react'
import { motion } from 'framer-motion'
import arrow from '../assets/arrowhand.svg'
import { useNavigate } from 'react-router-dom'

function Button() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <motion.button 
      className='cursor-pointer my-4 border-blue bg-blue h-12 w-30 rounded-full my-auto border grid justify-center items-center'
      onClick={handleClick}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0px 0px 8px rgba(0, 0, 255, 0.5)',
        transition: { type: 'spring', stiffness: 400, damping: 10 }
      }}
      whileFocus={{ 
        scale: 1.05,
        boxShadow: '0px 0px 8px rgba(0, 0, 255, 0.7)',
        outlineColor: 'rgba(0, 0, 255, 0.7)',
        outlineWidth: '2px',
        outlineStyle: 'solid',
        outlineOffset: '2px',
        transition: { type: 'spring', stiffness: 400, damping: 10 }
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 1 }}
    >
      <motion.div className="flex items-center justify-center relative">
        <motion.img 
          src={arrow} 
          className='w-8 h-8' 
          alt="Arrow" 
          initial={{ x: 0 }}
          whileHover={{ 
            x: [0, 8, 0],
            transition: { 
              repeat: Infinity,
              repeatType: "loop",
              duration: 1,
              ease: "easeInOut" 
            }
          }}
          whileFocus={{ 
            x: [0, 8, 0],
            transition: { 
              repeat: Infinity,
              repeatType: "loop",
              duration: 1,
              ease: "easeInOut" 
            }
          }}
        />
      </motion.div>
    </motion.button>
  )
}

export default Button