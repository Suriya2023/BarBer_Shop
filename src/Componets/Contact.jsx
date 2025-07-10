import React from 'react'
import { motion } from "motion/react"

import './Contact.css'
function Contact() {
    const transition = {
        duration: 0.8,
        opacity: 0,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
    }
    return (
        <div>
            <div className='Contact'>
                <div className="contactustwo">
                    <motion.div
                        animate={{ y: -0 }}
                        transition={transition} initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <div className="contactinner">
                        </div>
                    </motion.div>
                    <div className="contactinner1">
                        <motion.div
                            animate={{ y: -0 }}
                            transition={transition} initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <div className="maincontact">
                                <h2>Make a Booking</h2>
                                <h3>contact  our expert </h3>
                                <p>Lorem ipsum dolor sit amet,adipisicing elit,sed doeiusmod tempor incididunt  ut labore.</p>
                                <form id='fromrequer' action="/">
                                    <input id='fname' type="fName" required placeholder='First Name' />&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input id='fname' type="LName" required placeholder='Last Name' />
                                    <input id='fname' type="email" required name="email" placeholder='Email' />&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input id='fname' type="tel" required name="" placeholder='Phone' />
                                    <br />
                                    <textarea name="" required placeholder='Appointment Preference' id="TextArea"></textarea>
                                    <br />
                                    <button className='BookNow'>Book Now</button>

                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contact
