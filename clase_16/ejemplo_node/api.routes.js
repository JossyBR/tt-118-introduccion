const express = require('express');

const router = express.Router();

const userRouter = require("./src/routes/user.routes");
const movieRouter = require("./src/routes/movies.routes")

router.use("/users", userRouter)
router.use("/movies", movieRouter)

module.exports = router