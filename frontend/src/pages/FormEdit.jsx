import React from 'react'
import './css/Form.css'
const FormEdit = () => {
  return (
    <>
    
    <div className="formsp">
     <form  className="formF" >
     <div><h2>Edit Product</h2></div>
       <div className="for">
       <label htmlFor="property">property title</label>
        <input type="text" />
        <label htmlFor="Description">Description</label>
        <textarea  cols="30" rows="5" >Write Description</textarea>
    <div className="select-price">
    <div className="prices">
      <label htmlFor="location">Price</label>
    <input type="text"  />
    </div>
     <div className="price">
     <label htmlFor="price">Offer Price</label>
      <input type="text" />
     </div>
    </div>
    <div className="select">
    <label htmlFor="select">Category</label>
      <select >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
        </select>
    </div>
    <div className="file">
    <label htmlFor="file">
      <div className="upload">upload*</div>
    </label>
    <input type='file' />
   </div>
   <button className='btnsub'>Submit</button>
       </div>
     </form>
    </div>
    </>
  )
}

export default FormEdit