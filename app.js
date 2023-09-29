const events = require('events');

let myEmitter = new events.EventEmitter()

myEmitter.on('userCreated',()=>{
    console.log("User Created via emmiter !")
})

myEmitter.on('userCreated',()=>{
    console.log("User Created added to the database via emmiter !")
})

myEmitter.on('createdWithIdandname',(id,name)=>{
    console.log(`User ${name} Created with ${id} via emmiter !`)
})

myEmitter.emit('userCreated');

myEmitter.emit('createdWithIdandname',101, "bereket")