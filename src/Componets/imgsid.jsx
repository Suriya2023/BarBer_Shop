import React from 'react'
import './CardCrousal.css'
import { motion } from "motion/react"


export default function imgsid() {
    const transition = {
        duration: 0.8,
        opacity: 0,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
    }
    return (
        <div>
            <header className='imgsid'>
                <div className='thisul'>
                    {/* <br /><br />/ */}

                    <div>

                        <motion.div
                            animate={{ y: -0 }}
                            transition={transition} initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <div className="hover">



                                <div className='mastercard'>
                                    <br />



                                    <div className="card">
                                        <div className="border"></div>
                                        <div className="content">
                                            <div className="logo">
                                                <div className="logo1">
                                                    {/* <span id="logo-main">MEET OUR TEAMS
                                             </span> */}
                                                </div>
                                                <div className="logo2">
                                                    <span id="logo-second"></span>
                                                </div>
                                                <span className="trail"></span>
                                            </div>
                                            <span className="logo-bottom-text"></span>
                                        </div>
                                        <span className="bottom-text , trail">JOHN JACOBS</span>
                                    </div>
                                </div>

                                <div className='mastercard'>
                                    <br />
                                    {/* <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">


                                            <div className="carousel-item  active ">
                                                <img  id='qwe' src={two} className="d-block " alt="..." />
                                            </div>
                                            <div className="carousel-item ">
                                                <img  id='qwe' src={tyr} className="d-block " alt="..." />
                                            </div>

                                            <div className="carousel-item ">
                                                <img  id='qwe' src={one} className="d-block w-100 " alt="..." />
                                            </div>
                                        </div>

                                        
                                    
                                    </div> */}
                                    <div className="card" id='imgcd2'>
                                        <div className="border"></div>
                                        <div className="content">
                                            <div className="logo">
                                                <div className="logo1">
                                                    {/* <span id="logo-main">MEET OUR TEAMS
                                             </span> */}
                                                </div>
                                                <div className="logo2">
                                                    <span id="logo-second"></span>
                                                </div>
                                                <span className="trail"></span>
                                            </div>
                                            <span className="logo-bottom-text"></span>
                                        </div>
                                        <span className="bottom-text , trail">HARRY GARD</span>
                                    </div>
                                </div>

                                <div className='mastercard'>
                                    <br />
                                    {/* <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">


                                        <div className="carousel-item  active ">
                                            <img id='qwe' src={two} className="d-block " alt="..." />
                                        </div>
                                        <div className="carousel-item ">
                                            <img id='qwe' src={tyr} className="d-block " alt="..." />
                                        </div>
                                        <div className="carousel-item ">
                                            <img id='qwe' src={one} className="d-block " alt="..." />
                                        </div>
                                    </div>

                                </div> */}

                                    <div className="card" id='imgcd1'>
                                        <div className="border"></div>
                                        <div className="content">
                                            <div className="logo">
                                                <div className="logo1">
                                                    {/* <span id="logo-main">MEET OUR TEAMS
                                             </span> */}
                                                </div>
                                                <div className="logo2">
                                                    <span id="logo-second"></span>
                                                </div>
                                                <span className="trail"></span>
                                            </div>
                                            <span className="logo-bottom-text"></span>
                                        </div>
                                        <span className="bottom-text , trail">PETER TAYLOR</span>
                                    </div>
                                </div>



                            </div>
                        </motion.div>

                    </div>
                    <br /><br />

                </div>
            </header>

        </div>
    )
}
