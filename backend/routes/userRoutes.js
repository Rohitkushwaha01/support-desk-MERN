const express = require("express");
const router = express.Router();
const { RegisterUser, loginUser, getMe } = require("../controllers/UserController");
const {protect} = require('../middleware/authMiddleware')
// Register route
router.post("/register", RegisterUser);

// Login Route
router.post("/login", loginUser);

// current user Route
router.get('/me', protect ,getMe);

module.exports = router;
