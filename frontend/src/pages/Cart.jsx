import { Box, CardMedia, Divider, TextField, Typography } from '@mui/material'
import React from 'react'
import { kid } from '../components/utils'


const Cart = () => {
  return (
    <>
    <Box sx={{ display:'flex',
    justifyContent:' space-around',
    flexDirection:' column',
    padding:'120px 10px 140px 10px',
    gap:' 50px',}}>
    <Box sx={{ display:'flex',
    flexDirection:' column',
    gap:' 10px',
    color:'rgb(112, 108, 108)',
    fontWeight:' bolder',}} >
      <Box sx={{ position:' relative',
    display:'flex',
    justifyContent:' space-around',
    gap:'10px',
    color:'rgb(109, 99, 99)',
    fontWeight:' bolder',}}>
        <Box sx={{display:'flex',
    justifyContent:' space-around',
    gap:'65px',}} >
        <Typography>Product</Typography>
        <Typography sx={{width:' 230px',display:{xs:'none',md:'block'}}} >Title</Typography>
        </Box>
        <Typography sx={{display:{xs:'none',md:'block'}}}>Price</Typography>
        <Typography>Quantity</Typography>
        <Typography>Total</Typography>
        <Typography>Remove</Typography>
      </Box>
      <Box sx={{display:'flex',
    flexDirection:' column',
    justifyContent:' space-around',
    gap:' 5px',}}>
        {kid.map((ki,i)=>(
          <Box sx={{
          flexDirection:' column',
          justifyContent:' space-around',
          gap:' 5px',}} key={i}>
            <Divider sx={{width:' 90%',
          position:' relative',
          left:' 65px',display:'flex',
          "@media(max-width:800px)":{
            left:'0px',
            width:"100%",
          }          }}/>
            <Box sx={{display:'flex',
    justifyContent:' space-around',
    gap:' 10px',paddingTop:'10px',
  }}>
            <Box sx={{ display:'flex',
    justifyContent:' space-around',
    gap:'50px',}}>
            <CardMedia image={ki.image} alt="img" sx={{position:' relative',
    left:' -10px',
    width:'40px',
    height:' 40px',}} />
            <Typography sx={{width:' 230px',display:{xs:'none',md:'block'}}}>{ki.title}</Typography>
            </Box>
             <Typography sx={{display:{xs:'none',md:'block'}}}>${ki.newprice}</Typography>
             <Box sx={{display:' flex',
    justifyContent:' center',
    alignItems:' center',
    border:' solid thin rgba(220, 220,220, 0.8)',
    padding:'3px 15px',
    height:' 30px',}}>2</Box>
             <Typography>${ki.newprice}</Typography>
             <Typography>X</Typography>
            </Box>
          </Box>
        ))}
        <Divider sx={{width:' 90%',
    position:' relative',
    left:' 65px',"@media(max-width:800px)":{
      left:'0px',
      width:"100%",
    } }}/>
      </Box>
    </Box>
    <Box sx={{display:'grid',
    gridTemplateColumns:' 1fr 0.25fr',
    paddingLeft:' 70px',}} >
      <Box sx={{display:'flex',
    flexDirection:' column',
    justifyContent:'space-around',
    gap:'10px',}} >
        <Box sx={{fontSize:' 25px',
    fontWeight:' bolder',}}>Cart Totals</Box>
        <Box sx={{  display:'flex',
    flexDirection:' column',
    justifyContent:'space-around',
    gap:'5px',
    color:'#565656',}}>
          <Box>
          <Box sx={{ display:'flex',
    justifyContent:'space-between',
    gap:'20px',
    color:'#565656',
    fontWeight:' bolder',
    fontSize:' 14px',}}>
            <Typography>Subtotal</Typography>
            <Typography>$301</Typography>
          </Box>
          <Divider />
          </Box>
          <Box sx={{fontWeight:' bolder',
    fontSize:' 20px',}}>
          <Box sx={{ display:'flex',
    justifyContent:'space-between',
    gap:'20px',
    color:'#565656',
    fontWeight:' bolder',
    fontSize:' 14px',}}>
            <Typography>Shipping Fee</Typography>
            <Typography>Free</Typography>
          </Box>
          <Divider />
          </Box>
          <Box sx={{ display:'flex',
    justifyContent:'space-between',
    gap:'20px',
    color:'#565656',fontWeight:' bolder',
    fontSize:' 20px',}}>
            <Typography>Total</Typography>
            <Typography>$301</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{display:'flex',
    justifyContent:'space-around',
    gap:'100px',}} >
        <Box sx={{  display:'flex',
     flexDirection:'column',
     padding:'5px 180px',
     gap:'10px',}} >
         <Box  sx={{color:'#565656',}}  >if you have a prome code, Enter it here</Box>
         <Box sx={{ display:'flex',
     justifyContent:'center',
     alignItems:'center',}} >
           <TextField type="text" placeholder="promo code" sx={{width:'300px',
     padding:'17px 0px',
     border:'none',
     paddingLeft:'30px',
     background:'rgba(240, 240,240, 0.8)',}} />
           <Box sx={{ background:'linear-gradient(180deg,#8d828d,#8b8888,#ac8989 60%)',
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     padding:'15px 40px',
     color:'#fff',
     cursor:'pointer',}} ><Typography>Submit</Typography></Box>
          </Box>
        </Box>
      </Box>
    </Box>
    </Box>
    </>
  )
}

export default Cart