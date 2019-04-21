module.exports = (req, res, next) => {
    if (req.headers.authorization) {
        const header = req.headers.authorization.split(' ');
        if (header && header.length > 1) req.token = header[1];
    }
    console.log(req.token);
    next();
};
