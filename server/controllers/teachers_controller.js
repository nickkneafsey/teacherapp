const teachersModel = require('../models/teachers_model');
const Jimp = require('jimp');
const AWS = require('aws-sdk');
const config = require('../../config') || {};
AWS.config.update({
  accessKeyId: config.ACCESS_KEY_ID || process.env.accesskey,
  secretAccessKey: config.SECRET_ACCESS_KEY || process.env.secretaccess,
  region: 'us-east-1'
});

const s3 = new AWS.S3();

module.exports = {
  getAll: function(req, res) {
    params = [];
    teachersModel.getAll(params, function (err, results) {
      if (err) { res.sendStatus(500); }
      res.json(results);
    });
  },

  getOneTeacher: function(req, res) {
    params = [req.params.id];
    teachersModel.getOneTeacher(params, function(err, results) {
      if (err) { res.sendStatus(500); }
      res.json(results);
    })
  },

  getTeachersClasses: function(req, res) {
    params = [req.params.id];
    teachersModel.getTeachersClasses(params, function(err, results) {
      if (err) { res.sendStatus(500); }
      res.json(results);
    })
  },

  addPhotoUrl: function(req, res) {
    const id = req.params.id;
    const fileName = Math.floor(Math.random()*5000) + req.file.originalname.replace(/ /gi, '_');
    const url = 'https://s3.amazonaws.com/' + config.BUCKET_NAME + '/' + fileName;

    const params = {
      Bucket: config.BUCKET_NAME || process.env.bucket,
      Key: fileName,
      ACL: 'public-read',
      ContentType: req.file.mimetype,
      Body: req.file.buffer
    };

    s3.putObject(params, function(err, data) {
      console.log('DATA', data)
      if (err) { res.send(500); }

      const params = [url, id];
      teachersModel.addPhotoUrl(params, function(err, results) {
        if(err) { res.send(500); }
        res.send(200);
      })

    })

  }
};