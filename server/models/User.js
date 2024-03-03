import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  cart: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
      },
      quantity: {
        type: Number,
        default: 1,
      },
      totalQuantity: {
        type: Number,
        default: 0,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now(),
  },
  id:{
    type:String
}
});

const User = mongoose.model('Users', userSchema);

export default User;