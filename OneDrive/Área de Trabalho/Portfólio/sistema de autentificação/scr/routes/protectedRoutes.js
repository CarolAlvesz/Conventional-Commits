const express = require('express');
const router = express.Router();
const sistemMiddleware = require('../middlewares/sistemMiddleware');

router.get('/dashboard', sistemMiddleware, (req, res) => {
    res.json({
        message: 'Welcome to the protected dashboard!',
        userId: req.userId
    })
})

module.exports = router;