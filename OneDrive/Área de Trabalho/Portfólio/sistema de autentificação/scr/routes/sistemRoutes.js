const express = require ('express');
const sistemController = require ('../controllers/sistemController');

const router = express.Router();

router.post('/register', sistemController.register);
router.post('/login', sistemController.login);
router.get('/profile', sistemController.getUserProfile);

module.exports = router;