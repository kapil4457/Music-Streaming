const express = require("express");
const { registerUser , loginUser ,logout ,getUserDetails,getAllUsers,updatePassword,updateProfile,deleteUser,changeUserRole } = require("../controllers/useController.js");
const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth.js");


const router = express.Router();
module.exports = router;


router.route("/register/user").post(registerUser)
router.route("/login/user").post(loginUser);
router.route("/logout").post(isAuthenticatedUser , logout);
router.route("/user/details").get(isAuthenticatedUser , getUserDetails);
router.route("/admin/users/all").get(isAuthenticatedUser , authorizeRole("admin") , getAllUsers);
router.route("/admin/update/password").put(isAuthenticatedUser , updatePassword)
router.route("/admin/update/profile").put(isAuthenticatedUser , updateProfile)
router.route("/admin/delete/user").delete(isAuthenticatedUser , authorizeRole("admin") , deleteUser);
router.route("/admin/change/user/role").put(isAuthenticatedUser, authorizeRole("admin") , changeUserRole)