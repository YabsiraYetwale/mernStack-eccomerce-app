import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import FileBase from 'react-file-base64'
import './css/Form.css'
import { fetchProduct, updateProduct } from '../actions/product'

export const FormHome = () => {
  const [curId,setCurId]=useState(0)
  return(
    <>
    <FormEdit curId={curId} setCurId={setCurId}/>
    <Details setCurId={setCurId}/>
    </>
  )
}
export const Details = ({setCurId}) => {
  const {product}=useSelector(state=>state.products)
  const dispatch=useDispatch()
  const {id}=useParams()
  useEffect(() => {
    dispatch(fetchProduct(id))
  }, [dispatch,id])
  return(
    <>
    <div  onClick={setCurId(product._id)}/>
   </>
  )
}
export const FormEdit = ({curId,setCurId}) => {
  const dispatch=useDispatch()
  const history=useNavigate()
  const [formData,setFormData]=useState({title:'',description:'',category:'',image:'',oldPrice:0,newPrice:0,})
  const {id}=useParams()
  const {product}=useSelector(state=>state.products)
   const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(updateProduct(curId,formData,history))
  }
  useEffect(() => {
    if (product) {
      setFormData(product)
    }
  }, [product])
  
  useEffect(() => {
    dispatch(fetchProduct(id))
  }, [dispatch,id])
  return (
    <>
    <div className="formsp">
     <form  className="formF"  onSubmit={handleSubmit}>
     <div><h2>Edit Product</h2></div>
       <div className="for">
       <label htmlFor="property">property title</label>
        <input type="text" value={formData.title} onChange={(e)=>setFormData({...formData,title:e.target.value})}/>
        <label htmlFor="Description">Description</label>
        <textarea  cols="30" rows="5" value={formData.description}  onChange={(e)=>setFormData({...formData,description:e.target.value})}>Write Description</textarea>
    <div className="select-price">
    <div className="prices">
      <label htmlFor="location">Price</label>
    <input type="text" value={formData.oldPrice}  onChange={(e)=>setFormData({...formData,oldPrice:e.target.value})} />
    </div>
     <div className="price">
     <label htmlFor="price">Offer Price</label>
      <input type="text" value={formData.newPrice} onChange={(e)=>setFormData({...formData,newPrice:e.target.value})}/>
     </div>
    </div>
    <div className="select">
    <label htmlFor="select">Category</label>
      <select value={formData.category}  onChange={(e)=>setFormData({...formData,category:e.target.value})}>
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="kids">kids</option>
        </select>
    </div>
   <div className="file">
    <label htmlFor="file">
      <div className="upload">upload*</div>
    </label>
    <FileBase type='file'  value={formData.image} name='image' onDone={({base64})=>setFormData({...formData,image:base64})}/>
   </div>
   <button className='btnsub' >Submit</button>
       </div>
     </form>
    </div>
    </>
  )
}

// export default FormEdit