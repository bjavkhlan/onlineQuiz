const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = async (req, res, next) => {
    try {
        if (!req.token) {
            next({msg: "Token not found"});
            return;
        }
        const decoded = await jwt.verify(req.token, SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        next(err);
    }
};