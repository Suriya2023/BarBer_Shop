import React from 'react'
import './Gallery.css'
import { motion } from "motion/react"

function Gallery() {
  const transition = {
    duration: 0.8,
    opacity: 0,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }
  return (
    <div>
      <section id='gdflex'>
        <div className="maincatting">

          <motion.div
            animate={{ y: -0 }}
            transition={transition} initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <br />
            <p>Our Gellery
            </p>
            <span> LOOKING A BEAUTYFUL STYLE</span>


          </motion.div>
        </div>
        <motion.div
          animate={{ y: 0 }}
          transition={transition} initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
        <div className="gridegallary">


          


          <div className="glritem" id='myimggrr1'>
          </div>

          <div className="glritem" id='myimggrr2'>
          </div>

          <div className="glritem" id='myimggrr3'>
          </div>

          <div className="glritem" id='myimggrr4'>
          </div>

          <div className="glritem" id='myimggrr5'>
          </div>

          <div className="glritem" id='myimggrr6'>
          </div>

          <div className="glritem" id='myimggrr7'>
          </div>
          <div className="glritem" id='myimggrr88'>
          </div>

          <div className="glritem" id='myimggrr8'>
          </div>
        </div>
        </motion.div>

      </section>
    </div>
  )
}

export default Gallery
