import React from 'react'
import { motion } from "motion/react"

import './SubCd.css'
function SubCd() {
    const transition = {
        duration: 0.8,
        opacity: 0,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
    }
    return (
        <div>
            <section className='mastersection'>

                <motion.div
                    animate={{ y: -0 }}
                    transition={transition} initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <div className="containerh1">
                        <h2>Best Price Chart</h2>
                        <h3>Know our rates</h3>
                    </div>

                </motion.div>


                <div className="maiknmaster">

                    <motion.div
                        animate={{ y: -0 }}
                        transition={transition} initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <div className="containermast1">
                            <ul className="classic">
                                <li className="classicimg">
                                    <div className="classic1">
                                        <h3>Classic Haircut</h3>
                                        <p>$30</p>
                                    </div>
                                    <p>we work every day without  days  off  and  lunch breaks</p>
                                    <div className='hrrr'></div>

                                </li>
                                <br /><br />
                                <li className="classicimg">
                                    <div className="classic1">
                                        <h3>Royal Haircut</h3>
                                        <p>$50</p>
                                    </div>
                                    <p>we work every day without  days  off  and  lunch breaks</p>
                                    <div className='hrrr'></div>

                                </li>

                                <br /><br />
                                <li className="classicimg">
                                    <div className="classic1">
                                        <h3>Children's Haircut</h3>
                                        <p>$20</p>
                                    </div>
                                    <p>we work every day without  days  off  and  lunch breaks</p>
                                    <div className='hrrr'></div>

                                </li>

                                <br /><br />
                                <li className="classicimg">
                                    <div className="classic1">
                                        <h3>Beard Trimming</h3>
                                        <p>$25</p>
                                    </div>
                                    <p>we work every day without  days  off  and  lunch breaks</p>
                                    <div className='hrrr'></div>

                                </li>

                                <br /><br />
                                <li className="classicimg">
                                    <div className="classic1">
                                        <h3>Machine Haircut</h3>
                                        <p>$39</p>
                                    </div>
                                    <p>we work every day without  days  off  and  lunch breaks</p>
                                    <div className='hrrr'></div>

                                </li>




                            </ul>


                        </div>


                    </motion.div>
                    <div className="containermaster2">

                        <motion.div
                            animate={{ y: -0 }}
                            transition={transition} initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <ul className="classic">
                                <li className="classicimg">
                                    <div className="classic1">
                                        <h3>Gel Shaving</h3>
                                        <p>$50</p>
                                    </div>
                                    <p>we work every day without  days  off  and  lunch breaks</p>
                                    <div className='hrrr'></div>

                                </li>
                                <br /><br />
                                <li className="classicimg">
                                    <div className="classic1">
                                        <h3>Hair Trimming</h3>
                                        <p>$35</p>
                                    </div>
                                    <p>we work every day without  days  off  and  lunch breaks</p>
                                    <div className='hrrr'></div>

                                </li>

                                <br /><br />
                                <li className="classicimg">
                                    <div className="classic1">
                                        <h3>Facial Massage</h3>
                                        <p>$40</p>
                                    </div>
                                    <p>we work every day without  days  off  and  lunch breaks</p>
                                    <div className='hrrr'></div>

                                </li>

                                <br /><br />
                                <li className="classicimg">
                                    <div className="classic1">
                                        <h3>Head Massage</h3>
                                        <p>$50</p>
                                    </div>
                                    <p>we work every day without  days  off  and  lunch breaks</p>
                                    <div className='hrrr'></div>

                                </li>

                                <br /><br />
                                <li className="classicimg">
                                    <div className="classic1">
                                        <h3>Colouring</h3>
                                        <p>$50</p>
                                    </div>
                                    <p>we work every day without  days  off  and  lunch breaks</p>
                                    <div className='hrrr'></div>

                                </li>




                            </ul>

                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default SubCd
