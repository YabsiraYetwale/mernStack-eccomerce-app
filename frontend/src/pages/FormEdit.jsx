import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
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
  const [image,setImage]=useState()
 
  const handleSubmit=(e)=>{
    e.preventDefault()
    const formdata=new FormData()
    formdata.append('image',image)
    formdata.append('title',formData.title)
    formdata.append('description',formData.description)
    formdata.append('category',formData.category)
    formdata.append('oldPrice',formData.oldPrice)
    formdata.append('newPrice',formData.newPrice)
    dispatch(updateProduct(curId,formdata,history))

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
   
    <Box sx={{display:'flex',
    flexDirection:' column',
     padding:'100px 40px 50px 40px',}}>
    <Box sx={{background:'linear-gradient(180deg,#f3f3f3,#f7f4f4,#fff)',
      padding:'100px 10px 20px 10px',
      margin:'0 120px',
    "@media (max-width:770px)":{
      margin:'0px',
    },
    }}>
    <form  onSubmit={handleSubmit}   >
     <Typography variant='h4' sx={{ paddingLeft:'20px'}}>Edit Product</Typography>
     <Box sx={{   position: 'relative',
    paddingBottom: '40px',
    left: '20px',   
    display: 'flex',
    gap: '10px',
    flexDirection: 'column',}}>
       
        <TextField sx={{
    width:' 95%',}} variant="outlined" type="text" label='property title'  value={formData.title} onChange={(e)=>setFormData({...formData,title:e.target.value})}/>
        
        <TextField sx={{width:' 95%',}}  variant="outlined" label="Description" fullWidth multiline rows={4} value={formData.description} onChange={(e)=>setFormData({...formData,description:e.target.value})} />
    <Box sx={{ display:' flex',
    gap:' 30px',
    marginRight:'48px',
    "@media(max-width:900px)":{
      marginRight:'30px',
    },
    "@media(max-width:767px)":{
      flexDirection:'column',
    },
    }}>
    <Box sx={{ display: 'flex',
    gap: '10px',
    flexDirection: 'column',
    width: '100%',}}>
      
    <TextField sx={{  width:' 100%',}} variant="outlined" type="number" label='Price' name='oldPrice' value={formData.oldPrice}  onChange={(e)=>setFormData({...formData,oldPrice:e.target.value})} />
    </Box>
     <Box sx={{ display: 'flex',
    gap: '10px',
    flexDirection: 'column',
    width: '100%',}}>
     
      <TextField sx={{
width:' 100%',}} variant="outlined" type="number" label='Offer Price' value={formData.newPrice} onChange={(e)=>setFormData({...formData,newPrice:e.target.value})}/>
     </Box>
    </Box>
    <Box sx={{  display:' flex',
    flexDirection:' column',
    width:' 150px',}}>
    <span htmlFor="select">Category</span>
      <select style={{height:'30px'}}  name='category' value={formData.category}  onChange={(e)=>setFormData({...formData,category:e.target.value})}>
            <option value="">----choose----</option>
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="kids">kids</option>
        </select>
    </Box>
   <Box sx={{ display:' flex',
    flexDirection:' column',
    cursor:' pointer',}}>
    <span htmlFor="file">
      <Box sx={{ color:' #3e8499',
    fontWeight:' bold',
    cursor:' pointer',}}>upload*</Box>
    </span>
    <input variant="outlined" type="file" onChange={(e)=>setImage(e.target.files[0])} />
   </Box>
   <Button variant="contained"  size="large" type="submit" 
   sx={{  width: '150px',
    padding: '10px 20px',
    background: 'rgb(59, 59, 189)',
    color: '#fff',
    fontWeight: 'bold',
    borderStyle: 'hidden',
    borderRadius: '5px',
    cursor: 'pointer',}} >Submit</Button>

       </Box> 
     </form>
    </Box>
    </Box>
    </>
  )
}
