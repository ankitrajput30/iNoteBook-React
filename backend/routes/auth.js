const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'Harryisagoodboy';


//ROUTE 1: Create a user using: POST "/api/auth/createuser". (Login not required)
router.post('/createuser', [
     body('name', 'Enter a valid name').isLength({ min: 3 }),
     body('email', 'Enter a valid email').isEmail(),
     body('password', 'Password must be atleast 8 characters ').isLength({ min: 8 }),
], async (req, res) => {
     success = false;
     //If there are any error, return Bad request and the error message. 
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
          return res.status(400).json({ success, errors: errors.array() });
     }
     //Check whether the email is unique or not for every user.
     try {
          let user = await User.findOne({ email: req.body.email });
          if (user) {
               return req.status(400).json({ success, error: "Sorry a user with this email already exists message by delevoper ankit" })
          }

          const salt = await bcrypt.genSalt(10);
          secPass = await bcrypt.hash(req.body.password, salt);
          secPass2 = await bcrypt.hash(req.body.password, salt);
          // console.log(secPass);
          // console.log(secPass2);

          //create a new user
          user = await User.create({
               name: req.body.name,
               password: secPass,
               email: req.body.email,
          });

          const data = {
               user: {
                    id: user.id
               }
          }
          const authtoken = jwt.sign(data, JWT_SECRET);

          // res.json(user)
          success = true;
          res.json({ success, authtoken })

     } catch (error) {
          console.log(error.message);
          res.send("Some error Occured");
     }
})

//ROUTE 2: Authenticate a user using: POST "/api/auth/login". (Login not required)
router.post('/login', [
     body('email', 'Enter a valid email').isEmail(),
     body('password', 'Password must be atleast 8 characters').exists(),
], async (req, res) => {
     success = false
     //If there are any error, return Bad request and the error message. 
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
     }

     const { email, password } = req.body;
     try {
          let user = await User.findOne({ email });
          if (!user) {
               success = false
               return res.json({ error: "Please try to login with correct credentials" });
          }

          const passwordCompare = await bcrypt.compare(password, user.password);
          if (!passwordCompare) {
               success = false;
               return res.json({ success, error: "Incorrect details::Please try to login again" });
          }

          const data = {
               user: {
                    id: user.id
               }
          }
          const authtoken = jwt.sign(data, JWT_SECRET);
          success = true;
          res.json({ success, authtoken })

     } catch (error) {
          console.log(error.message);
          res.send("Internal Server Error");
     }
});

//ROUTE 3: Get loogedin user details using: POST "/api/auth/getuser". (Login not required)
router.post('/getuser', fetchuser, async (req, res) => {
     try {
          userId = req.user.id;
          const user = await User.findById(userId).select("-password")
          res.send(user)
     } catch (error) {
          console.log(error.message);
          res.send("Internal Server Error");
     } 
})

module.exports = router