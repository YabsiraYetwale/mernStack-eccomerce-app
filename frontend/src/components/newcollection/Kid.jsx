import React from 'react'
import {Link} from 'react-router-dom'
import './kid.css'

const Kid = ({kid}) => {
  return (
    <>
    <div className='kid'>
       <Link to={`/${kid._id}`}><img src={kid.image} alt='img'/></Link>
       <div className='ki'>
          <span className='kititle'>{kid.title}</span>
          <div  className='kiprice'>
          <span >${kid.newprice}</span>
          <span className='kiold'>${kid.oldprice}</span>

          </div>
       </div>
    </div>
    </>
  )
}

export default Kid