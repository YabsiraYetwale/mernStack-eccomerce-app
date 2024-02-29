// import {useEffect} from 'react'
// import { catagory } from '../components/utils'
// import {Link, useNavigate, useParams} from 'react-router-dom'
// import {useDispatch, useSelector } from 'react-redux'
// import { deleteProduct, fetchProduct } from '../actions/product'
// import { img_url } from '../api'
// import { Box, Button, CardMedia, Typography } from '@mui/material'
// const Detail = () => {
//   const {product,isLoading}=useSelector(state=>state.products)
//   const dispatch=useDispatch()
//   const {id}=useParams()
//   const history=useNavigate()
//   useEffect(() => {
//     dispatch(fetchProduct(id))
//   }, [dispatch,id])
//   if (!product) {
//     return(null)
//   }
//   if (isLoading) {
//     return('Loading ...')
//   }
//   return (
//      <>
  
//    <Box sx={{display:'flex',
//     flexDirection: 'column',
//     gap:'20px',
//     padding:'140px 100px',}}>
//     <Box sx={{ display:'flex',
//     gap:'100px',}} >
//         <Box sx={{display:'flex',
//     gap:'20px',}}>
//             <Box>
//             <CardMedia image={`${img_url}${product?.image}`} alt='img' sx={{ display:'flex',
//     flexDirection:'column',
//     padding:'0 0 10px 0',
//     width:'90px',
//     height:'110px',
//     transition:'all 3s',}}/>
//             <CardMedia image={`${img_url}${product?.image}`} alt='img' sx={{ display:'flex',
//     flexDirection:'column',
//     padding:'0 0 10px 0',
//     width:'90px',
//     height:'110px',
//     transition:'all 3s',}}/>
//             <CardMedia image={`${img_url}${product?.image}`} alt='img' sx={{ display:'flex',
//     flexDirection:'column',
//     padding:'0 0 10px 0',
//     width:'90px',
//     height:'110px',
//     transition:'all 3s',}}/>
//             <CardMedia image={`${img_url}${product?.image}`} alt='img' sx={{ display:'flex',
//     flexDirection:'column',
//     padding:'0 0 10px 0',
//     width:'90px',
//     height:'110px',
//     transition:'all 3s',}}/>
//             </Box>
//             <Box>
//             <CardMedia image={`${img_url}${product?.image}`} alt='img' sx={{width:'400px',
//     height:'400px',
//     transition:'all 3s',}}/>
//             </Box>
//         </Box>
//        <Box sx={{  display:'flex',
//     flexWrap:' wrap',
//     flexDirection:'column',
//     gap:'25px',}}>
//           <Typography sx={{color:'rgba(75, 68, 68, 0.9)',
//         fontSize:'40px',
//         fontWeight:'bolder',}}>{product?.title}</Typography>
//           <Box sx={{fontWeight:'bolder',
//     display:'flex',
//     gap:'18px',}}>
//           <Typography >${product?.newPrice}</Typography>
//           <Typography sx={{ textDecoration:'line-through',
//     color:'rgba(131, 127, 127, 0.5)',}}>${product?.oldPrice}</Typography>
//           </Box>
//           <Typography sx={{width:'20px',
//     color:'rgba(70, 69, 70, 0.9)',}}>{product?.description}</Typography>
//           <Box>Select Size</Box>
//           <Box sx={{display:'flex',
//     gap:'20px',}}>
//             <Box sx={{background:'rgba(240, 240,240, 0.5)',
//     width:'50px',
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     padding:'15px 0px',
//     border:'solid thin rgba(240, 240,240, 0.5)',
//     cursor:'pointer',
//     fontWeight:' bolder',
//     fontSize:' 13px',}}><Typography>S</Typography></Box>
//             <Box sx={{background:'rgba(240, 240,240, 0.5)',
//     width:'50px',
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     padding:'15px 0px',
//     border:'solid thin rgba(240, 240,240, 0.5)',
//     cursor:'pointer',
//     fontWeight:' bolder',
//     fontSize:' 13px',}}><Typography>M</Typography></Box>
//             <Box sx={{background:'rgba(240, 240,240, 0.5)',
//     width:'50px',
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     padding:'15px 0px',
//     border:'solid thin rgba(240, 240,240, 0.5)',
//     cursor:'pointer',
//     fontWeight:' bolder',
//     fontSize:' 13px',}}><Typography>L</Typography></Box>
//             <Box sx={{background:'rgba(240, 240,240, 0.5)',
//     width:'50px',
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     padding:'15px 0px',
//     border:'solid thin rgba(240, 240,240, 0.5)',
//     cursor:'pointer',
//     fontWeight:' bolder',
//     fontSize:' 13px',}}><Typography>XL</Typography></Box>
//             <Box sx={{background:'rgba(240, 240,240, 0.5)',
//     width:'50px',
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     padding:'15px 0px',
//     border:'solid thin rgba(240, 240,240, 0.5)',
//     cursor:'pointer',
//     fontWeight:' bolder',
//     fontSize:' 13px',}}><Typography>XXL</Typography></Box>
//             </Box>
//             <Box sx={{ background:'red',
//     width:'150px',
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     padding:'15px 10px',
//     color:'#fff',
//     cursor:'pointer',
//     fontWeight:' bolder',}}><Typography>ADD TO CART</Typography></Box>
//             <Box sx={{ display:'flex',
//     flexDirection:' column',
//     gap:'10px',
//     color:' rgb(36, 37, 37)',}}>
//               <Box><Typography>Catagory</Typography> : Women,T-shirt,Crop Cop</Box>
//               <Box><Typography>Tags</Typography>: Modern,Latest</Box>
//             </Box>
//        </Box>
//     </Box>
//     <Box>
//     <Box sx={{display:'flex',
//     gap:' 25px',
//     paddingLeft:' 150px',
//     position:' relative',
//     top:' -80px',}}>
//     <Link to={`/editProduct/${product?._id}`} style={{textDecoration:' none',}} >
//       <Box sx={{ background:'transparent',
//     width:'50px',
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     cursor:'pointer',
//     fontWeight:' bolder',
//     fontSize:' 13px',
//     border:'solid thin rgba(63, 209, 50, 0.8)',
//     color:' rgba(69, 209, 50, 0.8)',
//     padding:'10px 50px',
//     }}>
//       <Typography onClick={window.scrollTo(0,0)}>Edit</Typography>
//       </Box>
//       </Link>
//     <Button sx={{ background:'transparent',
//     width:'50px',
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     border:'solid thin rgba(220, 220,220, 0.8)',
//     cursor:'pointer',
//     fontWeight:' bolder',
//     fontSize:' 13px',
//     textDecoration:' none',
//     border:'solid thin rgba(209, 50, 50, 0.8)',
//     color:' rgba(209, 50, 50, 0.8)',
//     padding:'10px 50px',
//     }}><Typography onClick={()=>dispatch(deleteProduct(product._id,history))}>Delete</Typography></Button>
//     </Box>
//     </Box>
//    </Box>
   
    
//     </>
//   )
// }

