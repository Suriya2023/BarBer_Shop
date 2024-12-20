import React from 'react'
import './SubContent.css'
import PalyBtn from './Image/play-button 1.png'
function SubContent() {
    return (
        <div>
            <div className="subContent">
                <div className="subContenCenter">

                    <h1>Know How</h1>
                    <h3>Learn about our proccess</h3>
                    <p>It is very important to treat the pain, and it will follow the growth of the patient, but it happens at such a time that he has to work with some great pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with him, let him blame him for pleasure, let him flee from the pain, and let him not be spared. Unless they are blinded by lust, they will not come out.</p>
                    <div className='playbtn'>
                        <img className='playbtn' src={PalyBtn} alt="PalyBtn" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubContent
