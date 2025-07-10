import React from 'react'
import './Trend.css'
import { motion } from "motion/react"


function Trend() {
    const transition = {
        duration: 0.8,
        opacity: 0,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
    }
    return (
        <div>
            <section className='mainBlog'>
                <br />
                <motion.div
                    animate={{ y: -0 }}
                    transition={transition} initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <div className="blog">
                        <h3>Our Blog</h3>
                        <h2>Unpdate the new trend</h2>
                    </div>

                </motion.div>
                <div className="update">

                    <motion.div
                        animate={{ y: -0 }}
                        transition={transition} initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <div className="boxup">
                            <div className="borderrr"></div>
                            <ul>
                                <li className='paddingtop' >
                                    <div>
                                        <button className='hairbtn'>Haircut</button>
                                    </div>
                                </li>
                                <li className='manyare'>
                                    <div className='comments'>
                                        <p>March 5,2024 </p>
                                        <p>0 Comments</p>
                                    </div>
                                    <h3>The 90's are back and We're Okay With Many  More ready Works It</h3>

                                </li>
                            </ul>
                        </div>

                    </motion.div>
                    <div className="boxup2">

                        <motion.div
                            animate={{ y: -0 }}
                            transition={transition} initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <div className='comtwo'>
                                <div>
                                    <ul className='sidebox'>
                                        <li className='boxwidth'></li>&nbsp;&nbsp;&nbsp;
                                        <li className='manyare2'>
                                            <div className='comments2'>
                                                <p>March 5,2024 </p>
                                                <p>0 Comments</p>
                                            </div>
                                            <h3>Men's Fade Haircut - The Tips And Tricks Every Man Should... </h3>
                                        </li>
                                    </ul>
                                </div>
                                <br />
                                <div>
                                    <ul className='sidebox'>
                                        <li className='boxwidth2'></li>&nbsp;&nbsp;&nbsp;
                                        <li className='manyare2'>
                                            <div className='comments2'>
                                                <p>March 5,2024 </p>
                                                <p>0 Comments</p>
                                            </div>
                                            <h3>The Evolution Of The Best Men's Hair Design Trend Today</h3>
                                        </li>
                                    </ul>
                                </div>
                                <br />
                                <div>
                                    <ul className='sidebox'>
                                        <li className='boxwidth3'></li>&nbsp;&nbsp;&nbsp;
                                        <li className='manyare2'>
                                            <div className='comments2'>
                                                <p>March 5,2024 </p>
                                                <p>0 Comments</p>
                                            </div>
                                            <h3>Leaar How To Communicate Withe Your Item To Customer...</h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Trend
