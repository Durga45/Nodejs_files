const fs = require("fs/promises"); // ✅ correct import

(async () => {
  const watcher = fs.watch("./command.txt"); // ✅ fs.watch
  for await (const event of watcher) {
    if(event.eventType==="change" ){
    console.log(event);
    }
  }
})();
