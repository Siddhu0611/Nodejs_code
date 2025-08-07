const express =require("express");
const app = express()
let PORT =5000;
const sendMail=require('./controller/sendMail');

app.get("/",(req,res)=>{
    res.send("i am back")
})
app.get*("/mail",sendMail);

const start = async()=>{
    try{
        app.listen(PORT,()=>{
            console.log("i am live on port no 5000 ${PORT}")
        })
    }catch(error){}
}
start();