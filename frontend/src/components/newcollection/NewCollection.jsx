import React from 'react'
import {Link} from 'react-router-dom'
import './kid.css'

const NewCollection = ({newCollection}) => {
  return (
    <>
    <div className='kid'>
       <Link to={`/${newCollection._id}`}><img src={newCollection.image} alt='img'/></Link>
       <div className='ki'>
          <span className='kititle'>{newCollection.title}</span>
          <div  className='kiprice'>
          <span >${newCollection.newprice}</span>
          <span className='kiold'>${newCollection.oldprice}</span>

          </div>
       </div>
    </div>
    </>
  )
}

export default NewCollection