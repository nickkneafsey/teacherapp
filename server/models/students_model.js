const db = require('../db');

module.exports = {
  getAll: function(params, callback) {
    const queryStr = "SELECT * FROM students";
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    });
  },
  addPhotoUrl: function(params, callback) {
    const queryStr = "UPDATE students SET image_url=? WHERE id=?";
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    })
  }
}