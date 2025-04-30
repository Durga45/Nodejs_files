import fs from "fs/promises"

(async()=>{
try{
  await fs.access('./newfile.txt'); 
  await fs.link('./newfile.txt','hardlinkfile.txt') //link for to make copy of the file with different name 
  await fs.unlink('./newfile.txt');  //unlink to delete
  console.log("File deleted successfully");
}catch(err){
  console.log("file does not exist")
  console.log(err)
}
})()

//note
//rm delte multiple files and dir also
//unlink delte single file and cant delete multiple files
