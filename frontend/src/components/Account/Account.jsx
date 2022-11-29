import React, { useEffect } from "react";
import "./Account.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  deleteUser,
  getAllUsers,
  makeSinger,
  updateUser,
  userAplliedForSingers,
} from "../../redux/actions/userAction";
import axios from "axios";
import { sha1 } from "crypto-hash";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  createSong,
  deleteSong,
  getAllSongs,
  getAllSongsFromParticularSinger,
} from "../../redux/actions/songAction";
import Loader from "../Loader/Loader";
const Account = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
  const { users } = useSelector((state) => state.allUsers);
  const { songs } = useSelector((state) => state.allSongs);
  const mySongs = useSelector((state) => state.songFromParticularSinger);
  const singerApp = useSelector((state) => state.singerApplication);
  const { isDeleted } = useSelector((state) => state.deleteSong);
  const { isCreated } = useSelector((state) => state.createSong);
  const { data } = useSelector((state) => state.makeSinger);
  const [display, setDisplay] = useState("none");
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [file, setFiles] = useState(null);
  const [prevClass, setPrevClass] = useState("one");
  const [currentClass1, setcurrentClass1] = useState("my-songs");
  const [songUpload, setSongUpload] = useState(null);
  const [coverUpload, setCoverUpload] = useState(null);
  const [songName, setSongName] = useState("");
  const [songLang, setSongLang] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFile = (e) => {
    const files = Array.from(e.target.files);

    setFiles([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setFiles((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const updateUserFunc = async () => {
    try {
      if (file !== null) {
        // Deleting the previous profile pic
        const public_id = user?.avatar?.public_id;
        const timestamp = new Date().getTime();
        const string = `public_id=${public_id}&timestamp=${timestamp}tJfGYEl5F5FNZutSI0P1QWM6rI8`;
        const signature = await sha1(string);
        const formData = new FormData();
        formData.append("public_id", public_id);
        formData.append("signature", signature);
        formData.append("api_key", "642948771913215");
        formData.append("timestamp", timestamp);
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/ds82kuoet/image/destroy`,
          formData
        );
        // Uploading new image

        const formData1 = new FormData();
        formData1.append("file", file);
        formData1.append("upload_preset", "user_avatar");

        const { data } = await axios.post(
          `https://api.cloudinary.com/v1_1/ds82kuoet/image/upload`,
          formData1
        );
        toast("Please Wait...");
        setTimeout(() => {
          let thisData = {
            public_id: data.public_id,
            url: data.url,
          };
          toast("Updating your account...");
          dispatch(
            updateUser({
              name: name,
              email: email,
              avatar: thisData,
            })
          );
          toast("Account updated successfully");
          setDisplay("none");
          setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 2000);
        }, 4000);
      } else {
        const temp = {
          name: name,
          email: email,
          avatar: user?.avatar,
        };

        dispatch(updateUser(temp));
        toast("Profile updated successfully");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleFile1 = (e) => {
    const files = Array.from(e.target.files);

    setCoverUpload([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setCoverUpload((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };
  const handleFile2 = (e) => {
    const files = Array.from(e.target.files);

    setSongUpload([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setSongUpload((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const createSongFunc = async () => {
    if (!songName || !coverUpload || !songUpload || !songLang) {
      toast("Please fill in all the details..");
      return;
    }
    toast("Please wait..It will take some time...");
    toast("It may take upto 15 seconds");

    //Uploading the album cover
    const formData = new FormData();
    formData.append("file", coverUpload);
    formData.append("upload_preset", "music_cover");

    const d1 = await axios.post(
      "https://api.cloudinary.com/v1_1/ds82kuoet/image/upload",
      formData
    );

    //Uploading track
    const formData1 = new FormData();
    formData1.append("file", songUpload);
    formData1.append("upload_preset", "music_song");

    const d2 = await axios.post(
      "https://api.cloudinary.com/v1_1/ds82kuoet/video/upload",
      formData1
    );

    setTimeout(() => {
      var songData = {
        title: songName,
        songLink: {
          public_url: d2.data.public_id,
          url: d2.data.url,
        },
        artist: [
          { name: user?.name, id: user?._id, avatar: user?.avatar?.url },
        ],
        language: songLang,
        coverPoster: {
          public_id: d1.data.public_id,
          url: d1.data.url,
        },
      };

      dispatch(createSong(songData));
    }, 7000);
  };

  useEffect(() => {
    if (user?.role == "admin") {
      dispatch(getAllUsers());
      dispatch(getAllSongs());
      dispatch(userAplliedForSingers());
      var t = document.getElementById(prevClass);
      t.classList.add("active_admin_dahboard");
    }

    if (user?.role == "singer") {
      dispatch(
        getAllSongsFromParticularSinger({ name: user?.name, id: user?._id })
      );
      var temp = document.getElementById(currentClass1);
      temp.classList.add("active_singer_dashboard");
    }

    if (isDeleted) {
      toast("Song Deleted successfully");
    }
    if (isCreated) {
      toast("Song Created successfully");
    }

    setTimeout(() => {
      if (!isAuthenticated && loading == false) {
        navigate("/login");
      }
    }, 1000);
  }, [isAuthenticated, data, isDeleted, isCreated]);

  return (
    <>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="main_account_page">
          <div className="first_part">
            <div className="updateCard" style={{ display: `${display}` }}>
              <div className="card">
                <CloseIcon
                  onClick={() => {
                    setDisplay("none");
                  }}
                />
                <input
                  type="text"
                  placeholder="Please Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Please Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div>
                  <label htmlFor="">Select new Avatar</label>
                  <input type="file" onChange={handleFile} />
                </div>
                <button onClick={updateUserFunc}>Update</button>
              </div>
            </div>
            <img src={user?.avatar?.url} alt="" />
            <div className="left_part_account">
              <h2>Name : {user?.name}</h2>
              <h2>Email : {user?.email}</h2>
              <button
                onClick={() => {
                  setDisplay("flex");
                }}
              >
                Update Profile
              </button>
            </div>
          </div>
          {user?.role == "admin" ? (
            <div className="second_part">
              <h1>Admin Dashboard</h1>
              <div className="admin_navbar">
                <p
                  id="one"
                  onClick={() => {
                    var temp = document.getElementById("one");
                    if (prevClass) {
                      var temp2 = document.getElementById(prevClass);
                      temp2.classList.remove("active_admin_dahboard");
                    }
                    temp.classList.add("active_admin_dahboard");
                    setPrevClass("one");
                  }}
                >
                  All Users
                </p>
                <p
                  id="two"
                  onClick={() => {
                    var temp = document.getElementById("two");
                    if (prevClass) {
                      var temp2 = document.getElementById(prevClass);
                      temp2.classList.remove("active_admin_dahboard");
                    }
                    temp.classList.add("active_admin_dahboard");
                    setPrevClass("two");
                  }}
                >
                  All Songs
                </p>
                <p
                  id="three"
                  onClick={() => {
                    var temp = document.getElementById("three");
                    if (prevClass) {
                      var temp2 = document.getElementById(prevClass);
                      temp2.classList.remove("active_admin_dahboard");
                    }
                    temp.classList.add("active_admin_dahboard");
                    setPrevClass("three");
                  }}
                >
                  Pending Requests
                </p>
              </div>

              <div className="container">
                {prevClass == "one" ? (
                  <div className="allUsers">
                    <h2>User Count : {users?.userCount}</h2>
                    <div className="card_blocks">
                      {users?.users?.map((user, key) => (
                        <div className="user_card" key={key}>
                          <img src={user?.avatar?.url} alt="" />
                          <div className="user_info">
                            <p>Name : {user?.name}</p>
                            <p>Email : {user?.email}</p>
                            <p>Role: {user?.role}</p>
                            <p>Joined On : {user?.createdAt.substr(0, 10)}</p>
                          </div>
                          <div className="btns">
                            <div
                              className="del"
                              onClick={() => {
                                dispatch(deleteUser(user));
                                toast("User deleted successfully!!");
                                setTimeout(() => {
                                  window.location.reload();
                                }, 2000);
                              }}
                            >
                              <p>Delete</p>
                              <DeleteIcon />
                            </div>
                            <select
                              onChange={(e) => {
                                dispatch(
                                  makeSinger({
                                    id: user?._id,
                                    role: e.target.value,
                                  })
                                );
                                toast("User Updated Successfully");
                              }}
                            >
                              <option value="" hidden className="opt">
                                Update User Role
                              </option>

                              {user?.role == "admin" ||
                              user?.role == "singer" ? (
                                <option value="user" className="opt">
                                  User
                                </option>
                              ) : (
                                <></>
                              )}
                              {user?.role == "singer" ||
                              user?.role == "user" ? (
                                <option value="admin" className="opt">
                                  Admin
                                </option>
                              ) : (
                                <></>
                              )}
                            </select>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                {prevClass == "two" ? (
                  <div className="all_songs">
                    {songs?.allSongs?.map((song, k) => (
                      <div className="song_card" key={k}>
                        {/* <img src={song?.coverPoster?.url} alt="" /> */}
                        <img
                          src="https://www.udiscovermusic.com/wp-content/uploads/2014/09/Best-Cover-Songs-Facebook-image.jpg"
                          alt=""
                        />
                        <div>
                          <p>Title : {song?.title}</p>
                          <div className="artists_container">
                            <p>Artists :</p>
                            <div className="artist">
                              {song?.artist?.map((artist, key) => (
                                <p key={key}>{artist?.name}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <></>
                )}
                {prevClass == "three" ? (
                  <div className="singer_approval">
                    <h1>Pending Approval : {singerApp?.users?.count} </h1>
                    {singerApp.users?.users?.map((user, key) => (
                      <div className="user_approval_card" key={key}>
                        <img src={user?.avatar?.url} alt="" />
                        <div className="info">
                          <p>Name : {user?.name}</p>
                          <p>Email : {user?.email}</p>
                          <p>Role : {user?.role}</p>
                        </div>

                        <button
                          onClick={() => {
                            dispatch(
                              makeSinger({ id: user?._id, role: "singer" })
                            );
                            toast("User Updated Successfully !!");
                          }}
                        >
                          Approve
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}

          {user?.role == "singer" ? (
            <>
              <h2>Singer Dashboard</h2>
              <div className="singer_dashboard">
                <div className="navBar">
                  <p
                    onClick={() => {
                      var temp = document.getElementById("my-songs");
                      var temp2 = document.getElementById(currentClass1);
                      temp2.classList.remove("active_singer_dashboard");
                      temp.classList.add("active_singer_dashboard");
                      setcurrentClass1("my-songs");
                    }}
                    id="my-songs"
                  >
                    My Songs
                  </p>
                  <p
                    id="create-song"
                    onClick={() => {
                      var temp = document.getElementById("create-song");
                      var temp2 = document.getElementById(currentClass1);
                      temp2.classList.remove("active_singer_dashboard");
                      temp.classList.add("active_singer_dashboard");
                      setcurrentClass1("create-song");
                    }}
                  >
                    Create Song
                  </p>
                </div>
                <div className="content_space">
                  {currentClass1 == "my-songs" ? (
                    <div className="my-song-list">
                      {mySongs?.songs?.songs?.length == 0 ? (
                        <div className="no-songs">
                          You do not have any songs yet
                        </div>
                      ) : (
                        <>
                          {mySongs?.songs?.songs?.map((song) => (
                            <div className="song_card_main">
                              <img src={song?.coverPoster?.url} alt="" />
                              <div className="info">
                                <p>Title : {song?.title}</p>
                                <p>Language : {song?.language}</p>
                                <p>
                                  Uploaded : {song?.uploaded?.substr(0, 10)}
                                </p>
                              </div>
                              <button
                                onClick={() => {
                                  dispatch(deleteSong({ id: song?._id }));
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  ) : (
                    <></>
                  )}
                  {currentClass1 == "create-song" ? (
                    <div className="create_song_block">
                      <div className="create_song_form">
                        <input
                          type="text"
                          placeholder="Enter the name of the song"
                          value={songName}
                          onChange={(e) => setSongName(e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="Enter the language of the song"
                          value={songLang}
                          onChange={(e) => setSongLang(e.target.value)}
                        />

                        <div>
                          <p>Select the cover for your song</p>
                          <input type="file" onChange={handleFile1} />
                        </div>
                        <div>
                          <p>Select the song </p>
                          <input type="file" onChange={handleFile2} />
                        </div>
                        <button onClick={createSongFunc}>Create</button>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default Account;
