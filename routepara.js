import express from "express"

const app=express();
const port=5000;


app.get('/user/:id',(req,res)=>{
    res.send(`the user is ${req.params.id}`)
})

app.get('/data/:username/:course',(req,res)=>{
    res.send(`the user is ${req.params.username}<br> the course is ${req.params.course}`)
})

app.get('/search/:id',(req,res)=>{
    res.send({
        id:req.params.id,
        name:"vishnu",
        place:"ask"
    })
})
app.listen(port,()=>{
    console.log(`the server is run ${port}`);
    
})