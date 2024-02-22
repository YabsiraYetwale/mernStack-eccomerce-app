import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <>
       <div className="letter">
       <div className="footerparticles">
        <div className="fright">
         <div className="fexclusive">
             <span>Get Exclusive Offers On Your Email</span>
         </div>
         <span  className="fbest" >Subscribe to our newsletter and stay updated.</span>
         <div className="emailcheck">
           <input type="email" placeholder="Your Email" className="email"/>
           <div className="fcheck"><span>Subscribe</span></div>
          </div>
        </div>
        </div>
       </div>
    </>
  )
}

export default NewsLetter