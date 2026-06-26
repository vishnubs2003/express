import express from "express"
const port=3000

const app=express();

app.get('/',(req,res)=>{
    res.end("welcome to home page")
})

app.get('/about',(req,res)=>{
    res.end("welcome to about page")
})
app.get('/contact',(req,res)=>{
    res.send("welcome to contact page")
})
app.get('/user',(req,res)=>{
    res.send(
        {
            "id":1,
            "name":"abc",
            "place":"ask"
        }
    )
})

app.listen(port,()=>{
    console.log(`running in port number${port}`);
    
})