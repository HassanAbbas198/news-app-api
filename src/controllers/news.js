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
  const pageSize = +req.query.pagesize || 10;
  const currentPage = +req.query.page || 1;

  const newsQuery = News.find().sort({ createdAt: -1 });

  if (pageSize && currentPage) {
    newsQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }

  try {
    const allNews = await newsQuery;

    res.status(200).json({
      message: 'Data fetched succesfully',
      data: allNews
    });
  } catch (error) {
    res.status(500).json({
      message: 'Could not fetch data'
    });
  }
};

exports.getNewsDetails = async (req, res, next) => {
  const id = req.params.id;

  try {
    const singleNews = await News.findById(id);

    res.status(200).json({
      singleNews
    });
  } catch (error) {
    res.status(500).json({
      message: 'Could not fetch news details'
    });
  }
};
