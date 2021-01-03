const express = require('express');

const router = express.Router();
const NewsController = require('../controllers/news');

router.post('/addNews', NewsController.addNews);

module.exports = router;
