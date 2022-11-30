const express = require("express");
const {
  newSong,
  deleteSong,
  updateLikes,
  getAllSong,
  getSingleSong,
  getAllSongsFromParticularSinger,
  getLatestSongs,
  getTrendingSongs,
  getFavourites,
  search,
} = require("../controllers/songController");
const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth.js");

const router = express.Router();
module.exports = router;

router
  .route("/create/song")
  .post(isAuthenticatedUser, authorizeRole("singer"), newSong);

router
  .route("/delete/song/:id")
  .delete(isAuthenticatedUser, authorizeRole("singer"), deleteSong);

router.route("/update/likes/:id").put(isAuthenticatedUser, updateLikes);

router.route("/all/songs").get(getAllSong);

router.route("/song/:id").get(getSingleSong);

router.route("/songs/artist/:id").get(getAllSongsFromParticularSinger);
router.route("/latest/songs").get(getLatestSongs);
router.route("/trending/songs").get(getTrendingSongs);
router.route("/favourites/songs/:id").get(getFavourites);
router.route("/search/:name").get(search);
