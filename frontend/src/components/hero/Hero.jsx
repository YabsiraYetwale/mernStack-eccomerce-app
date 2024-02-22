import React from 'react'
import './Hero.css'
import hero from '../../assets/w55.png'
const Hero = () => {
  return (
   <>
   <div className='hero'>
    <div className="heroparticles">
       <div className="right">
       <span>NEW ARRIVALS ONLY</span>
        <div className="collection">
            <span>new</span>
            <span>collections</span>
            <span>for everyone</span>
        </div>
        <div className="latest"><span>Latest Collection</span></div>
       </div>
       <div className="left">
        <img src={hero} alt='hero'/>
       </div>
    </div>
   </div>
   </>
  )
}

export default Hero