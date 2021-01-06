const News = require('../models/News');
const Category = require('../models/Category');

exports.addNews = async (req, res, next) => {
  const category = req.body.category;
  const result = await Category.findOne({ name: category });

  const news = new News({
    headline: req.body.headline,
    description: req.body.description,
    category: result._id
  });

  try {
    const addedNews = await news.save();
    res.status(201).json({
      message: 'News added successfully',
      result: addedNews
    });
  } catch (error) {
    res.status(500).json({
      message: 'Creation failed'
    });
  }
};

exports.updateNews = async (req, res, next) => {
  const updatedNews = new News({
    _id: req.params.id,
    headline: req.body.headline,
    description: req.body.description
  });

  try {
    const result = await News.updateOne({ _id: req.params.id }, updatedNews);
    if (result.n > 0) {
      res.status(200).json({
        message: 'Post updated successfully'
      });
    } else {
      res.status(401).json({
        message: 'Not authorized'
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Could not update post'
    });
  }
};

exports.getAllNews = async (req, res, next) => {
  const pageSize = +req.query.pagesize || 10;
  const currentPage = +req.query.page || 1;

  const newsQuery = News.find().sort({ createdAt: -1 }).populate('category');

  if (pageSize && currentPage) {
    newsQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }

  try {
    const allNews = await newsQuery;

    res.status(200).json({
      message: 'Data fetched successfully',
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
