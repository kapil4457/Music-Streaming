const express = require("express");
const { newSong ,deleteSong , updateLikes , getAllSong , getSingleSong, getAllSongsFromParticularSong } = require("../controllers/songController");
const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth.js");


const router = express.Router();
module.exports = router;


router.route("/create/new").post(isAuthenticatedUser , authorizeRole("admin") , newSong)


router.route("/delete/song").delete(isAuthenticatedUser , authorizeRole("admin") , deleteSong)

router.route("/update/likes").post(isAuthenticatedUser , authorizeRole("admin") , updateLikes)

router.route("/all/songs").get(getAllSong)

router.route("/song/:name").get(getSingleSong)

router.route("/songs/:name").get(getAllSongsFromParticularSong)