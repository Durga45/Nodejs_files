import fs from "fs/promises"

(async()=>{
await fs.rename('./myfile.txt',"renamedfile.txt")
await fs.rename('./renamedfile.txt','./move/renamedfile.txt')
})()