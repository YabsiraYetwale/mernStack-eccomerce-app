import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material'
import { fetchProducts } from '../../actions/product'
import { useEffect } from 'react'
import NewCollection from './NewCollection'
import './Kid.css'

const NewCollections = () => {
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
   <div className='kids1'>
    <span className='kidstitle'>NEW COLLECTIONS <hr className='kidshr'/></span>
   <div className='kids'>
    {products.map((newCollection,i)=>(
      <div key={i}>
         <NewCollection newCollection={newCollection}/>
      </div>
    ))}
   </div>
   </div>
   </>
  )
}

export default NewCollections