// Import dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const { PrismaClient } = require("@prisma/client");
const dotenv = require("dotenv");

// Import custom middleware dan routes
const routes = require("./routes");
const authMiddleware = require("./middlewares/authMiddleware");
const errorMiddleware = require("./middlewares/errorMiddleware");

dotenv.config();
const app = express();
const prisma = new PrismaClient();

// Middleware utama
app.use(cors());
app.use(bodyParser.json());

// Menggunakan routes dari `routes/index.js`
app.use("/api", routes);

// Middleware error handler
app.use(errorMiddleware);

// Rute default
app.get("/", (req, res) => {
  res.send("Hello World! API is Running...");
});

// Menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
