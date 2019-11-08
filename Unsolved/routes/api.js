const router = require("express").Router();
const Workout = require("../models/workout.js");

//const db = mongojs("workout", ["workout"]);


router.get("/api/workouts", function (req, res) {
    //console.log("hello");
    Workout.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(data);
            res.json(data);
        }
    })
})

// router.post("/api/workouts", (req, res) => {
//     console.log(req.body)
//     Workout.create({})
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

// router.put("/api/workouts/:id", function (req, res) {
//     //let id = req.params.id;
//     console.log(req.params.id);
//     console.log(req.body);
//     Workout.update(
//         {
//             _id: mongojs.ObjectId(req.params.id)
//         },
//         {
//             $set: req.body
//         },
//         (error, data) => {
//             if (error) {
//                 res.send(error);
//             } else {
//                 res.send(data);
//             }
//         }
//     )
// })

router.post("/api/workouts", function (req, res) {
    //console.log(req);

    Workout.create(req.body, function (error, data) {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    })
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;
