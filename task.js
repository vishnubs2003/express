import express from "express"

const app=express()

const user=[];
const port=3000;
app.get('/user/:id',(req,res)=>{
    res.send({
    id: req.params.id,
    name: "abc",
    phno: "123456789",
    adrs: "xxxxxx"
})
})
       
app.get('/products/:id',(req,res)=>{
res.send({
    id: req.params.id,
    pname: "abc",
    price: "129",
    mfg: "12-25",
    exp:"12 months from mfg"
})
})

app.get('/students/:roll',(req,res)=>{
res.send({
   rollno:req.params.roll,
   sname:"abc",
   status:"pass",
   marks:67
})

})
app.listen(port,()=>{
    console.log(`server is running in the port ${port}`);
    
})