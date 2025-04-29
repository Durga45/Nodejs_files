import fs from "fs/promises"


(async()=>{
  const myfile=await fs.open('./content.txt','r')
  // console.log(myfile)
  const content=await fs.readFile('./content.txt')
  console.log(content.toString())
  const myfileSize=await myfile.stat()
  console.log(myfileSize.size)
  myfile.close()
})()