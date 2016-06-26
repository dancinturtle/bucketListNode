beltExam.factory('BucketFactory', function($http){
  var factory = {};
  var userbuckets = [];
  var bucket;

  factory.updateBucket = function(id, callback){
    $http.put('/updateBucket/', id).success(function(res){
      callback(res);
    })
  }

  factory.userBuckets = function(name, callback){
    console.log("In the bucket factory, userBuckets");
    $http.get('/buckets/'+name).success(function(res){
      userbuckets = res;
      for(var i=0; i<userbuckets.length; i++){
        var date = new Date(userbuckets[i].createdAt);
        userbuckets[i].createdAt = date.toDateString();
      }
      callback(userbuckets);
    })
  }//closes userBuckets
  factory.addBucket = function(newItem, callback){
    console.log("BUCKET FACTORY", newItem);
    $http.post('/addBucket', newItem).success(function(res){
      console.log("CREATE BUCKET RESULT", res);
      callback(res.message);
    })
  }//closes createForSelf

  return factory;
}) // closes OrderFactory
