import fs from  "fs/promises"

(async()=>{
try{
await fs.appendFile('./myfile.txt'," adding new line \n")
const data=await fs.readFile("./myfile.txt")
console.log(data.toString())
}catch(e){
  console.log("error in appending",e)
}
})()