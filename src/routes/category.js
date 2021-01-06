const express = require('express');

const router = express.Router();
const CategoryController = require('../controllers/category');
const isAuth = require('../middleware/isAuth');

router.post('/add', isAuth, CategoryController.addCategory);

router.put('/:id', CategoryController.updateCategory);

module.exports = router;
