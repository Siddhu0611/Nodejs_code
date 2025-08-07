//chalk
const chalk=require("chalk");
// console.log(chalk.blue('Hello world!'));


//validator
const validator=require("validator")
const res= validator.isEmail('foo@bar.com');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

//nodemon
tar 