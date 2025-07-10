import React from 'react'
import './Card.css'
import { motion } from "motion/react"


function Card() {
    const transition = {
        duration: 0.8,
        opacity: 0,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
    }
    return (
        <div>
            <div className="maincatting">
                <motion.div
                    animate={{ y: -0 }}
                    transition={transition} initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <br />
                    <p>Grooming for the Day
                    </p>
                    <span>INTERNATIONAL HAIRSTYLES</span>
                </motion.div>
            </div>
            <section className='section'>
                <motion.div
                    animate={{ y: -0 }}
                    transition={transition} initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <br />
                    <div className="hoverCd">
                        <div className="cardcd">
                            <div className="card" id='card'>

                                <div className="tools">
                                    <div className="circle">
                                        <span className="red box"></span>
                                    </div>
                                    <div className="circle">
                                        <span className="yellow box"></span>
                                    </div>
                                    <div className="circle">
                                        <span className="green box"></span>
                                    </div>
                                </div>
                                <div className="card__content">
                                    <div className="hearCurt">
                                        <p>FORMAL</p>
                                        <span>The pain itself is great, and the growth is great, but at the same time it happens that there is a lot of work and pain. for at least</span><br /><br />
                                        <a href="/" className='thisancor' >Read More</a>
                                    </div>

                                </div>
                                <div className="local">FORMAL</div>
                            </div>
                        </div>
                        <div className="cardcd">

                            <div className="card" id='card2'>

                                <div className="tools">
                                    <div className="circle">
                                        <span className="red box"></span>
                                    </div>
                                    <div className="circle">
                                        <span className="yellow box"></span>
                                    </div>
                                    <div className="circle">
                                        <span className="green box"></span>
                                    </div>
                                </div>
                                <div className="card__content">
                                    <div className="hearCurt">
                                        <p>CASUAL</p>
                                        <span>The pain itself is great, and the growth is great, but at the same time it happens that there is a lot of work and pain. for at least</span><br /><br />
                                        <a href="/" className='thisancor' >Read More</a>
                                    </div>

                                </div>
                                <div className="local">CASUAL</div>
                            </div>
                        </div>
                        <div className="cardcd">

                            <div className="card" id='card3'>

                                <div className="tools">
                                    <div className="circle">
                                        <span className="red box"></span>
                                    </div>
                                    <div className="circle">
                                        <span className="yellow box"></span>
                                    </div>
                                    <div className="circle">
                                        <span className="green box"></span>
                                    </div>
                                </div>
                                <div className="card__content">
                                    <div className="hearCurt">
                                        <p>SPORTS</p>
                                        <span>The pain itself is great, and the growth is great, but at the same time it happens that there is a lot of work and pain. for at least</span><br /><br />
                                        <a href="/" className='thisancor' >Read More</a>
                                    </div>

                                </div>
                                <div className="local">SPORTS</div>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </section>
        </div>
    )
}

export default Card
