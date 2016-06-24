beltExam.factory('BucketFactory', function($http){
  var factory = {};
  var buckets = [];
  var bucket;

  factory.updateBucket = function(id, callback){
    $http.post('/updateBucket/', id).success(function(res){
      bucket = res;
      callback(bucket);
    })
  }
  factory.index = function(callback){
    $http.get('/buckets').success(function(res){
      buckets = res;
      for(var i=0; i<buckets.length; i++){
        var date = new Date(buckets[i].createdAt);
        buckets[i].createdAt = date.toDateString();
      }
      callback(buckets);
    })
  }//closes index
  factory.createForSelf = function(newItem, callback){
    console.log("BUCKET FACTORY", newItem);
    $http.post('/addItemForSelf', newItem).success(function(res){
      console.log("CREATE BUCKET RESULT", res);
      callback(res.message);
    })
  }//closes createForSelf
  factory.createForOther = function(newItem, callback){
    console.log("BUCKET FACTORY OTHER USER", newItem);
    $http.post('/addItemForOther', newItem).success(function(res){
      console.log("CREATE BUCKET OTHER RESULT", res);
      callback(res.message);
    })
  }
  return factory;
}) // closes OrderFactory
