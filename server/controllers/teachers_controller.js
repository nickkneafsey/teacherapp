const teachersModel = require('../models/teachers_model');

module.exports = {
  getAll: function(req, res) {
    params = [];
    teachersModel.getAll(params, function (err, results) {
      if (err) {
        res.sendStatus(500);
      }
      res.json(results);
    });
  }
};