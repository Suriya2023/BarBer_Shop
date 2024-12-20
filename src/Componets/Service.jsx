import React from 'react'
import './service.css'
import Serviceimg from './Image/Services.png'
// import './abo.css'
function Service() {
  return (
    <div>
      <div className="mainservicegride">
        <div className="firstsec">

          <div className='thisis'>
            <h1>What We Do</h1>
            <h2>get full range of premium   service.</h2>
            <p>There are many variations of passages of Lorem Ipsum available but the majority have randomised words which look even slightly believable</p>
          </div>
          <div className="flex">
            <div className="boxes"></div>
            <div className="text">
              <span>PROFESSIONAL EQUIPMENT & TOOLS</span>
              <p>There are many variations of passages Lorem Ipsu available but themajority a suffered alteratio some form more</p>
            </div>
          </div>
          <br />
          <div className="flex">
            <div className="boxes"></div>
            <div className="text">
            <span>SHAVING STYLE</span>
            <p>There are many variations of passages Lorem Ipsu available but themajority a suffered alteratio some form more</p>
            </div>
          </div>
          <br />
          <div className="flex">
            <div className="boxes"></div>
            <div className="text">
            <span> BARBERSHOP WITH A WIDE RANGE OF SERVICES</span>
            <p>There are many variations of passages Lorem Ipsu available but themajority a suffered alteratio some form more</p>
            </div>
          </div>
        </div>
        <div className="firstsec">
          <img src={Serviceimg} alt="" />
        </div>
        <br /><br /><br />
      </div>
    </div>
  )
}

export default Service
