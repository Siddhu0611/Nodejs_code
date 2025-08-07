// const name = "thapa";
// console.log(name);

const fs = require("fs");

// creating a new file
fs.writeFileSync("read.txt","welcome to the channel");

// fs.writeFileSync("read.txt"," tapa techincal,welcome to the channel ");

//  data add karcha asal
// fs.appendFileSync('read.txt','how are you i am fine thanku fine')

// read the data
// const buf_data=fs.readFileSync('read.txt');
// org_data=buf_data.toString();
// console.log(org_data);

// rename the file
fs.renameSync('read.txt','write.txt');