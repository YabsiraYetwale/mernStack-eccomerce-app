import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.routes.js'
import productRouter from './routes/product.routes.js'


const app=express()
app.use(cors())
app.use('/images',express.static('upload/images'))
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

// const storage = multer.diskStorage({
//     destination:'./upload/images',
//     filename:(req,file,cb)=>{
//       return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
//   });
//   const upload =multer({storage:storage});

//   app.use('/images',express.static('upload/images'))
//   app.post('/upload',upload.single('img_url'),(req,res) =>{
//     res.json({
//       success:true,
//       img_url:`http://localhost:${PORT}/images/${req.file.filename}`
//     })
  
//   })