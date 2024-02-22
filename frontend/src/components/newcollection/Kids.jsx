import React from 'react'
import Kid from './Kid'
import {kids} from '../utils/index'
import './Kid.css'

const Kids = () => {
  return (
   <>
   <div className='kids1'>
    <span className='kidstitle'>NEW COLLECTIONS <hr className='kidshr'/></span>
   <div className='kids'>
    {kids.map((kid,i)=>(
      <div key={i}>
         <Kid kid={kid}/>
      </div>
    ))}
   </div>
   </div>
   </>
  )
}

export default Kids