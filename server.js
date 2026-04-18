const app = require("./src/app");
const config = require("./src/config/env");

app.listen(config.port,()=>{
    console.log(`\n     Server is running in ${config.env} mode,  on:  http://localhost:${config.port}\n`);
});