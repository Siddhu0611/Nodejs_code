//http web server

const http= require("http");

const server =http.createServer((req,res)=>{

    //jar url var search kele localhost:8000/about tar about chi information yenar kiva contact 
    //chi jar unknow jar asal ani te web server madhile nasil tar error found honar
    
if(req.url="/"){
    res.end("the sid efor me")
}
else if(req.url="/about"){
    res.end("the sid from abouy us me")
}
else if(req.url="/contact"){
    res.end("the sid from contact me")
}
else{
    res.end("the error is found")
}


})

server.listen(8000,"127.0.0.1"),()=>{
    console.log("listening to the port no 8000")
};

