import express from "express"
import { log } from "node:console";

const port=3000;
 const app=express()

//  app.get('/search',(req,res)=>{
//     res.send(`the name is ${req.query.name}`)
//  })

app.get('/searchh',(req,res)=>{
    const {name,age,place}=req.query;
    res.send(`the name is ${name} and has age ${age} from ${place}`)
 })


 app.get('/products',(req,res)=>{
    res.send({
        id:req.query.id,
        name:req.query.name,
        age:req.query.age
 })
 })
 app.listen(port,()=>{
    console.log(`server is running in port ${port}`);
    
 })