const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const sistemHeader = req.headers.authorization;

    if (!sistemHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const [, token] = sistemHeader.split(' ');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }

}