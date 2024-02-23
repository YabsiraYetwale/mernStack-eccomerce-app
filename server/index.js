import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.routes.js'
import productRouter from './routes/product.routes.js'

const app=express()
app.use(express.json())
app.use('/users',userRouter)
app.use('/products',productRouter)
dotenv.config()
const PORT=process.env.PORT
const MONGODB_URL=process.env.MONGODB_URL


mongoose.connect(MONGODB_URL).then(()=>{
    try{
    app.listen(PORT,()=>{
    console.log(`server listen on ${PORT}`)})
    }catch(err){
        console.log(`${err}did not connect`)
    }
})