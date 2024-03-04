import Category from "./category/Category";
import k44 from "../../assets/k44.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../actions/product";
import { useState, useEffect } from "react";
import { CircularProgress, Typography, Box } from "@mui/material";
import {
  LoadingContainer,
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
} from "./styles";

const KidsCategories = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [sortOption, setSortOption] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const kidsProduct = products?.filter(
    (product) => product.category === "kids"
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products && products.length > 0) {
      const kidsProduct = products?.filter(
        (product) => product.category === "kids"
      );

      if (showAll) {
        const sortedProducts = kidsProduct.sort((a, b) => {
          if (sortOption === "title") {
            return sortOrder === "asc"
              ? a.title.localeCompare(b.title)
              : b.title.localeCompare(a.title);
          } else if (sortOption === "newPrice") {
            return sortOrder === "asc"
              ? a.newPrice - b.newPrice
              : b.newPrice - a.newPrice;
          } else if (sortOption === "date") {
            return sortOrder === "asc"
              ? new Date(a.date) - new Date(b.date)
              : new Date(b.date) - new Date(a.date);
          }
        });
        setDisplayedProducts(sortedProducts);
      } else {
        const getFirstProductsByCategory = (category, count) => {
          const filteredProducts = products?.filter(
            (product) => product.category === category
          );
          return filteredProducts.slice(0, count);
        };
        const firstProducts = getFirstProductsByCategory("kids", 5);
        const sortedProducts = firstProducts.sort((a, b) => {
          if (sortOption === "title") {
            return sortOrder === "asc"
              ? a.title.localeCompare(b.title)
              : b.title.localeCompare(a.title);
          } else if (sortOption === "newPrice") {
            return sortOrder === "asc"
              ? a.newPrice - b.newPrice
              : b.newPrice - a.newPrice;
          } else if (sortOption === "date") {
            return sortOrder === "asc"
              ? new Date(a.date) - new Date(b.date)
              : new Date(b.date) - new Date(a.date);
          }
        });

        setDisplayedProducts(sortedProducts);
      }
    }
  }, [products, showAll, sortOption, sortOrder]);
  const handleExploreMoreClick = () => {
    setShowAll(true);
  };

  if (isLoading || !products) {
    return <LoadingContainer>{<CircularProgress />}</LoadingContainer>;
  }

  return (
    <>
      <Container>
        {!kidsProduct?.length ? (
          <Container>
            <DiscountBox>
              <DiscountText>no products for now</DiscountText>
            </DiscountBox>
          </Container>
        ) : (
          <>
            <GradientBox>
              <InnerBox>
                <CategoryBox>
                  <DiscountBox>
                    <DiscountText>FLAT 50% OFF</DiscountText>
                  </DiscountBox>
                  <TimerBox>
                    <Typography
                      sx={{
                        color: "#c037c0",
                        fontSize: "30px",
                        fontWeight: "bolder",
                      }}
                    >
                      12
                    </Typography>{" "}
                    Hours{" "}
                    <Typography
                      sx={{
                        color: "#c037c0",
                        fontSize: "30px",
                        fontWeight: "bolder",
                      }}
                    >
                      20
                    </Typography>{" "}
                    Mins
                  </TimerBox>
                  <ExploreButton>
                    <Typography onClick={handleExploreMoreClick}>
                      Explore more
                    </Typography>
                  </ExploreButton>
                </CategoryBox>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <StyledCardMedia src={k44} alt="category" />
                </Box>
              </InnerBox>
            </GradientBox>
            {kidsProduct && (
              <ProductsBox>
                <ShowingText sx={{ color: "#565656" }}>
                  Showing 1-{displayedProducts.length} out of{" "}
                  {kidsProduct?.length} Products
                </ShowingText>
                <SortByBox>
                  <Typography>Sort by&nbsp;&nbsp;</Typography>
                  <select
                    style={{ width: "20px" }}
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="title">Title</option>
                    <option value="newPrice">New Price</option>
                    <option value="date">Date</option>
                  </select>
                </SortByBox>
              </ProductsBox>
            )}
            <ProductContainer>
              {displayedProducts.map((product, i) => (
                <ProductContainer key={i}>
                  <Category post={product} />
                </ProductContainer>
              ))}
            </ProductContainer>
            {kidsProduct?.length > displayedProducts.length && (
              <ExploreMoreButton>
                <Typography onClick={handleExploreMoreClick}>
                  Explore more
                </Typography>
              </ExploreMoreButton>
            )}
            {showAll && (
              <ExploreMoreButton>
                <Typography
                  onClick={() => {
                    setShowAll(false);
                  }}
                >
                  Show less
                </Typography>
              </ExploreMoreButton>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default KidsCategories;
