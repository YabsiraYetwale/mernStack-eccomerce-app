import { Link } from 'react-router-dom';
import {CardActionArea,CardContent,Typography } from '@mui/material';
import {
  StyledCard,
  StyledCardMedia,
  StyledTypography,
  StyledPriceContainer,
  StyledOldPriceTypography,
} from './styles';
import { img_url } from '../../../api';
import { useDispatch } from 'react-redux';
const MenCatagory = ({post}) => {
  return (
    <>
   {post.category==='men'  && 
     <StyledCard>
     <CardActionArea>
       <Link to={`/product/${post._id}`}>
         <StyledCardMedia
           image={`${img_url}${post.image}`}
           alt="img"
         />
       </Link>
       <CardContent>
         <StyledTypography>{post.title}</StyledTypography>
         <StyledPriceContainer>
           <Typography>${post.newPrice}</Typography>
           <StyledOldPriceTypography>
             ${post.oldPrice}
           </StyledOldPriceTypography>
         </StyledPriceContainer>
       </CardContent>
     </CardActionArea>
   </StyledCard>
    }
    </>
  )
}
export default  MenCatagory