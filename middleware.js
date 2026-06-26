// import express from 'express';

// const app=express()
// const port=3000
// function logUser()
// {
//    console.log("user logged in");
   
// }
// function admin()
// {
//    console.log("adminn role");
   
// }

// app.get('/log',[logUser,admin],(req,res)=>{
//    console.log(`user loggin in successfully`);
   
// })

// app.listen(port,()=>{
//    console.log(`server is running in ${port}`);
   
// })


import express from "express"
 const port=3000;

 const app=express();


 function authent(req,res,next){
    // const a=req.header.authorization;
     
    const a="1234"
    if(a==="1234"){
        res.send("valid")
    }else{
       res.send("invalid")
    }
    next()
 }
 app.get('/',authent)
//  app.get('/',authent,(req,res)=>{
//     res.send("authorised")
//  })
 app.listen(port,()=>{
    console.log(`server is runnig in ${port}`);
    
 })

 function admin(req,res,next)
 {
   const b="admin"
   if(b==="admin"){
      return res.send('admin')
   }else{
      return res.send("invalid user")
   }
   next()
 }
 app.get('/admin',admin,(req,res)=>{
   res.send('authorized admin')
 })
 app.listen(port,()=>{
    console.log(`server is runnig in ${port}`);
    
 })
