const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect(
        "mongodb+srv://priyas:priyas@cluster0.kga4n.mongodb.net/hospital_app"
    )
}

module.exports = connect;
