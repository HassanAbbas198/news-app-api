const jwt = require('jsonwebtoken');

const User = require('../models/User');
const ENV = require('../config/config');

exports.userLogin = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json({
        message: 'Invalid Email address!'
      });
    }

    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id
      },
      ENV.JWT_KEY,
      { expiresIn: '24d' }
    );

    res.status(200).json({
      token,
      expiresIn: 2000000,
      userId: user._id
    });
  } catch (error) {
    return res.status(401).json({
      message: 'Authentication failed!'
    });
  }
};
