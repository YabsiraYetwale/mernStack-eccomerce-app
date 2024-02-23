import express from 'express'
import mongoose from 'mongoose'

const app=express()
const PORT=4000
const mongo_URL='mongodb://localhost:27017/eccomerce'


mongoose.connect(mongo_URL).then(()=>{
    try{
    app.listen(PORT,()=>{
    console.log(`server listen on ${PORT}`)})
    }catch(err){
        console.log(`${err}did not connect`)
    }
})