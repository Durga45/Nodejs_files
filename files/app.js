const fs= require('fs');

const content=fs.readFileSync("./text.txt") //without encoding it will read as buffer

console.log(content.toString())


//three types to access files
//1. promise
// 2. callback
// 3. synchronous



//promise based  prefer this according to nodejs
const content2=async()=>{
  let data =await fs.promises.readFile("./text.txt")
  console.log(data.toString())
}

content2()

//if you want to use this promises
//import like this
// const fs=require("fs/promises")
//if not
//mention promises.readFile 
//if imported no need to mention promises


const copyfile=async()=>{
  try{
    await fs.promises.copyFile("./text.txt","promise-text.txt")
  }catch(err){
    console.log(err)
  }
}
copyfile()