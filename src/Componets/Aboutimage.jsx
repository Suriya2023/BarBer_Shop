import React from 'react'
import './Aboutimage.css'
// import './Nav.css'
import { motion } from "motion/react"

import aboutimage from './Image/About Us.png'
function Aboutimage() {
  const transition = {
    duration: 0.8,
    opacity: 0,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }
  return (
    <div>
      <motion.div
        animate={{ y: -0 }}
        transition={transition} initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="gride">
          <div className="firstimg">
            <img src={aboutimage} alt="" />
          </div>

          <div className="firstimg2">
            <motion.div
              animate={{ y: -0 }}
              transition={transition} initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div>
                <h2>About Us</h2> <br />
                <h3>Hair Styling Stories</h3>
                <p>Great Style. Great Haircuts. Awesome Barbers. At BladeHub Barbershop, we strive to create the traditional barbershop love and feel with the highest level of skill, service and style to keep you looking and feeling your</p>
                <button id='fitbtn'>Read More</button>
              </div>
            </motion.div>

          </div>

        </div>
        {/* second */}
      </motion.div>



    </div>
  )
}

export default Aboutimage
