const express = require("express");
const cors = require ("cors");


const app = express();

// const specialityController = require("./controllers/speciality.controller");
// const doctorController = require("./controllers/doctor.controller");
// const availablController = require("./controllers/availability.controller");
// const costController = require("./controllers/cost.controller")

app.use(express.json());

app.use(cors());


// app.get('/', (req, res) => {
//         try {
//             const home = 'Welcome';
    
//             return res.status(201).send(home);
//         } catch (e) {
//             return res.status(500).send({ status: 'FAILED', message: e.message });
//         }
//     });

// app.use("/specs", specialityController);
// app.use("/doctor", doctorController);
// app.use("/avails", availablController);
// app.use("/cost", costController);

module.exports = app;