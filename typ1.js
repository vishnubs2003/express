import express from 'express'

import data from './typsOfMidlware.js'

const app=express()


const newuser=[];

const port=3000

app.use('/f',data)
// app.use('/fd',data)
app.listen(port,()=>{
 console.log(`server is running in the port ${port}`);
 
})