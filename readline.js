const readline=require('readline');
console.log("start");

const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("please enter your name: \n",(name)=>{
    console.log(`hi ${name}`);
    rl.close();
});

rl.on('close',()=>{
    console.log("Interface closed");
    process.exit();
})