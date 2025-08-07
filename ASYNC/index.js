const fs = require ('fs');
// fs.writeFile('read.txt','today is my brithday day is very good',
//     (err) =>{
//         console.log('file is created');
//     }
// );


fs.appendFile('read.txt','plz donot me like and subscribe tne channel',
    ()=>{
        console.log('task completed')
    }
    
    
);

// fs.readFile('read.txt','utf8',
//     (err , data)=>{
//         console.log(data);
//     }
// );
