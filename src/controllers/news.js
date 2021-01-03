const News = require('../models/News');

exports.getAllNews = async (req, res, next) => {
  try {
    const allNews = await News.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: 'Data fetched succesfully',
      allNews
    });
  } catch (error) {
    res.status(500).json({
      message: "Couldn't fetch data"
    });
  }
};
