const express = require("express");
const cors = require("cors");
const DBConnection = require("./config/database");
const movieRoutes = require("./routes/movieRoutes");

const app = express();
DBConnection();

app.use(
  cors({
    origin: "http://localhost:4200",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use("/api", movieRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
