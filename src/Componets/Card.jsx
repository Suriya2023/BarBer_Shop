import React from 'react'
import './Card.css'

function Card() {
    return (
        <div>
            <div className="maincatting">
                <br />
                <p>Grooming for the Day
                </p>
                <span>INTERNATIONAL HAIRSTYLES</span>
            </div>
            <section className='section'>
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
            </section>
        </div>
    )
}

export default Card
