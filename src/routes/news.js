const express = require('express');

const router = express.Router();
const NewsController = require('../controllers/news');
const isAuth = require('../middleware/isAuth');

router.get('', NewsController.getAllNews);

router.post('/addNews', isAuth, NewsController.addNews);

router.put('/:id', isAuth, NewsController.updateNews);

router.get('/:id', NewsController.getNewsDetails);

module.exports = router;
