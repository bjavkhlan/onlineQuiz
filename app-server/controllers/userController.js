const mongoose = require('mongoose');

const Users = mongoose.model('User');

module.exports.getUserById = async function(req, res) {
    const user = await Users.find();
    res.json(subjects);
}