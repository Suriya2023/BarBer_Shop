import React from 'react'
import './C1.css'
import C1mail from './Image/C1mail (1).png'
import C1mail2 from './Image/C1mail (2).png'
import C1mail3 from './Image/C1mail (3).png'
import C12 from './Image/C12.png'
function C1() {
    return (
        <div className='containnnneritoom'>
            <div className="contaiiner">
                <div className="brannnch">
                    <h2>Get In Touch</h2>
                    <h3>Where To Find Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim minim veniam.</p>
                    <div className='addflex'>
                        <div className="addresss">
                            <h2>Branch # 2</h2>
                            <div></div>

                            <p> <img src={C1mail3} alt="" /> 1235, Air Mall, Busy Commercial Street, Big City,  India - 4215</p>
                            <p><img src={C1mail2} alt="" /> Suraj123@gmail.comm</p>
                            <p><img src={C1mail} alt="" />  +91 9510190352</p>
                        </div>
                        <div className="addresss">
                            <h2>Branch # 2</h2>
                            <div></div>
                            <p> <img src={C1mail3} alt="" /> 1235, Air Mall, Busy Commercial Street, Big City,India - 4215</p>
                            <p><img src={C1mail2} alt="" /> Suraj123@gmail.comm</p>
                            <p><img src={C1mail} alt="" />  +91 9510190352</p>
                        </div>

                    </div>
                </div>
                <div className="contactiimage">
                    <img src={C12} alt="" />
                </div>
            </div>
            <div className="Contactinfon">
                <div className="nordcon">
                    <h2>Contact Us</h2>
                    <h1>How Can We Help You?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim minim veniam.</p>
                </div>

                <div className="nordconn">

                    <div className="malsk">
                        <div id='gthght'>
                            <input type="text" placeholder='Your Name' name="" id="" /><br />
                            <input type="Tel" placeholder='Your Phone' name="" id="" /><br />

                        </div>

                        <div id='gthght'>
                            <input type="Email" placeholder='Your  Email ' name="" id="" /><br />

                            <input type="text" placeholder='Subject' name="" id="" /><br />
                        </div>
                    </div>
                    <textarea name="" placeholder='Your Comment' id="Comment"></textarea><br />
                    <button id='sendbtn'>Send Message <span class="material-symbols-outlined">
arrow_outward
</span></button>
                </div>
            </div>
        </div>
    )
}

export default C1
