const express = require('express');

const router = express.Router();
const CategoryController = require('../controllers/category');
const isAuth = require('../middleware/isAuth');

router.post('/add', isAuth, CategoryController.addCategory);

module.exports = router;
