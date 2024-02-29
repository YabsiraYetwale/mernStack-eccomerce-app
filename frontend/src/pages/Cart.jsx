import { Box, CardMedia, Divider, TextField, Typography } from '@mui/material'
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
  PromoCodeContainer,
  PromoCodeText,
  CartTotalsContainer,
  CartContainer,
} from './styles/Cart.styles';
import { kid } from '../components/utils'


const Cart = () => {
  return (
    <>
      <Container>
        <SectionContainer>
          <HeaderContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: '65px' }}>
              <Typography>Product</Typography>
              <Title sx={{display: { xs: 'none', md: 'block' } }}>Title</Title>
            </Box>
            <Typography sx={{ display: { xs: 'none', md: 'block' } }}>Price</Typography>
            <Typography>Quantity</Typography>
            <Typography>Total</Typography>
            <Typography>Remove</Typography>
          </HeaderContainer>
          <ProductBox>
            {kid.map((ki, i) => (
              <Box sx={{ flexDirection: 'column', justifyContent: 'space-around', gap: '5px' }} key={i}>
                <StyledDivider/>
                <ProductContainer>
                  <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: '50px' }}>
                    <StyledCardMedia image={ki.image} alt="img" />
                    <Title sx={{display: { xs: 'none', md: 'block' } }}>{ki.title}</Title>
                  </Box>
                  <Typography sx={{ display: { xs: 'none', md: 'block' } }}>${ki.newprice}</Typography>
                  <QuantityContainer>2</QuantityContainer>
                  <Typography>${ki.newprice}</Typography>
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
                  <Typography>$301</Typography>
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
                  <Typography>$301</Typography>
                </TotalContainer>
              </Box>
            </Box>
          </CartTotalsContainer>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: '100px' }}>
            <PromoCodeContainer>
              <PromoCodeText>if you have a promo code, Enter it here</PromoCodeText>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <StyledTextField type="text" placeholder="promo code" />
                <SubmitButton>
                  <Typography>Submit</Typography>
                </SubmitButton>
              </Box>
            </PromoCodeContainer>
          </Box>
        </CartContainer>
      </Container>
    </>
  );
};

export default Cart;