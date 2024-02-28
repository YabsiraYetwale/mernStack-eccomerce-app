import { useDispatch, useSelector } from 'react-redux'
import { Box, CardMedia, CircularProgress, Divider, Typography } from '@mui/material'
import { deleteProducts, fetchProducts } from '../actions/product'
import { useEffect } from 'react'
import {Delete} from '@mui/icons-material'
import { img_url } from '../api'

const ListProduct = () => {
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
    justifyContent:' space-around',
    flexDirection:' column',
    padding:'140px 10px 140px 10px',
    gap:' 50px',}}>
    <Box sx={{display:'flex',
    flexDirection:' column',
    gap:' 10px',
    color:'rgb(112, 108, 108)',
    fontWeight:' bolder',}}>
      <Box sx={{ position:' relative',
    display:'flex',
    justifyContent:' space-around',
    gap:'10px',
    padding:'10px 10px 10px 10px',
    width: '90%',
    color:'rgb(109, 99, 99)',
    fontWeight:' bolder',}}>
        <Box sx={{  display:'flex',
    justifyContent:' space-around',
    gap:'65px',}}>
        <Typography>Products</Typography>
        <Typography sx={{width: '230px',display:{xs:'none',sm:'none',md:'block'}}}>Title</Typography>
        </Box>
        <Typography sx={{display:{xs:'none',sm:'none',md:'block'}}}>Old Price</Typography>
        <Typography>New Price</Typography>
        <Typography>Category</Typography>
        <Typography>Remove</Typography>
      </Box>
      <Box sx={{display:'flex',
    flexDirection:' column',
    paddingLeft:'60px',
    justifyContent:' space-around',
    gap:' 5px',}}>
        {products.map((product,i)=>(
          <Box key={i} sx={{display:'flex',
          flexDirection:' column',
          justifyContent:' space-around',
          gap:' 5px',}}>
            <Divider sx={{width: '85%',
            position:"relative",
            "@media(max-width:800px)":{
              left:'-40px',
              width:"100%",
            } 
        }}/>
            <Box sx={{display:'flex',
    justifyContent:' space-around',
    width:'90%',
    gap:' 10px',
    marginLeft:'-30px',
    }}>
            <Box sx={{display:'flex',
    justifyContent:' space-around',
    gap:'50px',}}>
            <CardMedia image={`${img_url}${product.image}`} alt="img" sx={{
                 position:' relative',
                 left:' -20px',
                 width:'40px',
                 height:' 40px',
            }} />
            <Typography sx={{width: '230px',display:{xs:'none',sm:'none',md:'block'}}}>{product.title}</Typography>
            </Box>
            <Typography sx={{display:{xs:'none',sm:'none',md:'block'}}}>${product.oldPrice}</Typography>
             <Typography >${product.newPrice}</Typography>
             <Typography >{product.category}</Typography>
             <Typography sx={{color:' red',
    cursor:' pointer',}} onClick={()=>dispatch(deleteProducts(product._id))}><Delete/></Typography>
            </Box>
          </Box>
        ))}
        <Divider sx={{width: '85%',
        position:"relative",
        "@media(max-width:800px)":{
          left:'-40px',
          width:"100%",
        } 
    }}/>
      </Box>
    </Box>
    <Box sx={{ display:'grid',
    gridTemplateColumns:' 1fr 1fr',
    paddingLeft:' 70px',}}>
      <Box sx={{  display:'flex',
    flexDirection:' column',
    justifyContent:'space-around',
    gap:'10px',}}>
        <Box sx={{fontSize:' 25px',
    fontWeight:' bolder',}}>Totals</Box>
         <Box sx={{display:'flex',
    flexDirection:' column',
    justifyContent:'space-around',
    gap:'5px',
    color:'#565656',}}>
         <Box>
         <Box sx={{ display:'flex',
    justifyContent:'space-between',
    gap:'20px',
    color:'#565656',
      fontWeight: 'bolder',
    fontSize: '14px',}}>
           <Typography>Men</Typography>
           <Typography>6</Typography>
         </Box>
         <Divider/>
         </Box>
         <Box>
         <Box sx={{ display:'flex',
    justifyContent:'space-between',
    gap:'20px',
    color:'#565656',
      fontWeight: 'bolder',
    fontSize: '14px',}}>
           <Typography>Women</Typography>
           <Typography>10</Typography>
         </Box>
         <Divider/>
         </Box>
         <Box >
         <Box sx={{ display:'flex',
    justifyContent:'space-between',
    gap:'20px',
    color:'#565656',
      fontWeight: 'bolder',
    fontSize: '14px',}}>
           <Typography>Kids</Typography>
           <Typography>8</Typography>
         </Box>
         <Divider/>
         </Box>
         <Box sx={{ display:'flex',
    justifyContent:'space-between',
    gap:'20px',
    color:'#565656',
      fontWeight: 'bolder',
    fontSize: '20px',}}>
           <Typography>Total</Typography>
           <Typography>{products.length}</Typography>
         </Box>
       </Box>
      </Box>
    </Box>
    </Box>
    </>  )
}

export default ListProduct