const mongoose = require('mongoose');

const Users = mongoose.model('User');
const Subjects = mongoose.model('Subject');

module.exports.getUserQuizes = async function(req, res) {

    try {
    const user = await Users.findOne({username: req.params.username});
    const levels=[];
    for (let level of user.levels)
    levels.push({
        levelId: level.levelId,
        subjectName:'Subject:',
        levelName:'Level:',//await getsubjectname(level.levelId),
        gradeForLevel : level.gradeForLevel
    })  
    res.json(levels);
    }
    catch (err) {
          console.log('error get user  ');
    }




    // const ddd= Users.find({username: req.params.username})
    // .populate('Subject', {'levels._id': '5cbf34f882dfc5193440ee69'})
    // .exec( function(err, user) {
    //     console.log(user.subject.subjectName );
    // }        );


    // async.waterfall(
    //     [
    //         function(callback) {
    //             Users.find({username: req.params.username},callback);
    //         },
    //         function(Subjects,callback) {
    //             WorksnapsTimeEntry.find(
    //                                      {"user": 
    //                                              { "$in": Subjects.map(function(el) 
    //                                                       {
    //                                                           return el._id
    //                                                       }
    //                                              )
    //                                             }
    //                                     },callback
    //                                   )
    //                                 }                
            
    //     ],
    //     function(err,results) {
    //        if (err) {
    //           // do something
    //           console.log('error get user  ');
    //        } else {
    //           // results are the matching entries
    //           res.json(levels);
    //        }
    //     }
    // )


}


