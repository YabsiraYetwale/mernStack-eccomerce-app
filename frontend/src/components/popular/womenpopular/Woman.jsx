import React from 'react'
import './Woman.css'
import {Link} from 'react-router-dom'
const Woman = ({woman}) => {
  return (
    <>
   {woman.category === "women" && <div className='woman'>
       <Link to={`/${woman._id}`}><img src={woman.image} alt='img'/></Link>
       <div className='wo'>
          <span className='title'>{woman.title}</span>
          <div  className='woprice'>
          <span >${woman.newprice}</span>
          <span className='old'>${woman.oldprice}</span>

          </div>
       </div>
    </div>}
    </>
  )
}

export default Woman