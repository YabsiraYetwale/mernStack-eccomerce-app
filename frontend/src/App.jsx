import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Auth from './pages/Auth'
import Cart from './pages/Cart'
import Home from './pages/Home'
import ListProduct from './pages/ListProduct'
import {MenShopCatagory,WomenShopCatagory,KidsShopCatagory} from './pages/ShopCatagory'
import Footer from './components/footer/Footer'
import Detail from './pages/Detail'
import FormCreate from './pages/FormCreate'
import FormEdit from './pages/FormEdit'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/addProduct' Component={FormCreate}/>
        <Route path='/editProduct/:id' Component={FormEdit}/>
        <Route path='/catagory/men' Component={MenShopCatagory}/>
        <Route path='/catagory/women' Component={WomenShopCatagory}/>
        <Route path='/catagory/kids' Component={KidsShopCatagory}/>
        <Route path='/listProduct' Component={ListProduct}/>
        <Route path='/cart' Component={Cart} />
        <Route path='/auth' Component={Auth}/>
        <Route path='/product/:id' Component={Detail}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App