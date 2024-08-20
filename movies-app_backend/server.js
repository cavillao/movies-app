const express = require("express");
const DBConnection = require("./config/database");
const movieRoutes = require("./routes/movieRoutes");

const app = express();
DBConnection();

app.use(express.json());
app.use("/api", movieRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
