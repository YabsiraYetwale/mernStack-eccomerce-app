import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
    },
    password:{
        type:String
    },
    cartData:{
        type:Object
    },
    date:{
        type:Date,
        default:Date.now()
    },
})
const User=mongoose.model('users',userSchema)
export default User