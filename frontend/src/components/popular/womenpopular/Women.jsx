import { useDispatch, useSelector } from 'react-redux'
import { Box, CircularProgress, Typography } from '@mui/material'
import { fetchProducts } from '../../../actions/product'
import { useEffect } from 'react'
import Woman from './Woman'

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
   <Box sx={{ display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    gap:'40px',}}>
    <Box sx={{  fontSize:'40px',
    fontWeight:'bold', "@media (max-width:620px)":{
                flexDirection:'column-reverse',fontSize:'30px',}}} >POPULAR  IN WOMEN <hr className='wohr'/></Box>
   <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:4}} >
    {products.map((woman,i)=>(
      <Box key={i}>
         <Woman woman={woman}/>
      </Box>
    ))}
   </Box>
   </Box>
   </>
  )
}

export default Women