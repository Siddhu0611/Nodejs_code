const fs =require("fs");


const bioData ={
    name :"vinod",
    age:26,
    channel:"thapa techincal",
}
// console.log(bioData.name);

// //object la json madhe convert karche chi techinque

// const jsonData=JSON.stringify(bioData);
// // console.log(bioData);

// // json la object madhe conver karche asal
// const objData=JSON.parse(jsonData);
// console.log(objData);

// convert jsonn =done
// durse file me add karna=done
// readfile
// again convert back to js obj ori
//console.log

const jsonData=JSON.stringify(bioData);
fs.writeFile("json1.json",jsonData,(err)=>{
console.log("done")
})
fs.readFile("json1.json","utf-8",(err,data)=>{
console.log(data);
const orgData=JSON.parse(data);
console.log(orgData);
});
