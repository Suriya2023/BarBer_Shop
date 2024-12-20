import React from 'react'
import './Aboutimage.css'
// import './Nav.css'

import aboutimage from './Image/About Us.png'
function Aboutimage() {
  return (
    <div>
      <div className="gride">
        <div className="firstimg">
          <img src={aboutimage} alt="" />
        </div>
        <div className="firstimg2">
          <div>
            <h2>About Us</h2> <br />
            <h3>Hair Styling Stories</h3>
            <p>Great Style. Great Haircuts. Awesome Barbers. At BladeHub Barbershop, we strive to create the traditional barbershop love and feel with the highest level of skill, service and style to keep you looking and feeling your</p>
            <button id='fitbtn'>Read More</button>
          </div>
        </div>

      </div>
      {/* second */}

     

      
    </div>
  )
}

export default Aboutimage
