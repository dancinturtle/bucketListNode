beltExam.factory('ProductFactory', function($http){
  var factory = {};
  var products = [];

  factory.index = function(callback){
    $http.get('/products').success(function(res){
      products = res;
      for(var i=0; i<products.length; i++){
        var date = new Date(products[i].createdAt);
        products[i].createdAt = date.toDateString();
      }

      callback(products);
    })
  }//closes index

  factory.create = function(newProduct, callback){
    $http.post('/createproduct', newProduct).success(function(res){

      callback(res.message);
    })
  }//closes create
  factory.updateQuantity = function(idObject, callback){
    $http.put('/updateProduct/'+idObject.id, idObject).success(function(res){
      callback(res.message);
    })
  }
  return factory;
})
