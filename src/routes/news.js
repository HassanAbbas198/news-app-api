const express = require('express');

const router = express.Router();
const NewsController = require('../controllers/news');

router.post('/addNews', NewsController.addNews);

router.get('', NewsController.getAllNews);

router.get('/:id', NewsController.getNewsDetails);

module.exports = router;