// export default Detail

import { useEffect } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, fetchProduct } from '../actions/product';
import { img_url } from '../api';
import { Box,Typography } from '@mui/material';
import {Container,ImageContainer,ImageWrapper,Image,
        MainImage, TextWrapper, SizeContainer,SizeBox,
        ActionButton,InfoBox ,ActionButtonsWrapper,
        StyledButton,StyledButton1,StyledLink
      } from "./styles/Detail.styles";
      
const Detail = () => {
  const { product, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  if (!product) {
    return null;
  }

  if (isLoading) {
    return 'Loading ...';
  }

  return (
    <>
      <Container>
 <Box sx={{display:'flex',"@media(max-width:900px)":{
        flexDirection:'column',
        position:'relative',
        right:'70px',
 },
    gap:'150px',}}>
        <ImageContainer>
          <ImageWrapper>
            <Image image={`${img_url}${product?.image}`} alt="img" />
            <Image image={`${img_url}${product?.image}`} alt="img" />
            <Image image={`${img_url}${product?.image}`} alt="img" />
            <Image image={`${img_url}${product?.image}`} alt="img" />
          </ImageWrapper>
          <Box>
            <MainImage image={`${img_url}${product?.image}`} alt="img" />
          </Box>
        </ImageContainer>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            gap: '25px',
          }}
        >
          <Typography
            sx={{
              color: 'rgba(75, 68, 68, 0.9)',
              fontSize: '40px',
              fontWeight: 'bolder',
            }}
          >
            {product?.title}
          </Typography>
          <TextWrapper>
            <Typography>${product?.newPrice}</Typography>
            <Typography
              sx={{
                textDecoration:'line-through',
                color: 'rgba(173, 170, 170, 0.9)',
              }}
            >
              ${product?.oldPrice}
            </Typography>
          </TextWrapper>
          <SizeContainer>
            <SizeBox>XS</SizeBox>
            <SizeBox>S</SizeBox>
            <SizeBox>M</SizeBox>
            <SizeBox>L</SizeBox>
            <SizeBox>XL</SizeBox>
          </SizeContainer>
          <ActionButton sx={{width:'200px'}}>
            <StyledButton>ADDTOCART</StyledButton>
          </ActionButton>
          </Box>
          
          </Box>
          <ActionButtonsWrapper>
            <StyledLink to={`/editProduct/${product?._id}`}>
              <StyledButton >EDIT</StyledButton>
            </StyledLink>
              <StyledButton1
                onClick={() => dispatch(deleteProduct(product?._id, history))}
              >
                DELETE
              </StyledButton1>
          </ActionButtonsWrapper>
            <InfoBox>
            <Typography sx={{ fontWeight: 'bolder', fontSize: '20px' }}>
              PRODUCT DETAILS
            </Typography>
            <Typography>
            {product?.description}
            </Typography>
          </InfoBox>
        </Container>
      </>
    );
  };
  
  export default Detail;