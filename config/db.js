const mongoose = require("mongoose");
const ConnectDB = async () => {
    const connect = await mongoose.connect(process.env.DB_CONFIG);
    console.log(`DB connected by ${connect.connection.host}`.blue.underline);
};
module.exports = ConnectDB;