import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import cart from "../../assets/Shopping-Cart.png";
import { LOGOUT } from "../actionTypes";
import { useDispatch } from "react-redux";
import { AppBar, Box, Divider,Menu as MenuM, Drawer, IconButton, Typography, MenuItem, Toolbar, CardMedia } from "@mui/material";
import { Menu} from "@mui/icons-material";
const Navbar = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();
  const [menu, setMenu] = useState("shop");
  const [isMobile, setIsMobile] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user-auth"))
  );
  const handleMobile = () => {
    setIsMobile(!isMobile);
  };
  const handleClick = () => {
    window.scrollTo(0, 0);
    setMenu("shop");
  };
  const handleMen = () => {
    window.scrollTo(0, 0);
    setMenu("men");
  };
  const handleWomen = () => {
    window.scrollTo(0, 0);
    setMenu("women");
  };
  const handleKids = () => {
    window.scrollTo(0, 0);
    setMenu("kids");
  };
  const handleProducts = () => {
    window.scrollTo(0, 0);
    {
      setMenu("products");
    }
  };

  const logOutUser = () => {
    dispatch({ type: LOGOUT });
    history("/auth");
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user-auth")));
  }, [location]);
  return (
    <>
      <AppBar sx={{background:'#fff',
      display:'flex',
      justifyContent:'space-around',
      boxShadow:'1px 1px 1px 0px rgba(45,45,45,0.5)',
      padding:'10px 0',
      margin:'0',
      position:'sticky',
      top:'0',
      zIndex:'5',
    }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexGrow: 1,
            position: "sticky",
            zIndex: 5,
          }}
        >              
        <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <CardMedia image={logo} alt="logo" sx={{ width:'60px',
    height:'40px',}} />
            <Typography sx={{ fontWeight: "bolder",color:'#151515', fontSize: "30px" }}>
              SHOPPER
            </Typography>
          </Box>
          <IconButton onClick={handleMobile} sx={{display: {xs:'flex',sm:'flex',md: "none"}}}>
            <Menu  sx={{fontSize: "40px",xs:'block',sm:'none'}}/>
          </IconButton>
         <Box  sx={{display: {xs:'none',sm:'none',md: "flex",gap:'30px'},}}>
          <Box
            sx={{
              display: "Flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "40px",
            }}
          >
            <Box onClick={handleClick}>
              <Link style={{textDecoration:'none',
    color:'#444',
    fontWeight:'bold',}} to="/">
                Home
              </Link>
              {menu == "shop" ? (
                <Divider sx={{ background: "red", height: "1px" }} />
              ) : (
                <></>
              )}
            </Box>
            <Box onClick={handleMen}>
              {" "}
              <Link style={{textDecoration:'none',
    color:'#444',
    fontWeight:'bold',}} to="/catagory/men">
                Men
              </Link>
              {menu == "men" ? (
                <Divider sx={{ background: "red", height: "1px" }} />
              ) : (
                <></>
              )}
            </Box>
            <Box onClick={handleWomen}>
              <Link style={{textDecoration:'none',
    color:'#444',
    fontWeight:'bold',}} to="/catagory/women">
                Women
              </Link>
              {menu == "women" ? (
                <Divider sx={{ background: "red", height: "1px" }} />
              ) : (
                <></>
              )}
            </Box>
            <Box onClick={handleKids}>
              <Link style={{textDecoration:'none',
    color:'#444',
    fontWeight:'bold',}} to="/catagory/kids">
                Kids
              </Link>
              {menu == "kids" ? (
                <Divider sx={{ background: "red", height: "1px" }} />
              ) : (
                <div></div>
                )}
            </Box>
            <Box onClick={handleProducts}>
              <Link style={{textDecoration:'none',
    color:'#444',
    fontWeight:'bold',}} to="/listProduct">
                Products
              </Link>
              {menu == "products" ? (
                <Divider sx={{ background: "red", height: "1px" }} />
              ) : (
                <div></div>

              )}
            </Box>
          </Box>
          <Link to="/addProduct" style={{textDecoration:'none'}}>
              <Typography sx={{ display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    padding:'10px 20px',
    borderRadius:'50%',
    background:'linear-gradient(180deg,#8d828d,#8b8888,#ac8989 60%)',
    color:'#fff',}}>Add Product</Typography> 
          </Link>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "40px",
            }}
          >
            {user?.result && (
              <Box
                sx={{
                  background:
                    "linear-gradient(180deg,#8d828d,#8b8888,#ac8989 60%)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px 15px",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: "bolder",
                  borderRadius: "100%",
                }}
                onClick={() => setPopUp((prev) => !prev)}
              >
                {user?.result?.name?.charAt(0)}
                
              </Box>
            )}
              <div>
              {user?.result ? (
                <div>
                  {popUp && (
                    <MenuM open={popUp} onClick={() => setPopUp(false)} sx={{display: {xs:'none',sm:'none',md: "flex"},position: "absolute",
                    left: "77%",top:"-445px"}}>
                      <MenuItem   onClick={logOutUser}>
                        Logout
                      </MenuItem>
                    </MenuM>
                  )}
                </div>
              ) : (
                <Link to="/auth" style={{                  textDecoration:'none',
              }}>
                 <Typography sx={{
                  background:
                    "linear-gradient(180deg,#8d828d,#8b8888,#ac8989 60%)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px 40px",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: "bolder",
                  borderRadius: "20px",
                }}> Login</Typography>
                </Link>
              )}
            </div>
            <Box sx={{ display: "flex", position: "relative" }}>
              <Link to="/cart">
                <CardMedia image={cart} alt="cart" sx={{width:'40px',
    height:'40px',
    borderRadius:'40px',}}/>
              </Link>
              <Box
                sx={{
                  position: "absolute",
                  left: "30px",
                  width: "18px",
                  height: "18px",
                  fontWeight: "bolder",
                  borderRadius: "100%",
                  background: "red",
                  color: "white",
                  display: "Flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography>0</Typography>
              </Box>
            </Box>
          </Box>
        </Box >
          {isMobile && 
          <Drawer open={isMobile}  onClick={handleMobile} 
          sx={{display: {xs:'flex',sm:'flex',
          md: "none",gap:'30px',
           }}}>
              {user?.result && (
                <Typography  sx={{display:{
                xs:'flex',sm:'flex',md: "none",},
                justifyContent:'center',
                width:'40%',
                position:'relative',
                mt:'10px',
                left:'160px',
                alignItems:'center',
                textAlign:'center',
                padding:'5px 20px',
                borderRadius:'10px',
                border:'solid red',
                background:'#efefef',
                color:'red',}} onClick={logOutUser}>Logout</Typography>
              ) }
             <Box sx={{
                display: "flex",
                gap:'10px',
                p:'20px',
                justifyContent: "center",
                alignItems: "center",
              }}
              >
            {user?.result ? (
                <Typography
                  sx={{
                  width:'40px',
                  height:'40px',
                  background:
                  "linear-gradient(180deg,#8d828d,#8b8888,#ac8989 60%)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px 15px",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: "bolder",
                  borderRadius: "100%",
                }}>{user?.result?.name?.charAt(0)}</Typography>): (<Link to="/auth" style={{textDecoration:'none',}}>
                <Typography sx={{
                 background:
                   "linear-gradient(180deg,#8d828d,#8b8888,#ac8989 60%)",
                 display: "flex",
                 justifyContent: "center",
                 alignItems: "center",
                 padding: "10px",
                 color: "#fff",
                 cursor: "pointer",
                 fontWeight: "bolder",
                 borderRadius: "20px",
               }}> Login</Typography>
               </Link>  )}
                <Link style={{    textDecoration:'none'
}} to="/addProduct" onClick={window.scrollTo(0,0)}>
            <Typography sx={{display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    padding:'10px 20px',
    borderRadius:'50%',
    background:'linear-gradient(180deg,#8d828d,#8b8888,#ac8989 60%)',
    color:'#fff',}}>Add Product</Typography> 
          </Link>
          <Box sx={{ display: "flex", position: "relative" }}>
              <Link to="/cart">
                <CardMedia image={cart} alt="cart" sx={{width:'40px',
    height:'40px',
    borderRadius:'40px'}}/>
              </Link>
              <Box
                sx={{
                  position: "absolute",
                  left: "30px",
                  width: "18px",
                  height: "18px",
                  fontWeight: "bolder",
                  borderRadius: "100%",
                  background: "red",
                  color: "white",
                  display: "Flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography>0</Typography>
              </Box>
            </Box>
            </Box>
          <Box
            sx={{
              display: "Flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: "40px",
            }}
          >
            <Box onClick={handleClick}>
              <Link style={{textDecoration:'none',
    color:'#444',
    fontWeight:'bold',}} to="/">
                Home
              </Link>
              {menu == "shop" ? (
                <Divider sx={{ background: "red", height: "1px" }} />
              ) : (
                <div></div>
                )}
            </Box>
            <Box onClick={handleMen}>
              {" "}
              <Link style={{textDecoration:'none',
    color:'#444',
    fontWeight:'bold',}} to="/catagory/men">
                Men
              </Link>
              {menu == "men" ? (
                <Divider sx={{ background: "red", height: "1px" }} />
              ) : (
                <div></div>
                )}
            </Box>
            <Box onClick={handleWomen}>
              <Link style={{textDecoration:'none',
    color:'#444',
    fontWeight:'bold',}} to="/catagory/women">
                Women
              </Link>
              {menu == "women" ? (
                <Divider sx={{ background: "red", height: "1px" }} />
              ) : (
                <div></div>
                )}
            </Box>
            <Box onClick={handleKids}>
              <Link style={{textDecoration:'none',
    color:'#444',
    fontWeight:'bold',}} to="/catagory/kids">
                Kids
              </Link>
              {menu == "kids" ? (
                <Divider sx={{ background: "red", height: "1px" }} />
              ) : (
                <div></div>

              )}
            </Box>
            <Box onClick={handleProducts}>
              <Link style={{textDecoration:'none',
    color:'#444',
    fontWeight:'bold',}} to="/listProduct">
                Products
              </Link>
              {menu == "products" ? (
                <Divider sx={{ background: "red", height: "1px" }} />
              ) : (
               <div></div>
              )}
            </Box>
          </Box>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "40px",
            }}
          >
          </Box>
        </Drawer>
        }
        </Box>
      </AppBar>
    </>
  );
};

export default Navbar;
