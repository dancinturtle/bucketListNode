beltExam.factory('UserFactory', function($http){
  var factory = {};
  var user;
  var users = [];

  factory.findUserforProfile = function(name, callback){
    console.log("Factory", name)
    $http.get('/findUserforProfile/'+name).success(function(res){
      user = res;
      console.log("Our current user", user);
      callback(res);
    })
  }//closes index

  factory.findUser = function(name, callback){
    console.log("Factory", name)
    $http.get('/findUser/'+name).success(function(res){
      user = res;
      console.log("Our current user", user);
      callback(res);
    })
  }//closes index

  factory.create = function(user, callback){
      $http.post('/adduser', user).success(function(res){
        callback(res.message);
      })
    }
  factory.shareUser = function(callback){
    callback(user);
  }

  factory.index = function(callback){
    $http.get('/users').success(function(res){
      users = res;
      callback(users);
    })
  }//closes index
//   factory.delete = function(id, callback){
//
//     $http.delete('/customers/'+id).success(function(res){
//       callback(res.message);
//     })
//   }
//   factory.create = function(newcustomer, callback){
//     $http.post('/addcustomers', newcustomer).success(function(res){
//       callback(res.message);
//     })
//   }
// //
// //
  return factory;
})//closes CustomerFactory
