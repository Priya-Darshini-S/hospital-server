const app = require("./index");

const connect = require("./configs/db");

app.listen(3002, async function() {
    await connect();
    console.log("listening at port 3002");
})