import { Box,CircularProgress,Divider,Typography } from '@mui/material'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../actions/product';
import { img_url } from '../api';
import {
  Container,
  SectionContainer,
  HeaderContainer,
  ProductBox,
  ProductContainer,
  StyledCardMedia,
  StyledDivider,
  Title,
  QuantityContainer,
  StyledTextField,
  SubmitButton,
  SubtotalContainer,
  TotalContainer,
  PromoBox,
  PromoCodeContainer,
  StyledBox,
  PromoCodeText,
  CartTotalsContainer,
  CartContainer,
} from './styles/Cart.styles';
const Cart = () => {
  const { products, isLoading} = useSelector((state) => state.products);
  
const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchProducts());
}, [dispatch]);

if (!products) {
  return null;
}

if (isLoading) {
  return <Container>{<CircularProgress/>}</Container>
}
const user = JSON.parse(localStorage.getItem('user-auth'));

  return (
    <>
      <Container>
        <SectionContainer>
          <HeaderContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: '65px' }}>
              <Typography>{user.result.cart.map((product)=>(
                <div>
                 id: {product.productId}
                 quantity:{product.quantity}
                 title:{product.title}
                </div>
              ))}</Typography>
              <Title sx={{display: { xs: 'none', md: 'block' } }}>Title</Title>
            </Box>
            <Typography sx={{ display: { xs: 'none', md: 'block' } }}>Price</Typography>
            <Typography>Quantity</Typography>
            <Typography>Total</Typography>
            <Typography>Remove</Typography>
          </HeaderContainer>
          <ProductBox>
            {products.map((product, i) => (
             
              <Box sx={{ flexDirection: 'column', justifyContent: 'space-around', gap: '5px' }} key={i}>
                <StyledDivider/>
                <ProductContainer>
                  <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: '50px' }}>
                    <StyledCardMedia image={`${img_url}${product.image}`} alt="img" />
                    <Title sx={{display: { xs: 'none', md: 'block' } }}>{product.title}</Title>
                  </Box>
                  <Typography sx={{ display: { xs: 'none', md: 'block' } }}>${product.newPrice}</Typography>
                  <QuantityContainer>2</QuantityContainer>
                  <Typography>${product.newPrice}</Typography>
                  <Typography>X</Typography>
                </ProductContainer>
              </Box>
            ))}
            <StyledDivider/>
          </ProductBox>
        </SectionContainer>
        <CartContainer>
          <CartTotalsContainer>
            <Typography sx={{ fontSize: '25px', fontWeight: 'bolder' }}>Cart Totals</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', gap: '5px', color: '#565656' }}>
              <Box>
                <SubtotalContainer>
                  <Typography>Subtotal</Typography>
                  <Typography>${products.reduce((total, product) => total + (product.newPrice), 0)}</Typography>
                </SubtotalContainer>
                <Divider />
              </Box>
              <Box sx={{ fontWeight: 'bolder', fontSize: '20px' }}>
                <Box>
                  <SubtotalContainer>
                    <Typography>Shipping Fee</Typography>
                    <Typography>Free</Typography>
                  </SubtotalContainer>
                  <Divider />
                </Box>
                <TotalContainer>
                  <Typography>Total</Typography>
                  <Typography>${products.reduce((total, product) => total + (product.newPrice), 0)}</Typography>
                </TotalContainer>
              </Box>
            </Box>
          </CartTotalsContainer>
          <PromoBox>
            <PromoCodeContainer>
              <PromoCodeText>if you have a promo code, Enter it here</PromoCodeText>
              <StyledBox>
                <StyledTextField type="text" placeholder="promo code" />
                <SubmitButton>
                  <Typography>Submit</Typography>
                </SubmitButton>
              </StyledBox>
            </PromoCodeContainer>
          </PromoBox>
        </CartContainer>
      </Container>
    </>
  );
};

export default Cart;