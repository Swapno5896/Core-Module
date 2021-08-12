const fs = require('fs');

fs.writeFile('myFile.txt','Hello swapno',(err)=>{
console.log(err)
})
fs.appendFile('myFile.txt','How are you ',(err)=>{
    console.log(err)
})
fs.readFile('myFile.txt',(err,data)=>{
    console.log(err,data.toString())
})