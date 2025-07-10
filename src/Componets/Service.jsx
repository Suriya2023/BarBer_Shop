import React from 'react'
import './service.css'
import Serviceimg from './Image/Services.png'
import { motion } from "motion/react"

// import './abo.css'
function Service() {
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
        <div className="mainservicegride">
          <motion.div
            animate={{ y: -0 }}
            transition={transition} initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >

            <div className="firstsec">


              <div className='thisis'>

                <h1>What We Do</h1>
                <h2>get full range of premium   service.</h2>
                <p>There are many variations of passages of Lorem Ipsum available but the majority have randomised words which look even slightly believable</p>
              </div>
              <div className="flex">
                <div className="boxes"></div>
                <div className="text">
                  <span>PROFESSIONAL EQUIPMENT & TOOLS</span>
                  <p>There are many variations of passages Lorem Ipsu available but themajority a suffered alteratio some form more</p>
                </div>
              </div>
              <br />
              <div className="flex">
                <div className="boxes"></div>
                <div className="text">
                  <span>SHAVING STYLE</span>
                  <p>There are many variations of passages Lorem Ipsu available but themajority a suffered alteratio some form more</p>
                </div>
              </div>
              <br />
              <div className="flex">
                <div className="boxes"></div>
                <div className="text">
                  <span> BARBERSHOP WITH A WIDE RANGE OF SERVICES</span>
                  <p>There are many variations of passages Lorem Ipsu available but themajority a suffered alteratio some form more</p>
                </div>
              </div>
            </div>

          </motion.div>

          <motion.div
            animate={{ y: 0 }}
            transition={transition} initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="firstsec">
              <img src={Serviceimg} alt="" />
            </div>

          </motion.div>
          <br /><br /><br />
        </div>
      </motion.div>
    </div>
  )
}

export default Service
