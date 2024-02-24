import jwt from 'jsonwebtoken'
export const Auth=(req,res,next)=>{
    try {
        const token = req.headers.authorization.split(' ')[1]
        let verified
        if (token)
          verified= jwt.verify(token,'secret')
        req.userId= verified.id
        next()
    } catch (err) {
        console.log(err)
    }
}