// const express = require('express')
// const { getAllUsers, registrController, loginController } = require('../controllers/userController')

// //router object
// const router = express.Router();

// //get all users ||get
// router.get('/all-users', getAllUsers);

// //create user || post
// router.post('/register', registrController);

// //login || post
// router.post('/login', loginController);



// module.exports = router



// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//     {
//         username: {
//             type: String,
//             required: [true, "username is required"],
//         },
//         email: {
//             type: String,
//             required: [true, "email is required"],
//         },
//         password: {
//             type: String,
//             required: [true, "password is required"],
//         },
//         blogs: [
//             {
//                 type: mongoose.Types.ObjectId,
//                 ref: "Blog",
//             },
//         ],
//     },
//     { timestamps: true }
// );

// const userModel = mongoose.model("User", userSchema);

// module.exports = userModel;



const express = require("express");
const {
    getAllUsers,
    registerController,
    loginController,
} = require("../controllers/userContoller");

//router object
const router = express.Router();

// GET ALL USERS || GET
router.get("/all-users", getAllUsers);

// CREATE USER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

module.exports = router;