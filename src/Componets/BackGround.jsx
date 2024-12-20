import React from 'react'
import './Background.css'
function BackGround() {
    return (
        <div>



            <div className="cardd">
                <div className="borderr">


                </div>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active 100">
                            <div className="d-block w-50" id='lorem'>
                                <h3>WHAT OUR CLIENT SAY
                                    <br />
                                    india
                                </h3>

                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel repudiandae velit molestiae, autem aspernatur blanditiis eligendi molestias labore sequi, expedita repellat libero itaque corporis hic deserunt quibusdam enim consequatur earum!</div>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Testimonial</h1>
                                <h3>WHAT OUR CLIENT SAY </h3>
                                <br />
                                <p className='dome'></p>
                                {/* <h1>jvasbdjqbswhj</h1> */}
                                <p id='Suraj'>Suraj Rajput <br /><span id='india'>India Gujarat</span></p>
                                <small id='smls'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</small>
                                {/* <p>Some rent for the first slide.</p> */}
                            </div>
                        </div>
                        <div className="carousel-item active 2000">

                            <div className="d-block w-50" id='lorem'>

                                <h3>WHAT OUR CLIENT SAY <br />india</h3> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis laudantium ratione architecto itaque aperiam eaque molestiae deleniti totam commodi ea quas hic, veritatis voluptate pariatur accusantium libero? Incidunt, architecto et.</div>

                            <div className="carousel-caption d-none d-md-block">
                                <h1>Testimonial</h1>
                                <h3>WHAT OUR CLIENT SAY</h3>
                                <br />
                                <p className='dome1' ></p>
                                <p id='Suraj'>Suraj Rajput <br /><span id='india'>India Gujarat</span></p>
                                <small id='smls'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</small>


                                {/* <p>Some representative .</p> */}
                            </div>
                        </div>
                        <div className="carousel-item active 3000">
                            <div className="d-block w-50" id='lorem'>
                                <h3>WHAT OUR CLIENT SAY <br />india</h3>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae sint assumenda neque. Sequi modi qui atque sunt ipsam cum magnam distinctio ad eveniet, natus voluptates, fugiat consequatur nulla laborum.</div>


                            <div className="carousel-caption d-none d-md-block">
                                <h1>Testimonial</h1>
                                <h3>WHAT OUR CLIENT SAY</h3>
                                <br />
                                <p className='dome2' ></p>
                                <p id='Suraj'>Suraj Rajput <br /><span id='india'>India Gujarat</span></p>
                                <small id='smls'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</small>
                                {/* <p>Some representative placeholder content for the third slide.</p> */}
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default BackGround
