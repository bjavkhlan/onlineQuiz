/**
 * mongo "mongodb+srv://cluster0-beeko.mongodb.net/onlineQuiz" --username onlineQuiz
 */

const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI);


const questionSchema = new mongoose.Schema({
    question: String,
    choices: [String],
    answer: String,
    type: String
});

const levelSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
    levelName: String,
    questions: [questionSchema]
});

const subjectSchema = new mongoose.Schema({
    subjectName: String,
    levels: [levelSchema]
});

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
    levels: [{
        levelId: mongoose.Schema.Types.ObjectId,
        gradeForLevel: {
            correct: Number,
            total: Number
        }
    }]
});

const Subject = mongoose.model('Subject', subjectSchema);
const User = mongoose.model('User', userSchema);

// const gre = new Subject({
//     subjectName: "GRE",
//     levels: [{
//         levelName: "Level 1", 
//         _id: new mongoose.mongo.ObjectID(),
//         questions: [{
//             question: "Test Question 1",
//             choices: ["ans1", "ans2", "ans3"],
//             answer: "ans2",
//             type: "multi"
//         },{
//             question: "Test Question 2",
//             choices: ["ans1", "ans2", "ans3"],
//             answer: "ans2",
//             type: "multi"
//         },{
//             question: "Test Question 3",
//             choices: ["ans1", "ans2", "ans3"],
//             answer: "ans2",
//             type: "multi"
//         }]
//     },{
//         levelName: "Level 2",
//         _id: new mongoose.mongo.ObjectID(), 
//         questions: [{
//             question: "Test Question 1 level 2",
//             choices: ["ans1", "ans2", "ans3"],
//             answer: "ans2",
//             type: "multi"
//         },{
//             question: "Test Question 2 level 2",
//             choices: ["ans1", "ans2", "ans3"],
//             answer: "ans2",
//             type: "multi"
//         },{
//             question: "Test Question 3 level 2",
//             choices: ["ans1", "ans2", "ans3"],
//             answer: "ans2",
//             type: "multi"
//         }]
//     },{
//         levelName: "Level 3", 
//         _id: new mongoose.mongo.ObjectID(),
//         questions: [{
//             question: "Test Question 1 level 3",
//             choices: ["ans1", "ans2", "ans3"],
//             answer: "ans2",
//             type: "multi"
//         },{
//             question: "Test Question 2 level 3",
//             choices: ["ans1", "ans2", "ans3"],
//             answer: "ans2",
//             type: "multi"
//         },{
//             question: "Test Question 3 level 3",
//             choices: ["ans1", "ans2", "ans3"],
//             answer: "ans2",
//             type: "multi"
//         }]
//     }]
// });
// gre.save( (err) => { 
//     console.log(err);
// });

/*


{
    subjectName: "GRE",
    levels: [{
        levelName: "Level 1", 
        questions: [{
            question: "Test Question 1",
            choices: ["ans1", "ans2", "ans3"],
            answer: "ans2",
            type: "multi"
        },{
            question: "Test Question 2",
            choices: ["ans1", "ans2", "ans3"],
            answer: "ans2",
            type: "multi"
        },{
            question: "Test Question 3",
            choices: ["ans1", "ans2", "ans3"],
            answer: "ans2",
            type: "multi"
        }]
    },{
        levelName: "Level 2", 
        questions: [{
            question: "Test Question 1 level 2",
            choices: ["ans1", "ans2", "ans3"],
            answer: "ans2",
            type: "multi"
        },{
            question: "Test Question 2 level 2",
            choices: ["ans1", "ans2", "ans3"],
            answer: "ans2",
            type: "multi"
        },{
            question: "Test Question 3 level 2",
            choices: ["ans1", "ans2", "ans3"],
            answer: "ans2",
            type: "multi"
        }]
    },{
        levelName: "Level 3", 
        questions: [{
            question: "Test Question 1 level 3",
            choices: ["ans1", "ans2", "ans3"],
            answer: "ans2",
            type: "multi"
        },{
            question: "Test Question 2 level 3",
            choices: ["ans1", "ans2", "ans3"],
            answer: "ans2",
            type: "multi"
        },{
            question: "Test Question 3 level 3",
            choices: ["ans1", "ans2", "ans3"],
            answer: "ans2",
            type: "multi"
        }]
    }]
}
*/