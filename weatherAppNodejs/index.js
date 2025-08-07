const http = require("http");
const fs =require("fs");
var requests = require("requests");

const replaceVal =(tempVal,orgVal)=>{
  let temperature = tempVal.replace("{%tempval%}",(((orgVal.main.temp-32)*(5/9)).toFixed(2)));
  temperature = temperature.replace("{%tempmin%}", ((orgVal.main.temp_min-32)*(5/9)) .toFixed(2));
  temperature = temperature.replace("{%tempmax%}",((orgVal.main.temp_max-32)*(5/9)).toFixed(2) );
  temperature = temperature.replace("{%location%}",orgVal.name);
  temperature = temperature.replace("{%country%}",orgVal.sys.country);
  temperature = temperature.replace("{%tempstatus%}",orgVal.weather[0].main);
  return temperature;
}

const homeFile=fs.readFileSync("home.html","utf-8");

const server=http.createServer((req,res)=>{
if(req.url=="/"){
   requests('https://api.openweathermap.org/data/2.5/weather?q=pune&appid=5d571360141400704939326f2cb4e565')
   .on('data',  (chunk)=> {
    const objdata = JSON.parse(chunk)
    const arrData =[objdata];
    console.log(arrData[0].main.temp);
    const realTimeData=arrData
    .map((val)=> replaceVal(homeFile,val))
    .join("");

    // console.log(realTimeData);

    res.write(realTimeData);
    
  })
    .on('end',  (err)=> {
    if (err) return console.log('connection closed due to errors', err);
    res.end();
    
   });
 }
})

server.listen(3000,"127.0.0.1");
