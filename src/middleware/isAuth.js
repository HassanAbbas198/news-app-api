const jwt = require('jsonwebtoken');

const ENV = require('../config/config');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, ENV.JWT_KEY);

    // adding this object to every request
    req.userData = {
      userId: decodedToken.userId,
      email: decodedToken.email
    };
    next();
  } catch (error) {
    res.status(401).json({
      message: 'You are not authenticated!'
    });
  }
};
