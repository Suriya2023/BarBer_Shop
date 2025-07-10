import React from 'react'
import './aboutcard.css'
import Footer from './Footer'

import So1 from './Image/s101 (1).png'
import So2 from './Image/s101 (2).png'
import So3 from './Image/s101 (3).png'


import Ab1 from './Image/ab1 (1).png'
import Ab2 from './Image/ab1 (2).png'
import Ab3 from './Image/ab1 (3).png'
function aboutcard() {
    return (
        <div className='aqaqaswsaq'>
            <div className='awssqqsassq'>
                <div className="griddd">
                    <div className="carddd">
                        <img src={So1} />
                    </div>
                    <div className="carddd">

                        <img src={So2} />
                    </div>
                    <div className="carddd">
                        <img src={So3} >
                        </img>


                    </div>

                </div>

            </div>
            <div className="s101">
                <div className="banner-container-two">
                    <h1>Choose Your Best</h1>
                    <div className="s102" id='S102S'>
                        <h2>EXPLORE OUROPTIMAL PRICING PLANS.</h2>
                        <h6>There are many variations of passages of Lorem Ipsum available but the majority have randomised words which look even slightly believable.</h6>          </div>
                    <br />
                </div>



            </div>

            <div class="ggrid">
                <div class="ccard">
                    <img src={Ab1} alt="" />
                    <div className='stander'>
                        <p>STANDARD</p>
                        <h4>$60.00</h4>
                        <span>Hair Wash + <br /> Beard Trimming + <br />  Classic Haircut + </span><br />
                        <button className="cta-buutton">Choose a Plan <span class="material-symbols-outlined">
                            arrow_outward
                        </span> </button>
                    </div>
                </div>
                <div class="ccard">
                    <img src={Ab2} alt="" />
                    <div className='stander'>
                        <p>OPTIMAL</p>
                        <h4>$90.00</h4>
                        <span>Hair Wash + <br /> Razor Beard Trimming ++ <br />  Royal Haircut + </span><br />
                        <button className="cta-buutton">Choose a Plan <span class="material-symbols-outlined">
                            arrow_outward
                        </span> </button>
                    </div>
                </div>
                <div class="ccard">
                    <img src={Ab3} alt="" />
                    <div className='stander'>
                        <p>MOBILE PREMIUM</p>
                        <h4>$150.00</h4>
                        <span>Mobile Barber +  <br /> All Type of Haircut + <br />  All Type of Trimming + </span><br />
                        <button className="cta-buutton">Choose a Plan <span class="material-symbols-outlined">
                            arrow_outward
                        </span> </button>
                    </div>
                </div>
            </div>

            <div className="containnner">
                <div className="imaaage-card">
                    <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.analarmclock.com"></a><br /><a href="https://www.onclock.net"></a><br /><a href="https://www.ongooglemaps.com">google satellite maps zoom</a></div></div>
                </div>
                <div className="forrrm-card">
                    <h3>Our Booking</h3>
                    <h2>Book an Appointment</h2>
                    <p>Lorem ipsum dolor sit amet, adipisicing elit, sed doeiusmod tempor incididunt ut labore.</p><br />
                    <div >
                        <input type="text" className='alalalalala' placeholder="Name" />&nbsp;&nbsp;&nbsp;
                        <input type="text" className='alalalalala' placeholder="Last Name" /><br />
                        <br />
                        <input type="text" className='alalalalala' placeholder="Email" />&nbsp;&nbsp;&nbsp;
                        <input type="tel" className='alalalalala' placeholder="Phone" />
                        <br /><br />
                        <textarea id='mytextarea' name="Appointment Preference" placeholder='Appointment Preference' ></textarea><br />
                        <br />
                        <button className='booknowbtn'>Book Now</button>


                    </div>
                </div>
            </div>
            

            <Footer/>

        </div>
    )
}

export default aboutcard
