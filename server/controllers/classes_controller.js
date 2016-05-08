const classesModel = require('../models/classes_model');

module.exports = {
  getAll: function(req, res) {
    const params = [];
    classesModel.getAll(params, function (err, results) {
      if (err) { res.sendStatus(500); }
      res.json(results);
    });
  },

  getOneClass: function(req, res) {
    const params = [req.params.id];
    classesModel.getOneClass(params, function(err, results) {
      if (err) { res.sendStatus(500); }
      res.json(results);
    })
  },

  getStudentsInClass: function(req, res) {
    const params = [req.params.id];
    classesModel.getStudentsInClass(params, function(err, results) {
      if (err) { res.sendStatus(500); }
      res.json(results);
    })
  }
};