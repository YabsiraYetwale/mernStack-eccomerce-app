import {MenCatagory,WomenCatagory,KidsCatagory} from './Catagory'
import m7 from '../../assets/m77.png'
import w5 from '../../assets/w10.png'
import k4 from '../../assets/k44.png'
import { useDispatch, useSelector } from 'react-redux'
import { Box, CardMedia, CircularProgress, Typography } from '@mui/material'
import { fetchProducts } from '../../actions/product'
import { useEffect } from 'react'
export const MenCatagories = () => {
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
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    gap:'20px',
    padding:'32px 0px 50px 0px',
    "@media (max-width:620px)":{
      padding:'57.5px 0px 50px 0px',
    },
    }}>
    <Box  sx={{  display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'20px 0',
    }}>
    <Box sx={{background:'linear-gradient(#f1edf1,#fefefe,#ddd,#fff)',
    padding:'0px 180px 0px 180px',}}>
     <Box sx={{padding:'0px 5px 0px 5px',
   display:'flex',
   justifyContent:'space-around',
   gap:'100px',
      "@media (max-width:620px)":{
        gap:'10px',
        flexWrap:'wrap',
        flexDirection:'column-reverse',
      }

   }}>
        <Box sx={{ display:'flex',
    flexDirection:'column',
    padding:'30px 0',}}>
         <Box sx={{ color:'#c037c0 ',
    display:'flex',
    flexDirection:'column'}}>
             <Typography sx={{ fontSize:'60px',fontWeight:'bolder', 
        "@media (max-width:620px)":{
          fontSize:'30px'
      }}}>FLAT 50% OFF</Typography>
         </Box>
         <Box sx={{
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    gap:'10px',
    fontSize:'30px',
    fontWeight:'bolder',
    padding:'15px 10px',}}><Typography sx={{color:'#c037c0',fontSize:'30px',
    fontWeight:'bolder',}}>12</Typography> Hours <Typography sx={{color:'#c037c0',fontSize:'30px',
    fontWeight:'bolder',}}>20</Typography> Mins</Box>

         <Box sx={{ background:'linear-gradient(180deg,#8d828d,#8b8888,#ac8989 60%)',
    width:'200px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'15px 10px',
    borderRadius:'20px',
    color:'#fff',
    cursor:'pointer',}}><Typography>Explore more</Typography></Box>
        </Box>
        <Box sx={{display:'flex',
  justifyContent:'center',
  alignItems:'center'}}>
         <CardMedia image={m7} alt='catagory' sx={{ width:'250px',
    height:'250px',}}/>
        </Box>
     </Box>
    </Box>
    </Box>
    <Box sx={{  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  gap:'20px',
  padding:'5px 70px 5px 120px', 
  gap:'50rem',
  padding:'5px 20px',
  "@media (max-width:620px)":{
    gap:'5rem',
  }
  }}>
    <Typography  sx={{color:'#565656'}} >Showing 1-12 out of {products.length} Products</Typography>

    <Box sx={{  background:'#fff',
    width:'150px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'15px 10px',
    borderRadius:'30px',
    border:'solid thin',
    cursor:'pointer',}}><Typography>Sort by</Typography></Box>
    </Box>
    <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:4}} >
    {products.map((post,i)=>(
      <Box key={i}>
         <MenCatagory post={post}/>
      </Box>
    ))}
   </Box>
   <Box sx={{ background:'linear-gradient(180deg,#8d828d,#8b8888,#ac8989 60%)',
    width:'200px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'15px 10px',
    borderRadius:'20px',
    color:'#fff',
    cursor:'pointer',}}><Typography>Explore more</Typography></Box>
    </Box>
    </>
  )
}
export const WomenCatagories = () => {
  const {products,isLoading}=useSelector(state=>state.products)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  },[dispatch])
  if (!products) {
    return(null)
  }
  if (isLoading) {
    return( <CircularProgress/>)
  }
  return (
    <>
    <Box sx={{ display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    gap:'20px',
    padding:'32px 0px 50px 0px',
    "@media (max-width:620px)":{
      padding:'57.5px 0px 50px 0px',
    },
    }}>
    <Box  sx={{  display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'20px 0',
    }}>
    <Box sx={{background:'linear-gradient(#f1edf1,#fefefe,#ddd,#fff)',
    padding:'0px 180px 0px 180px',}}>
     <Box sx={{padding:'0px 5px 0px 5px',
   display:'flex',
   justifyContent:'space-around',
   gap:'100px',
      "@media (max-width:620px)":{
        gap:'10px',
        flexWrap:'wrap',
        flexDirection:'column-reverse',
      }

   }}>
        <Box sx={{ display:'flex',
    flexDirection:'column',
    padding:'30px 0',}}>
         <Box sx={{ color:'#c037c0 ',
    display:'flex',
    flexDirection:'column'}}>
             <Typography sx={{ fontSize:'60px',fontWeight:'bolder', 
        "@media (max-width:620px)":{
          fontSize:'30px'
      }}}>FLAT 50% OFF</Typography>
         </Box>
         <Box sx={{
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    gap:'10px',
    fontSize:'30px',
    fontWeight:'bolder',
    padding:'15px 10px',}}><Typography sx={{color:'#c037c0',fontSize:'30px',
    fontWeight:'bolder',}}>12</Typography> Hours <Typography sx={{color:'#c037c0',fontSize:'30px',
    fontWeight:'bolder',}}>20</Typography> Mins</Box>

         <Box sx={{ background:'linear-gradient(180deg,#8d828d,#8b8888,#ac8989 60%)',
    width:'200px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'15px 10px',
    borderRadius:'20px',
    color:'#fff',
    cursor:'pointer',}}><Typography>Explore more</Typography></Box>
        </Box>
        <Box sx={{display:'flex',
  justifyContent:'center',
  alignItems:'center'}}>
         <CardMedia image={w5} alt='catagory' sx={{ width:'250px',
    height:'250px',}}/>
        </Box>
     </Box>
    </Box>
    </Box>
    <Box sx={{  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  gap:'20px',
  padding:'5px 70px 5px 120px', 
  gap:'50rem',
  padding:'5px 20px',
  "@media (max-width:620px)":{
    gap:'5rem',
  }
  }}>
    <Typography  sx={{color:'#565656'}} >Showing 1-12 out of {products.length} Products</Typography>

    <Box sx={{  background:'#fff',
    width:'150px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'15px 10px',
    borderRadius:'30px',
    border:'solid thin',
    cursor:'pointer',}}><Typography>Sort by</Typography></Box>
    </Box>
    <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:4}} >
    {products.map((post,i)=>(
      <Box key={i}>
         <WomenCatagory post={post}/>
      </Box>
    ))}
   </Box>
   <Box sx={{ background:'linear-gradient(180deg,#8d828d,#8b8888,#ac8989 60%)',
    width:'200px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'15px 10px',
    borderRadius:'20px',
    color:'#fff',
    cursor:'pointer',}}><Typography>Explore more</Typography></Box>
    </Box>
    </>
  )
}
export const KidsCatagories = () => {
  const {products,isLoading}=useSelector(state=>state.products)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  },[dispatch])
  if (!products) {
    return(null)
  }
  if (isLoading) {
    return( <CircularProgress/> )
  }
  return (
    <>
    <Box sx={{ display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    gap:'20px',
    padding:'32px 0px 50px 0px',
    "@media (max-width:620px)":{
      padding:'57.5px 0px 50px 0px',
    },
    }}>
    <Box  sx={{  display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'20px 0',
    }}>
    <Box sx={{background:'linear-gradient(#f1edf1,#fefefe,#ddd,#fff)',
    padding:'0px 180px 0px 180px',}}>
     <Box sx={{padding:'0px 5px 0px 5px',
   display:'flex',
   justifyContent:'space-around',
   gap:'100px',
      "@media (max-width:620px)":{
        gap:'10px',
        flexWrap:'wrap',
        flexDirection:'column-reverse',
      }

   }}>
        <Box sx={{ display:'flex',
    flexDirection:'column',
    padding:'30px 0',}}>
         <Box sx={{ color:'#c037c0 ',
    display:'flex',
    flexDirection:'column'}}>
             <Typography sx={{ fontSize:'60px',fontWeight:'bolder', 
        "@media (max-width:620px)":{
          fontSize:'30px'
      }}}>FLAT 50% OFF</Typography>
         </Box>
         <Box sx={{
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    gap:'10px',
    fontSize:'30px',
    fontWeight:'bolder',
    padding:'15px 10px',}}><Typography sx={{color:'#c037c0',fontSize:'30px',
    fontWeight:'bolder',}}>12</Typography> Hours <Typography sx={{color:'#c037c0',fontSize:'30px',
    fontWeight:'bolder',}}>20</Typography> Mins</Box>

         <Box sx={{ background:'linear-gradient(180deg,#8d828d,#8b8888,#ac8989 60%)',
    width:'200px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'15px 10px',
    borderRadius:'20px',
    color:'#fff',
    cursor:'pointer',}}><Typography>Explore more</Typography></Box>
        </Box>
        <Box sx={{display:'flex',
  justifyContent:'center',
  alignItems:'center'}}>
         <CardMedia image={k4} alt='catagory' sx={{ width:'250px',
    height:'250px',}}/>
        </Box>
     </Box>
    </Box>
    </Box>
    <Box sx={{  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  gap:'20px',
  padding:'5px 70px 5px 120px', 
  gap:'50rem',
  padding:'5px 20px',
  "@media (max-width:620px)":{
    gap:'5rem',
  }
  }}>
    <Typography  sx={{color:'#565656'}} >Showing 1-12 out of {products.length} Products</Typography>

    <Box sx={{  background:'#fff',
    width:'150px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'15px 10px',
    borderRadius:'30px',
    border:'solid thin',
    cursor:'pointer',}}><Typography>Sort by</Typography></Box>
    </Box>
    <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:4}} >
    {products.map((post,i)=>(
      <Box key={i}>
         <KidsCatagory post={post}/>
      </Box>
    ))}
   </Box>
   <Box sx={{ background:'linear-gradient(180deg,#8d828d,#8b8888,#ac8989 60%)',
    width:'200px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'15px 10px',
    borderRadius:'20px',
    color:'#fff',
    cursor:'pointer',}}><Typography>Explore more</Typography></Box>
    </Box>
    </>
  )
}

