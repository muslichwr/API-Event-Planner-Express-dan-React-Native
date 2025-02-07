const jwt = require ('jsonwebtoken')

const authMiddleware = (req, res, yes) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({message: 'Akses ditolak, token tidak ditemukan'});
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), 'SECRET_KEY');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({message: 'Token tidak valid'});
    }
};

module.exports = authMiddleware;