const Movie = require("../models/Movie");

const getMovies = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res
        .status(400)
        .json({ message: "Query parameter must be a string" });
    }
    const regex = new RegExp(query, "i");

    const movies = await Movie.find({
      title: { $regex: regex },
    });

    if (movies.length === 0) {
      return res.status(404).json({ message: "No movies found." });
    }

    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getMovies };
