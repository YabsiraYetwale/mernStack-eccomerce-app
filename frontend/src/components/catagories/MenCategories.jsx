import MenCategory from './Category/MenCategory'
import m7 from '../../assets/m77.png'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../actions/product';
import { useEffect } from 'react';
import {CircularProgress,Typography,Box} from '@mui/material';
import {
  Container,
  GradientBox,
  InnerBox,
  CategoryBox,
  DiscountBox,
  DiscountText,
  TimerBox,
  ExploreButton,
  ProductsBox,
  ShowingText,
  SortByBox,
  ProductContainer,
  ExploreMoreButton,
  StyledCardMedia,
} from './styles';

const MenCategories = () => {
  const { products, isLoading} = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (!products) {
    return null;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Container>
        <GradientBox>
          <InnerBox>
            <CategoryBox>
              <DiscountBox>
                <DiscountText sx={{ fontSize: '60px', fontWeight: 'bolder' }}>
                  FLAT 50% OFF
                </DiscountText>
              </DiscountBox>
              <TimerBox>
                <Typography sx={{ color: '#c037c0', fontSize: '30px', fontWeight: 'bolder' }}>
                  12
                </Typography>{' '}
                Hours{' '}
                <Typography sx={{ color: '#c037c0', fontSize: '30px', fontWeight: 'bolder' }}>
                  20
                </Typography>{' '}
                Mins
              </TimerBox>
              <ExploreButton>
                <Typography>Explore more</Typography>
              </ExploreButton>
            </CategoryBox>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <StyledCardMedia src={m7} alt='category' />
            </Box>
          </InnerBox>
        </GradientBox>
      <ProductsBox>
        <ShowingText sx={{ color: '#565656' }}>
          Showing 1-12 out of {products.length} Products
        </ShowingText>
        <SortByBox>
          <Typography>Sort by</Typography>
        </SortByBox>
      </ProductsBox>
      <ProductContainer>
        {products.map((post, i) => (
          <Box key={i}>
            <MenCategory post={post} />
          </Box>
        ))}
      </ProductContainer>
      <ExploreMoreButton>
        <Typography>Explore more</Typography>
      </ExploreMoreButton>
      </Container>
    </>
  );
};

export default MenCategories;