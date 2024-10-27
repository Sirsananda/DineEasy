const express=require('express');

//rest object
const app=express();
//routes
//URl=  http://localhost:8080 //app.get('/')
app.get('/',(req,res)=>{
    return res.status(200).send('<h1>Welcome Sirsa</h1>');
});

const PORT=8080;
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});