const express = require('express')
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/db");
const postRoutes = require("./Routes/postRoutes");

dotenv.config();
connectDb();

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/posts", postRoutes);

app.listen(PORT, console.log(`app is running on ${PORT}`)); 