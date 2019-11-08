const router = require("express").Router();
const Workout = require("../models/workout.js");

//const db = mongojs("workout", ["workout"]);


// router.get("/api/workouts", function(req, res){
//     //console.log("hello");
//     Workout.find({}, (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             //console.log(data);
//             res.json(data);
//         }
//     })
// })

router.post("/api/workouts", function (req, res) {
    
})


module.exports = router;
