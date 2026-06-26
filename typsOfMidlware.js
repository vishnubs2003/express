import express from "express"


const route=express.Router();

route.use((req,res,next)=>{
    console.log("router middleware");
    next()
})

// route.use((req,res,next)=>{
//     console.log("router middleware1");
//     next()
// })

route.get('/',(req,res)=>{
        console.log("fetch the data");
        res.send("welcome")
})

export default route
