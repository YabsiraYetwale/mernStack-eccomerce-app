import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material'
import { fetchProducts } from '../../../actions/product'
import { useEffect } from 'react'
import Woman from './Woman'

import './Woman.css'

const Women = () => {
  const {products,isLoading}=useSelector(state=>state.products)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  },[dispatch])
  if (!products) {
    return(null)
  }
  if (isLoading) {
    return('Loading ...')
  }
  return (
   <>
   <div className='women1'>
    <span className='womentitle'>POPULAR  IN WOMEN <hr className='wohr'/></span>
   <div className='women'>
    {products.map((woman,i)=>(
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