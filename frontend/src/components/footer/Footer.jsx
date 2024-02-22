import {Link} from 'react-router-dom'
import {FacebookOutlined,Instagram,CallOutlined} from '@mui/icons-material'
import logo from '../../assets/logo.jpg'
import './Footer.css'
const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0,0)
  }
  return (
    <>
    <div  className='footers'>
    <div className='footer'>

        <div className="fleft">
        <div className="flogo">
        <img src={logo} alt="logo" />
        <span>SHOPPER</span>
      </div>
      <div className="fcatagory">
        <div><Link className="fli" onClick={handleClick} to='/'>Shop</Link></div>
        <div> <Link className="fli" to='/catagory/men'>Men</Link></div>
        <div><Link className="fli" to='/catagory/women'>Women</Link></div>
        <div><Link className="fli" to='/catagory/kids'>Kids</Link></div>
        <Link className="li" to='/listProduct'>Products</Link>
      </div>
      <div className="media">
    <FacebookOutlined/>
    <CallOutlined/>
    <Instagram/>
    </div>
     </div>
    </div>
    </div>
    
    </>
  )
}

export default Footer