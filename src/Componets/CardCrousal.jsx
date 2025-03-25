import React from 'react'
import './CardCrousal.css'
import { motion } from "motion/react"

// import ImgsiD from './Components/imgsid'

// import one from './Image/s1.png'
// import two from './Image/s2.png'
// import tyr from './Image/s3.png'
function CardCrousal() {
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
                <header className='crouscard'>
                    <div className="maincrous">
                        <h1>
                            Our Hair Styling Guys
                        </h1>
                        <h3>Meet our team</h3>
                    </div>

                </header>

            </motion.div>


        </div>

    )

}


export default CardCrousal
