const express=require('express')
const app=express()


app.get('/sum',(req,res)=>{
    let a=req.params.a;
    let b=req.params.b;

    let sum= +a + (+b);
    res.send(sum.toString());
})

app.listen(7777,()=>{
    console.log("server is listening");
})
