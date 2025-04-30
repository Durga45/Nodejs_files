import fs from "fs/promises"

(async()=>{
  try {
    await fs.access('./new.txt');
    console.log("File already exists");
  } catch (err) {
    await fs.writeFile('./new.txt', '');
    console.log("File created successfully");
  }
})()