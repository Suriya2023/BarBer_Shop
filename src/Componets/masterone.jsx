import React from 'react'
import './masterone.css'
import svcImg from './Image/svc.png'
import curvImg from './Image/curve-arrow 2.png'
function masterone() {
  return (
    <div>
      <div className="banner-container">
        <div className="banner-image">
          <img src={svcImg} alt="Barber Shop" width="100%" />
        </div>
        <div className="banner-text">
          <h2>Why Choose Us</h2>
          <h1 className='s123'>COMPLETE RELAXATION AT OUR
            BARBERSHOP. </h1>
          <h5>  Grooming services include haircuts, beard trims, shaves, and hand and foot care; wellness services include infrared sauna, a drip spa, and cryotherapy, and performance injections.</h5>
          <div>

            <div> <span><img src={curvImg} alt="" /></span> High-quality services and care.</div>
            <div> <span><img src={curvImg} alt="" /></span> Men's hair coloring & refreshing hair wash.</div>
            <div> <span><img src={curvImg} alt="" /></span> Relaxing head & shoulders massage.</div>
          </div>
          <br />
          <button className="cta-button">Book an Appointment <span class="material-symbols-outlined">
            arrow_outward
          </span> </button>

        </div>
        <br className='asdqwe' /><br className='asdqwe' /><br className='asdqwe' /><br className='asdqwe' />
      </div>

      <div>

      </div>
      <div className="s101">
        <br />
        <div className="banner-container-two">
          <h1>What We Do</h1>
          <div className="s102" id='S102S'>
            <h2>GET FULL RANGE OF PREMIUM
              SERVICES.</h2>
            <h6>There are many variations of passages of Lorem Ipsum available but the majority have <br className='asdqwe' />  randomised words which look even slightly believable.</h6>          </div>
          <br />
        </div>



      </div>
      <div className="carss1">
        <div className="classs1233">
          <div className="carss2">
            <div className="flexxx"><div class="boxesss"></div><div className="texttt"><span>PROFESSIONAL EQUIPMENT &amp; TOOLS</span><p>There are many variations of passages Lorem Ipsu available but themajority a suffered alteratio some form more.</p></div></div>

            <div className="flexxx my-2" ><div class="boxesss"></div><div className="texttt"><span>SHAVING STYLE</span><p>There are many variations of passages Lorem Ipsu available but themajority a suffered alteratio some form more</p></div></div>

            <div className="flexxx my-2"><div class="boxesss"></div><div className="texttt"><span>BARBERSHOP WITH A WIDE RANGE OF SERVICES</span><p>There are many variations of passages Lorem Ipsu available but themajority a suffered alteratio some form more</p></div></div>


            <div className="flexxx "><div class="boxesss"></div><div className="texttt"><span>HAIR STYLE</span><p>There are many variations of passages Lorem Ipsu available but themajority a suffered alteratio some form more</p></div></div>
          </div>
          <div className="carss2 ">
            <div className="flexxx"><div class="boxesss"></div><div className="texttt"><span>HAIR WASH</span><p>There are many variations of passages Lorem Ipsu available but themajority a suffered alteratio some form more</p></div></div>

            <div className="flexxx my-2" ><div class="boxesss"></div><div className="texttt"><span>MEN FACIAL</span><p>There are many variations of passages Lorem Ipsu available but themajority a suffered alteratio some form more</p></div></div>

            <div className="flexxx my-2"><div class="boxesss"></div><div className="texttt"><span>BEARD TRIM</span><p>There are many variations of passages Lorem Ipsu available but themajority a suffered alteratio some form more</p></div></div>


            <div className="flexxx my-2"><div class="boxesss"></div><div className="texttt"><span>OTHER SERVICES</span><p>There are many variations of passages Lorem Ipsu available but themajority a suffered alteratio some form more</p></div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default masterone
