// // example 1 : registering for the event to be fired only one time using onces

// const EventEmitter=require("events");

// const event =new EventEmitter();
// //or
// // const event=require("event");

// event.on("sayMyName",()=>{
//     console.log('my name is siddhant');
// })

// event.emit('sayMyName');

//example 2 : create an EvenrtEmitter instance and register a couple callback

// const EventEmitter=require("events");

// const event =new EventEmitter();


// event.on("sayMyName",()=>{
//     console.log('my name is siddhant');
// })


// event.on("sayMyName",()=>{
//     console.log('my name is om');
// })


// event.on("sayMyName",()=>{
//     console.log('my name is kiran');
// })

// event.emit('sayMyName');


// example 3 : regsitering for the event with callback parametrs


const EventEmitter=require("events");

const event =new EventEmitter();

event.on('checkpage',(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`)
})

event.emit('checkpage',200,'ok')

