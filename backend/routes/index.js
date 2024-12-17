const express = require('express');

const router = express.Router()

const userSignUpController = require('../controller/userSignUp')
const userSignInController = require('../controller/userSignIn');
const authToken = require('../middleware/authToken');
const {userDetailsController, updateUserDetails, deleteUser} = require('../controller/userDetails');
const { addMovieToWishlist, removeMovieFromWishlist } = require('../controller/wishListController');
const {addMovieToWatchHistory, removeMovieFromWatchHistory} = require('../controller/watchHistory');




router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.put("/update-user-details", authToken, updateUserDetails);
router.post("/wishlist", authToken, addMovieToWishlist);
router.delete("/remove-wishlist", authToken, removeMovieFromWishlist);
router.delete("/delete-account", authToken, deleteUser);
// router.get("/check-wishlist", authToken, checkwishlist);
router.post("/add-watch-history", authToken, addMovieToWatchHistory);
router.delete("/delete-watch-history", authToken, removeMovieFromWatchHistory);



module.exports = router;