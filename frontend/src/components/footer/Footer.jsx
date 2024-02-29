import {
  FacebookOutlined,
  Instagram,
  CallOutlined,
} from '@mui/icons-material';
import { Box} from '@mui/material';
import {
  FooterContainer,
  LogoBox,
  FooterBox,
  LogoImage,
  FooterTitle,
  LinkContainer,
  FooterLink,
  SocialMediaContainer,
} from './styles';
import logo from '../../assets/logo.jpg';

const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <FooterContainer>
        <Box>
          <LogoBox>
            <LogoImage image={logo} alt="logo" />
            <FooterTitle>SHOPPER</FooterTitle>
          </LogoBox>
        </Box>
        <FooterBox>
          <LinkContainer>
            <FooterLink onClick={handleClick} to="/">
              Shop
            </FooterLink>
            <FooterLink to="/catagory/men">Men</FooterLink>
            <FooterLink to="/catagory/women">Women</FooterLink>
            <FooterLink to="/catagory/kids">Kids</FooterLink>
            <FooterLink to="/listProduct">Products</FooterLink>
          </LinkContainer>
          <SocialMediaContainer>
            <FacebookOutlined />
            <CallOutlined />
            <Instagram />
          </SocialMediaContainer>
        </FooterBox>
      </FooterContainer>
    </>
  );
};

export default Footer;