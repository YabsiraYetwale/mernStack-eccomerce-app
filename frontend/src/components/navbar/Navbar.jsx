import {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import cart from '../../assets/Shopping-Cart.png'
const Navbar = () => {
    const [menu,setMenu]=useState("shop")
    const [login,setlogin]=useState(false)
    const handleClick = () => {
      window.scrollTo(0,0)
      setMenu('shop')
    }
    const handleMen = () => {
      window.scrollTo(0,0)
      setMenu("men")    }
    const handleWomen = () => {
      window.scrollTo(0,0)
      setMenu("women")    }
    const handleKids = () => {
      window.scrollTo(0,0)
      setMenu("kids")
    }
    const handleProducts = () => {
      window.scrollTo(0,0)
      {setMenu("products")}
    }
    
  return (
    <>
    <nav>
    <div className="logo">
        <img src={logo} alt="logo" />
        <span>SHOPPER</span>
      </div>
      <div className="navcatagory">
        <div onClick={handleClick}><Link className="li" to='/'>Home</Link>{menu=='shop'?<hr className="hr"/> : <></>}</div>
        <div onClick={handleMen}> <Link className="li" to='/catagory/men' >Men</Link>{menu=='men'?<hr className="hr"/> : <></>}</div>
        <div onClick={handleWomen}><Link className="li" to='/catagory/women' >Women</Link>{menu=='women'?<hr className="hr"/> : <></>}</div>
        <div onClick={handleKids}><Link className="li" to='/catagory/kids' >Kids</Link>{menu=='kids'?<hr className="hr"/> : <></>}</div>
        <div onClick={handleProducts}><Link className="li" to='/listProduct'>Products</Link>{menu=='products'?<hr className="hr"/> : <></>}</div>
      </div>
      <Link className="addproduct" to='/addProduct'>Add Product</Link>

      <div className="auth">
        <div className="logoavatar">Y</div>
         <Link className="lia lial" to='/auth'>{login?'Login' : 'Logout'}</Link>
        <div className="cartcou">
        <Link className="lia" to='/cart'><img src={cart} alt='cart' className="cartimg"/></Link>
        <div className="avatar"><span>0</span></div>
        </div>
       
      </div>
    </nav>
    </>
  )
}

export default Navbar