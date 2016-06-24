beltExam.controller('DashboardController', function($scope, UserFactory, BucketFactory, $location){

  UserFactory.shareUser(function(data){
    $scope.currentUser = data;
    if (!$scope.currentUser){
      $location.url('/');
    }
    else {
      $scope.currentUser = data[0];
      console.log("our current user", $scope.currentUser.name);
    }
  })

  UserFactory.index(function(data){
    $scope.users = data;
  })

  BucketFactory.index(function(data){
    $scope.buckets = data;
    console.log("ALL THE BUCKETS", $scope.buckets);
  })

  $scope.addItem = function(){
    $scope.newItem.user = $scope.currentUser;
    $scope.newItem.completed = false;
    console.log("New bucket list item to create for self", $scope.newItem);
    BucketFactory.createForSelf($scope.newItem, function(data){
      console.log(data);
    })
    if($scope.newItem.createdFor && $scope.newItem.createdFor.name != $scope.currentUser.name){
      console.log("new bucket list item to create for someone else", $scope.newItem);
      BucketFactory.createForOther($scope.newItem, function(data){
        console.log(data);
      })
    }
  }
  $scope.changeStatus = function(id, status){
    var updatingBucket = {id: id, status: status};
    console.log("Changing the status", updatingBucket);
    // BucketFactory.updateBucket(id, function(data){
    //   $scope.foundBucket = data;
    //   $scope.foundBucket = data[0];
    //   console.log($scope.foundBucket);
    //   $scope.foundBucket.completed = true;  //update the bucket
    //
    // })

  }

  //   $scope.message = false;
  //   BucketFactory.create($scope.newItem, function(data){
  //     $scope.message = data;
  //   });
  //   CustomerFactory.index(function(data){
  //     $scope.customers = data;
  //     for(var i=0; i<$scope.customers.length; i++){
  //       var date = new Date($scope.customers[i].createdAt);
  //       $scope.customers[i].createdAt = date.toDateString();
  //     }
  //
  //
  //   })
  //   $scope.newCustomer = {};



  // CustomerFactory.index(function(data){
  //   $scope.customers = data;
  //   for(var i=0; i<$scope.customers.length; i++){
  //     var date = new Date($scope.customers[i].createdAt);
  //     $scope.customers[i].createdAt = date.toDateString();
  //   }
  // })
  // $scope.removeCustomer = function(customer){
  //
  //   $scope.message = false;
  //   CustomerFactory.delete(customer._id, function(data){
  //     $scope.message = data;
  //   });
  //   CustomerFactory.index(function(data){
  //     $scope.customers = data;
  //     for(var i=0; i<$scope.customers.length; i++){
  //       var date = new Date($scope.customers[i].createdAt);
  //       $scope.customers[i].createdAt = date.toDateString();
  //     }
  //   })
  // }
  //
})//closes CustomersController
