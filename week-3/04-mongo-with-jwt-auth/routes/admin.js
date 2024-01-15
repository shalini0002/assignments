const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const {JWT_SECRET }= require("../config");


// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
   const password = req.body.password;
    
  await Admin.create({
    username: username,
    password: password
   })
   .then(function(){
    res.json({
        msg: "admin created succesfully"
       })
   })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
   const password = req.body.password;
console.log(JWT_SECRET);
   const user = await User.find({
    username,
    password
   })
   if(user){
    const token = jwt.sign({
        username
       }, JWT_SECRET);

       res.json({
        token
       })
   }else{
    res.status(411).json({
        msg: "Incorrect email and pass"
    })
   }
   
});


router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;