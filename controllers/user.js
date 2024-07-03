const bcrypt = require('bcryptjs');
const db = require('../models');
const { generateAccessToken } = require('../config/token');

const User = db.user;
const saltRound = 10;
module.exports = {
  register: async (req, res) => {
    try {
      const { username, password, email } = req.body;
      console.log(username, password, email);
      const data = {};
      await bcrypt.hash(password, saltRound).then((hash) => {
        data.password = hash;
        data.username = username;
        data.email = email;
        data.updatedAt = new Date();
        data.createdAt = new Date();
      }).catch((err) => res.json(err));
      return await User.create(data).then((item) => res.status(201).json({
        message: 'Success',
        id: item.id,
      })).catch((err) => {
        res.status(500).json({
          message: err.message || 'Some error occurred while creating the account.',
          data: null,
        });
      });
    } catch (error) {
      console.log(1, error);
      return res.status(500).json(error);
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const data = await User.findOne({ where: { username } });
      if (!data) return res.status(300).json({ message: 'Wrong username or password' });
      const { dataValues } = data;
      await bcrypt.compare(password, dataValues.password).then((result) => {
        if (!result) res.status(300).json({ message: 'Wrong username or password' });
      });
      const token = await generateAccessToken(dataValues);
      return res.json({ message: 'Success Login', token });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};