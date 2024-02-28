import {Link} from 'react-router-dom'
import {Box, Card,CardActionArea,CardContent, CardMedia, Typography } from '@mui/material'
import { img_url } from '../../api'
export  const MenCatagory = ({post}) => {
  return (
    <>
   {post.category==='men'  && 
    <Card sx={{width:'270px'}}>
    <CardActionArea>
    <Link to={`/product/${post._id}`}><CardMedia image={`${img_url}${post.image}`} sx={{minHeight:'300px',transition:'all 3s',}} alt='img'/></Link>
      <CardContent>
         <Typography sx={{color:'rgba(75, 68, 68, 0.9)'}}>{post.title}</Typography>
         <Box  sx={{  fontWeight:'bolder',display:'flex',gap:'18px',}}>
         <Typography >${post.newPrice}</Typography>
         <Typography sx={{  textDecoration:'line-through',color:'rgba(131, 127, 127, 0.5)',}}>${post.oldPrice}</Typography>
         </Box>
      </CardContent>
    </CardActionArea>
   </Card >
    }
    
    </>
  )
}
export  const WomenCatagory = ({post}) => {
  return (
    <>
   {post.category==='women'  && 
     <Card sx={{width:'270px'}}>
     <CardActionArea>
     <Link to={`/product/${post._id}`}><CardMedia image={`${img_url}${post.image}`} sx={{minHeight:'300px',transition:'all 3s',}} alt='img'/></Link>
       <CardContent>
          <Typography sx={{color:'rgba(75, 68, 68, 0.9)'}}>{post.title}</Typography>
          <Box  sx={{  fontWeight:'bolder',display:'flex',gap:'18px',}}>
          <Typography >${post.newPrice}</Typography>
          <Typography sx={{  textDecoration:'line-through',color:'rgba(131, 127, 127, 0.5)',}}>${post.oldPrice}</Typography>
          </Box>
       </CardContent>
     </CardActionArea>
    </Card >
    }
    
    </>
  )
}
export  const KidsCatagory = ({post}) => {
  return (
    <>
   {post.category==='kids'  &&
     <Card sx={{width:'270px'}}>
     <CardActionArea>
     <Link to={`/product/${post._id}`}><CardMedia image={`${img_url}${post.image}`} sx={{minHeight:'300px',transition:'all 3s',}} alt='img'/></Link>
       <CardContent>
          <Typography sx={{color:'rgba(75, 68, 68, 0.9)'}}>{post.title}</Typography>
          <Box  sx={{  fontWeight:'bolder',display:'flex',gap:'18px',}}>
          <Typography >${post.newPrice}</Typography>
          <Typography sx={{  textDecoration:'line-through',color:'rgba(131, 127, 127, 0.5)',}}>${post.oldPrice}</Typography>

          </Box>
       </CardContent>
     </CardActionArea>
    </Card >
    }
    
    </>
  )
}

