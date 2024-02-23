import express from 'express'
import multer from 'multer'
import path from 'path'
import Product from '../models/Product.js'
const productRouter=express.Router()

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
      return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
  });
  const upload =multer({storage:storage});
productRouter.post('/',upload.single('image'),async(req,res)=>{
       const{...products}= req.body
       const createProduct= new Product({...products,image:req?.file?.filename})
       try {
        await createProduct.save();

        res.status(201).json({createProduct});
    } catch (error) {
        res.status(409).json({ message: error });
    }
})
productRouter.get('/',async(req,res)=>{
    try{
       const products= await Product.find()
        res.json({products})
    }catch(err){
        res.json(err)
    }
})
productRouter.get('/:id',async(req,res)=>{
    try{
       const {id}= req.params
       const product= await Product.findById(id)
        res.json({product})
    }catch(err){
        res.json(err)
    }
})
productRouter.patch('/:id',async(req,res)=>{
    try{
       const {id}= req.params
       const {...product}= req.body
       const updatedProduct= await Product.findByIdAndUpdate(id,product,{new:true})
       if (!updatedProduct) {
        return res.json({message: 'no products with this id'})
       }
       return res.json({updatedProduct})
    }catch(err){
        res.json(err)
    }
})
productRouter.delete('/:id',async(req,res)=>{
    try{
       const {id}= req.params
       const deletedProduct= await Product.findByIdAndDelete(id)
       if (!deletedProduct) {
       return res.json({message: 'no products with this id'})
       }
       return res.json({deletedProduct})
    }catch(err){
        res.json(err)
    }
})

export default productRouter