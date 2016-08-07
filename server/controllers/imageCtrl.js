var app = require('../server');
var db = app.get('db');


module.exports = {

  readImages: function(req, res){
    db.read_images(function(err, response){
      if(err){
        res.send(err);
      } else {
        res.send(response);
      }
    });
  },

  createImages: function(req, res){
    var imageSchema = [
      req.body.title,
      req.body.description,
      req.body.imageurl
    ];
    db.create_images(imageSchema, function(err, response){
      if(err){
        res.send(err);
      } else {
        res.send(response);
        console.log('succesfully added!');
      }
    });
  },

  updateImages: function(req, res){
    var updateSchema = [
      req.params.id,
      req.body.title,
      req.body.description,
      req.body.imageurl
    ];
    db.update_images(updateSchema, function(err, response){
      if(err){
        res.send(err);
      } else {
        res.send(response);
      }
    });
  },

  deleteImage: function(req, res){
    db.delete_images([req.params.id], function(err, response){
      if(err){
        res.send(err);
      } else {
        res.send(response);
      }
    });
  }

};
