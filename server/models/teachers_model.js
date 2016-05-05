const db = require('../db');

module.exports = {
  getAll: function(params, callback) {
    const queryStr = "SELECT * FROM teachers";
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    });
  }
}