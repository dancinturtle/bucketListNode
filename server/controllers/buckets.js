var mongoose = require('mongoose');
var Bucket = mongoose.model('Bucket');
var User = mongoose.model('User');
module.exports = (function(){
  return {

    update: function(id, req, res){
    Bucket.find({_id: id}, function(err, product){
      if(err){
        res.json(err);
      }
      else {
        var status = product[0].completed;
        if(status == true){
          Bucket.update({_id: id}, {$set: {completed: false}}, function(err){
            if(err){
              res.json({message:"There's something wrong."});
            }
            else {
              res.json({message: "Updated."})
            }
          })
        }//closes Bucket.update
        else {
          Bucket.update({_id: id}, {$set: {completed: true}}, function(err){
            if(err){
              res.json({message:"There's something wrong."});
            }
            else {
              res.json({message: "Updated."})
            }
          })//closes Bucket.update
        }
      }
    })
  },//closes up update

  index: function(req,res){
  	Bucket.find({}, function(err, buckets){
      if(err){
        res.json(err)
      }
      else {
      res.json(buckets);
      }
  	});
  },//closes index
  createForSelf: function(req, res){
    console.log("IN THE BACK END", req.body);
    User.findOne({_id: req.body.user._id}, function(err, user){
      console.log("GOT the user?", user);
      var bucket = new Bucket({
        createdFor: req.body.user._id,
        createdBy: req.body.user._id,
        name: req.body.user.name,
        title: req.body.title,
        description: req.body.description,
        completed: false,
      });
      bucket.save(function(err){
        user.bucketlist.push(bucket);
        user.save(function(err){
          if(err){
            console.log("ERROR WITH THIS ASSOC MADNESS");
          }
          else {
            console.log("SUCCESS WITH ASSOC MADNESS?");
            res.json({message:"Success?"});
          }
        })
      })
    })//closes findOne
  },//closes createforself
  createForOther: function(req, res){
    console.log("IN THE BACK END FOR SOMEONE ELSE", req.body);
    User.findOne({_id: req.body.createdFor._id}, function(err, user){
      console.log("GOT the user?", user);
      var bucket = new Bucket({
        createdFor: req.body.createdFor._id,
        createdBy: req.body.user._id,
        name: req.body.createdFor.name,
        title: req.body.title,
        description: req.body.description,
        completed: false,
      });
      bucket.save(function(err){
        user.bucketlist.push(bucket);
        user.save(function(err){
          if(err){
            console.log("ERROR WITH THIS ASSOC MADNESS");
          }
          else {
            console.log("SUCCESS WITH ASSOC MADNESS?");
            res.json({message:"Success?"});
          }
        })
      })
    })//closes findOne
  },//closes crea



}//closes return
})();//closes module.exports
