import React from 'react'
import Woman from './Woman'
import {women} from '../../utils/index'

import './Woman.css'

const Women = () => {
  return (
   <>
   <div className='women1'>
    <span className='womentitle'>POPULAR  IN WOMEN <hr className='wohr'/></span>
   <div className='women'>
    {women.map((woman,i)=>(
      <div key={i}>
         <Woman woman={woman}/>
      </div>
    ))}
   </div>
   </div>
   </>
  )
}

export default Women