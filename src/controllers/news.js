const News = require('../models/News');

exports.addNews = async (req, res, next) => {
  const news = new News({
    headline: req.body.headline,
    description: req.body.description,
    category: req.body.category
  });

  try {
    await news.save();
    res.status(201).json({
      message: 'News added successfully'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Creation failed'
    });
  }
};

exports.getAllNews = async (req, res, next) => {
  try {
    const allNews = await News.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: 'Data fetched succesfully',
      allNews
    });
  } catch (error) {
    res.status(500).json({
      message: 'Could not fetch data'
    });
  }
};