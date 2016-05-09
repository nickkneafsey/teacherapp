const studentsModel = require('../models/students_model');
const Jimp = require('jimp');
const AWS = require('aws-sdk');
const config = {};
if (!process.env.deployCheck) {
  config = require('../../config');
}

AWS.config.update({
  accessKeyId: config.ACCESS_KEY_ID || process.env.ACCESS_KEY_ID,
  secretAccessKey: config.SECRET_ACCESS_KEY || process.env.SECRET_ACCESS_KEY,
  region: 'us-east-1'
});

const s3 = new AWS.S3();

module.exports = {
  getAll: function(req, res) {
    const params = [];
    studentsModel.getAll(params, function (err, results) {
      if (err) { res.sendStatus(500); }
      res.json(results);
    });
  },

  getOneStudent:function(req, res) {
    const params = [req.params.id];
    studentsModel.getOneStudent(params, function(err, results) {
      if (err) { res.sendStatus(500); }
      res.json(results);
    })
  },

  getStudentsSchedule: function(req, res) {
    const params = [req.params.id];
    studentsModel.getStudentsSchedule(params, function(err, results) {
      if (err) { res.sendStatus(500); }
      res.json(results);
    })
  },

  getStudentsNotInClass: function(req, res) {
    const params = [req.params.id];
    studentsModel.getStudentsNotInClass(params, function(err, results) {
      if (err) { res.sendStatus(500); }
      res.json(results);
    })
  },

  addPhotoUrl: function(req, res) {
    const id = req.params.id;
    const fileName = Math.floor(Math.random()*5000) + req.file.originalname.replace(/ /gi, '_') //+Math.floor(Math.random()*5000)
    const bucket = config.BUCKET_NAME || process.env.bucket,
    const url = 'https://s3.amazonaws.com/' + bucket + '/' + fileName;

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
      studentsModel.addPhotoUrl(params, function(err, results) {
        if(err) { res.send(500); }
        res.send(200);
      })

    })

  }
};