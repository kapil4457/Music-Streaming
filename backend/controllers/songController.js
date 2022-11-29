const Song = require("../models/songModels");
const User = require("../models/UserSchema");

exports.newSong = async (req, res, next) => {
  try {
    const { title, songLink, artist, coverPoster, language } = req.body;
    const song = await Song.create({
      title,
      songLink,
      artist,
      coverPoster,
      language,
      likes: 0,
      uploaded: Date.now(),
    });

    await artist.forEach(async (member) => {
      const singer = await User.findById(member.id);
      singer.mySongs.push({
        id: song._id,
      });
      await singer.save();
    });

    await res.status(200).send({ success: true, song });
  } catch (err) {
    await res.status(500).send({ success: false, message: err.message });
  }
};

exports.deleteSong = async (req, res, next) => {
  try {
    const data = await Song.findByIdAndDelete(req.params.id);
    await res.status(200).send({ success: true, data });
  } catch (err) {
    await res.status(500).send({ success: false, message: err.message });
  }
};

exports.updateLikes = async (req, res, next) => {
  try {
    const song = await Song.findById(req.params.id);
    const user = await User.findById(req.user.id);
    const upOrDown = req.body.type;

    if (upOrDown == "up") {
      const temp = user.likedSongs;
      for (var i = 0; i < temp.length; i++) {
        if (temp[i]?.id == req.params.id) {
          res.status(200).send({
            success: false,
            message: "You have already added it to the favourites",
          });
          return;
        }
      }

      song.likes = song.likes + 1;
      await song.save();
      user.likedSongs.push({
        id: song._id,
      });
      await user.save();
    } else {
      if (
        user.likedSongs.includes({
          id: song._id,
        })
      ) {
        const temp = [];
        user.likedSongs.forEach((song) => {
          if (song.id !== req.params.id) {
            temp.push(song);
          }
        });

        user.likedSongs = temp;
        await user.save();
      }

      song.likes = song.likes - 1;
      await song.save();
    }

    await res.status(200).json({ success: true, song });
  } catch (err) {
    await res.status(500).send({ success: false, message: err.message });
  }
};

exports.getAllSong = async (req, res, next) => {
  try {
    const allSongs = await Song.find();

    await res.status(200).json({ success: true, allSongs });
  } catch (err) {
    await res.status(500).send({ success: false, message: err.message });
  }
};

exports.getSingleSong = async (req, res, next) => {
  try {
    const song = await Song.findById(req.params.id);

    await res.status(200).json({ success: true, song });
  } catch (err) {
    await res.status(500).send({ success: false, message: err.message });
  }
};

exports.getAllSongsFromParticularSinger = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const songs = [];
    for (var i = 0; i < user?.mySongs?.length; i++) {
      const song = await Song.findById(user?.mySongs[i]?.id);
      if (song) {
        songs.push(song);
      }
    }
    await res.status(200).json({ success: true, songs });
  } catch (err) {
    await res.status(500).send({ success: false, message: err.message });
  }
};

//get latestSongs

exports.getLatestSongs = async (req, res, next) => {
  try {
    const songs = await Song.find().sort({ uploaded: -1 });
    await res.status(200).json({ success: true, songs });
  } catch (err) {
    await res.status(400).send({ success: false, message: err.message });
  }
};

exports.getTrendingSongs = async (req, res, next) => {
  try {
    const songs = await Song.find({}).sort({ likes: -1 });
    await res.status(200).json({ success: true, songs });
  } catch (err) {
    await res.status(400).send({ success: false, message: err.message });
  }
};
