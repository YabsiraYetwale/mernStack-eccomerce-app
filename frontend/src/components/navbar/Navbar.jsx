import {useEffect, useState} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import cart from '../../assets/Shopping-Cart.png'
import { LOGOUT } from '../actionTypes'
import { useDispatch } from 'react-redux'
const Navbar = () => {
    const dispatch=useDispatch()
    const history=useNavigate()
    const location=useLocation()
    const [menu,setMenu]=useState("shop")
    const [popUp,setPopUp]=useState(false)
    const [user,setUser]=useState(JSON.parse(localStorage.getItem("user-auth")))
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
    const logOutUser = () => {
      dispatch({type:LOGOUT})
      history('/auth')
    }
    useEffect(()=>{
      setUser(JSON.parse(localStorage.getItem("user-auth")))
    },[location])
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
      {user?.result &&<div className="logoavatar" onClick={()=>setPopUp(prev=>!prev)}>{user?.result?.name?.charAt(0)}</div>}         
      <>{user?.result ? <>{popUp && <div className="logoutpop"  onClick={()=>setPopUp(false)}><div className="lia lial logpop" onClick={logOutUser}>Logout</div></div>}</>: <Link className="lia lial" to='/auth'>Login</Link>}</>
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