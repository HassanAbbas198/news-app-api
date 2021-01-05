const Category = require('../models/Category');

exports.addCategory = async (req, res, next) => {
  const category = new Category({
    name: req.body.name
  });

  try {
    const result = await category.save();
    res.status(201).json({
      message: 'Category added successfully',
      result
    });
  } catch (error) {
    res.status(500).json({
      message: 'Creation failed'
    });
  }
};
