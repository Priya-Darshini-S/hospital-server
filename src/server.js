
const app = require("./index");
const connect = require("./configs/db");
const cors = require ("cors");
app.use(cors());

const PORT = process.env.PORT || 5001;


app.listen(PORT, async function() {
    await connect();
    console.log(`listening at port ${PORT}`);
})