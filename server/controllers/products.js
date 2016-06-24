var mongoose = require('mongoose');
var Product = mongoose.model('Product');
module.exports = (function(){
  return {

  index: function(req,res){
  	Product.find({}, function(err, products){
      if(err){
        res.json(err)
      }
      else {
      res.json(products);
      }
  	});
  },//closes index
  create: function(req, res){
    var product = new Product({
      name: req.body.name,
      url: req.body.url,
      description: req.body.description,
      quantity: req.body.quantity
                });
    product.save(function(err){
      if(err){
        res.json(err);
      }
      else {
        res.json({message: "Successfully added "+ req.body.name + " as a product, " + req.body.quantity + " initially available"});
      }
    })
  },//closes create

  delete: function(req, res){
    Product.remove({_id: req}, function(err){
  		if(err){
  			res.json(err);
  		}
  		else {
  			res.json({message: "Successfully deleted."});
  		}
  	});
  },//closes delete
  update: function(id, req, res){
    Product.find({_id: id}, function(err, product){
      if(err){
        res.json(err);
      }
      else {
        var quantity = product[0].quantity;
        quantity = quantity - req.body.amount;
        Product.update({_id: id}, {$set: {quantity: quantity}}, function(err){
          if(err){
            res.json({message:"There's something going on with this product's quantities."});
          }
          else {
            res.json({message: "Product quantity is updated."})
              }
        })//closes Product.update
      }
    })//closes Product.find
  }//closes update

}//closes return
})();//closes module.exports
