
const fs=require('fs');
const { DefaultDeserializer } = require('v8');

// folder  created in async
// fs.mkdir('TAHPA',
// (err)=>{
//     console.log('folder is created');
// }
// );


// file created in thapa folder
// fs.writeFile('TAHPA/read1.txt','hi my name is siddhant',
//     (err)=>{
//         console.log('file is created')
//     }
// );

// data add karcha ahe
// fs.appendFile('TAHPA/read1.txt','my surname is siddhant',
//     (err)=>{
//         console.log('data is added');
//     }
// );


// data is read karche asal tar
// fs.readFile('TAHPA/read1.txt','utf-8',
//     (err,data)=>{
//         console.log(data)
//     }
// );


// file name changed karcha asal
// fs.rename('TAHPA/read1.txt','TAHPA/bio.txt',
//     (err)=>{
//         console.log('name change')
//     }
// );


// file deleted
// fs.unlink('TAHPA/bio.txt',
//     (err)=>{
//         console.log('delete file')
//     }
// );

// folder Deleted
fs.rmdir('TAHPA',
    (err)=>{
        console.log('folder deleted')
    }
);