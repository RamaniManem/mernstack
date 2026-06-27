const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

connectDB();

app.use("/api", studentRoutes);

app.get("/", (req, res) => {
    res.send("Student Portfolio Backend Running...");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});