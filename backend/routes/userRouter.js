const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getUserDetails,
  getAllUsers,
  updatePassword,
  updateProfile,
  deleteUser,
  changeUserRole,
  applySinger,
  usersWhoAppliedForSinger,
} = require("../controllers/useController.js");
const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth.js");

const router = express.Router();
module.exports = router;

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(isAuthenticatedUser, logout);
router.route("/user/details").get(isAuthenticatedUser, getUserDetails);
router
  .route("/admin/users/all")
  .get(isAuthenticatedUser, authorizeRole("admin"), getAllUsers);
router
  .route("/admin/users/applied")
  .get(isAuthenticatedUser, authorizeRole("admin"), usersWhoAppliedForSinger);
router.route("/update/password").put(isAuthenticatedUser, updatePassword);
router.route("/update/profile").put(isAuthenticatedUser, updateProfile);
router
  .route("/admin/delete/:id")
  .delete(isAuthenticatedUser, authorizeRole("admin"), deleteUser);
router
  .route("/admin/change/role/:id")
  .put(isAuthenticatedUser, authorizeRole("admin"), changeUserRole);
router
  .route("/apply/singer")
  .put(isAuthenticatedUser, authorizeRole("user"), applySinger);
