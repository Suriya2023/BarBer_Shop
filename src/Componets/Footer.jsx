import React, { useState } from 'react'
import './Footer.css'
import { motion } from "motion/react"

import loGoFooter from './Image/logo (1).png'
function Footer() {
    const transition = {
        duration: 0.8,
        opacity: 0,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
    }

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "ce09718f-b83a-48ff-8606-09d255d3e3c3");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div>
            <div className="footer">
                <div className="footermain">
                    <motion.div
                        animate={{ y: -0 }}
                        transition={transition} initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <div className="footermain1">
                            <div className='footerul' id='foot'>
                                <div type='none' id='fimg' >
                                    <img src={loGoFooter} alt="" />
                                </div>
                                <div className='fthrrr' />

                                {/* <hr /> */}
                                <div type='none' ><i className="fa-solid fa-location-dot" style={{ color: "#63E6BE" }}></i>&nbsp;1235, Air Mall, Busy Commercial Street, Big City, India - 4215</div>
                                <div type='none' ><i className="fa-solid fa-envelope" style={{ color: " #63E6BE" }}></i> &nbsp;rajputsuraj@gmail.com</div>
                                <div type='none' ><i className="fa-solid fa-phone" style={{ color: "#63E6BE" }}></i>&nbsp; +91 9510190352</div>
                            </div>


                        </div>

                    </motion.div>
                    <div className="footermain2">
                        <motion.div
                            animate={{ y: -0 }}
                            transition={transition} initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <div className='footerul' id='foot' >
                                <div type='none' className='mufth4' >
                                    <h4>Working Hour</h4>
                                </div>
                                <div className='fthr' />
                                <div type='none' >Mon-Fri : 10:00 - 9:00</div>
                                <div type='none' >Saturday : 10:00 - 8:00</div>
                                <div type='none' >Sunday : Closed</div>
                                <div type='none' ><i className="fa-brands fa-whatsapp"></i> &nbsp; <i className="fa-brands fa-facebook"></i>  &nbsp; <i className="fa-brands fa-instagram"></i> &nbsp; <i className="fa-brands fa-twitter"></i>  &nbsp; <i className="fa-brands fa-pinterest"></i></div>
                            </div>

                        </motion.div>
                    </div>
                    <div className="footermain3">
                        <motion.div
                            animate={{ y: -0 }}
                            transition={transition} initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <div className='footerul' id='foot'>
                                <div type='none' className='mufth4' ><h4>Links</h4></div>
                                <div className='fthrr' />
                                <div type='none' >Home</div>
                                <div type='none' >Services</div>
                                <div type='none' >Blog</div>
                                <div type='none' >Contact Page</div>
                                {/* <li type='none' >Terms & Conditions</li> */}
                            </div>

                        </motion.div>
                    </div>
                    <div className="footermain4">
                        <motion.div
                            animate={{ y: -0 }}
                            transition={transition} initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <div className='footerul' id='foot'>
                                <div type='none' className='mufth4'><h4>Feed Back</h4></div>
                                <div className='fthhr' />
                                <form type='none'
                                    onSubmit={onSubmit}>
                                    <div className='textareaft' >
                                        <input type="text" name="name" required placeholder='Enetr Your name' />
                                        {/* <br /><br /> */}
                                        {/* <button type='submit' className='submit'>Submit</button> */}
                                    </div>
                                    <div type='none'>    <button type='submit' className='submit'>Submit</button></div>
                                </form>
                                {/* <li type='none' ><i className="fa-solid fa-envelope"></i> </li> */}
                                <div className='fthrrr' />


                            </div>

                        </motion.div>



                    </div>


                </div>
                <div className="copy">
                    <motion.div
                        animate={{ y: -0 }}
                        transition={transition} initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <div className="borrderr">
                            <div className='coppyright'>
                                <h4>Copyright © 2024 Barber Design Theme. All Rights Reserved.</h4>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>


        </div>
    )
}

export default Footer
