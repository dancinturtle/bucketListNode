var users = require('../controllers/users.js');
var buckets = require('../controllers/buckets.js');
// var products = require('../controllers/products.js');
module.exports = function(app){

  app.get('/findUser/:name', function(req, res){
    console.log("routes", req.params.name);
    var name = req.params.name;
  	users.findUser(name, req, res)
  });
  app.post('/updateBucket', function(req, res){
    buckets.update(req, res);
  })
  app.get('/findUserforProfile/:name', function(req, res){
    console.log("routes", req.params.name);
    var name = req.params.name;
    users.findUserforProfile(name, req, res)
  });

  app.post('/adduser', function(req, res){
    users.create(req, res);
  })

  app.get('/users', function(req, res){
    users.index(req, res)
  })

  app.post('/addItemForSelf', function(req, res){
    buckets.createForSelf(req, res);
  })

  app.post('/addItemForOther', function(req, res){
    buckets.createForOther(req, res);
  })

  app.get('/buckets', function(req, res){
    buckets.index(req, res);
  })
  //
  // app.post('/addcustomers', function(req, res){
  //   customers.create(req, res);
  // })

  // app.post('/placeorders', function(req, res){
  //   orders.create(req, res);
  // })
  // app.get('/products', function(req, res){
  //   products.index(req, res);
  // })
  //
  // app.put('/updateProduct/:id', function(req, res){
  //   var id=req.params.id;
  //   products.update(id, req, res);
  // })


} //closes module.exports
