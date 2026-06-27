const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://ramanimanem957:Honey12345@mycluster957.d24e2zx.mongodb.net/studentPortfolioDB?retryWrites=true&w=majority&appName=mycluster957"
        );

        console.log("✅ MongoDB Atlas Connected Successfully");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;