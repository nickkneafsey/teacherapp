const classesModel = require('../models/classes_model');

module.exports = {
  getAll: function(req, res) {
    params = [];
    classesModel.getAll(params, function (err, results) {
      if (err) {
        res.sendStatus(500);
      }
      res.json(results);
    });
  }
};