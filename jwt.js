import express  from 'express'
import jwt from 'jsonwebtoken'
const app=express();
const port=5000;

app.use(express.json())

const secretkey='mysecretkey'
const database=     
    {
            id:1,name:"abc",password:"abc123"
}
app.post('/login',(req,res)=>{
    const{name,password}=req.body;

    if(name===database.name && password===database.password)
    {
        const token=jwt.sign({id:database.id,name:database.name},secretkey,{expiresIn:'1h'})
        return res.json({msg:`successfully login`,token})
    }
    else{
        return res.json({msg:'invalid data'})
    }
})


// function verifytoken(req,res,next)
// {
//     const author=req.header.authorization
//     if(!author)
//     {
//         return res.json({msg:'token required'})
//     }
//     else{

//     }
// }
app.listen(port,()=>{
    console.log(`server is running in the port ${port}`);
    
})
