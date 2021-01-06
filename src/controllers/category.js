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
    if (error.code === 11000) {
      return res.status(500).json({
        message: 'Category already exists'
      });
    }
    res.status(500).json({
      message: 'Creation failed'
    });
  }
};

exports.updateCategory = async (req, res, next) => {
  const updatedCategory = new Category({
    _id: req.params.id,
    name: req.body.name
  });

  try {
    const result = await Category.updateOne(
      { _id: req.params.id },
      updatedCategory
    );
    if (result.n > 0) {
      res.status(200).json({
        message: 'Category updated successfully'
      });
    } else {
      res.status(401).json({
        message: 'Not authorized'
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Could not update category'
    });
  }
};
