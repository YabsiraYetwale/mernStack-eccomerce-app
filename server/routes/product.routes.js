import express from 'express'
import Product from '../models/Product.js'
const productRouter=express.Router()

productRouter.post('/',async(req,res)=>{
       const{...products}= req.body
       const createProduct= new Product({...products,creator:req.userId})
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
productRouter.patch('/:id',async(req,res)=>{
    try{
       const {id}= req.params
       const {...product}= req.body
       const updatedProduct= await Product.findByIdAndUpdate(id,{...product,creator:req.userId},{new:true})
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