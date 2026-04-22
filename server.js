const express = require("express");

const DB_Connection = require("./configs/db");
const userRoutes = require("./routes/user.routes");

const app = express();
app.use(express.json());

app.use("/user", userRoutes);

const PORT = 4000;

app.get("/", async (req, res) => {
    res.send("Server is up");
});

app.get("/health", async (req, res) => {
    res.status(200).send("server is healthy");
});

app.listen(PORT, async () => {
    try {
        await DB_Connection;
        console.log("DataBase Connected");
    } catch (error) {
        console.log("DB Connection Error");
    }
    console.log(`Server running: ${PORT}`);
});