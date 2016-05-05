const studentsModel = require('../models/students_model');

module.exports = {
  getAll: function(req, res) {
    params = [];
    studentsModel.getAll(params, function (err, results) {
      if (err) {
        res.sendStatus(500);
      }
      res.json(results);
    });
  }
};