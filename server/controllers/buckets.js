var mongoose = require('mongoose');
var Bucket = mongoose.model('Bucket');
var User = mongoose.model('User');
module.exports = (function(){
  return {

  update: function(req, res){
    var id = req.body.id;
    if(req.body.status == false){
      Bucket.update({_id: id}, {$set: {completed: true}}, function(err){
        if(err){
          res.json(err)
        }
        else {
          res.json({message: "Updated!"})
        }
      })
    }
    else {
      Bucket.update({_id: id}, {$set: {completed: false}}, function(err){
        if(err){
          res.json(err)
        }
        else {
          res.json({message: "Updated!"})
        }
      })
    }
  },//closes update

  userbuckets: function(req,res){
    console.log("Buckets controller", req.params.name)
  	Bucket.find({$or:[{createdBy:req.params.name}, {createdFor: req.params.name}]}, function(err, buckets){
      if(err){
        res.json(err)
      }
      else {
      res.json(buckets);
      }
  	});
  },//closes index
  create: function(req, res){
    console.log("IN THE BACK END", req.body);
    var bucket = new Bucket({
      createdBy: req.body.createdBy,
      createdFor: req.body.createdFor,
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed
    });
    bucket.save(function(err){
      if(err){
        res.json({message: "There was an error!"})
      }
      else {
        res.json({message: "Successfully added "+ req.body.title});
      }
    })//closes bucket.save
  }//closes createforself





}//closes return
})();//closes module.exports
