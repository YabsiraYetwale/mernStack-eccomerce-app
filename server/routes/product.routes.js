import express from 'express'
import Product from '../models/Product.js'
import User from '../models/User.js'
import multer from 'multer'
import path from 'path'
import jwt from 'jsonwebtoken'
import { Auth } from '../middlewares/Auth.js'
const productRouter=express.Router()

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
      cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
  });
  const upload =multer({storage:storage});
productRouter.post('/',Auth,upload.single('image'),async(req,res)=>{
       const{...products}= req.body
       const createProduct= new Product({...products,image:req?.file?.filename,creator:req.userId})
       try {
        await createProduct.save();
        res.status(201).json({createProduct});
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: error });
    }
})
productRouter.get('/',async(req,res)=>{
    try{
       const products= await Product.find()
        res.json({products})
    }catch(err){
        res.json(err)
        console.log(err)

    }
})
productRouter.get('/:id',async(req,res)=>{
    try{
       const {id}= req.params
       const product= await Product.findById(id)
        res.json({product})
    }catch(err){
        res.json(err)
        console.log(err)

    }
})
productRouter.patch('/:id',upload.single('image'),async(req,res)=>{
    try{
       const {id}= req.params
       const {...product}= req.body
       const updatedProduct= await Product.findByIdAndUpdate(id,{...product,image:req?.file?.filename,creator:req.userId},{new:true})
       if (!updatedProduct) {
        return res.json({message: 'no products with this id'})
       }
       return res.json({updatedProduct})
    }catch(err){
        res.json(err)
    }
})
productRouter.delete('/:id',Auth,async(req,res)=>{
    try{
       const {id}= req.params
       const deletedProduct= await Product.findByIdAndDelete(id)
       if (!deletedProduct) {
       return res.json({message: 'no products with this id'})
       }
       return res.json({delet:deletedProduct})
    }catch(err){
        res.json(err)
    }
})

productRouter.post('/add-to-cart/:productId',Auth, async (req, res) => {
    try {
      const { productId } = req.params;
      const { quantity } = req.body;
      const userId = req.userId;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
   const existingProduct = user.cart.find(item => item.productId.toString() === productId);
      if (existingProduct) {
        existingProduct.quantity += quantity || 1;
      } else {
        user.cart.push({ productId, quantity: quantity || 1 });
      }
      await user.save();
      const token= jwt.sign({email:user.email,id:user._id},'secret')
        res.json({result:user,token})
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  productRouter.get('/cart/quantity', Auth, async (req, res) => {
    try {
      const userId = req.userId;
  
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      let quantity = 0;
  
      user.cart.forEach(item => {
        quantity += item.quantity;
      });
  
      res.status(200).json({ quantity });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

export default productRouter


