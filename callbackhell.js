const readline=require('readline');
const fs= require('fs')

// let textIn=fs.readFileSync('./files/input.txt','utf-8',)
fs.readFile('./files/input.txt','utf-8',(err,data)=>{
    console.log(data)
    fs.writeFile('./files/append.txt',`${data}\n Date created: ${new Date()}`,()=>{
        console.log("file written callback hell");
    });
});
// console.log(textIn)
console.log("Reading File ...")

// let content=`this is from input file: ${textIn} \n Date created: ${new Date()}`
// fs.writeFileSync('./files/output.txt',content)