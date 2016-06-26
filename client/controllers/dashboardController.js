beltExam.controller('DashboardController', function($scope, UserFactory, BucketFactory, $location){

  UserFactory.shareUser(function(data){
    $scope.currentUser = data;
    if (!$scope.currentUser){
      $location.url('/');
    }
    else {
      $scope.currentUser = data[0];
      console.log("our current user on dashboard", $scope.currentUser);
    }
  })


  if($scope.currentUser){
    UserFactory.index(function(data){
      $scope.users = data;
      $scope.otherUsers = [];
      for(var i=0; i<$scope.users.length; i++){
        if($scope.users[i].name != $scope.currentUser.name){
          $scope.otherUsers.push($scope.users[i]);
        }
      }
    })//closes UserFactory.index
  }

  $scope.getUserBuckets = function(){
    BucketFactory.userBuckets($scope.currentUser.name, function(data){
      $scope.buckets = data;
      $scope.completedbuckets = [];
      $scope.pendingbuckets = [];
      for(var i=0; i<$scope.buckets.length; i++){
        if($scope.buckets[i].completed == true){
          $scope.completedbuckets.push($scope.buckets[i]);
        }
        else {
          $scope.pendingbuckets.push($scope.buckets[i]);
        }
      }
    })
  }

  if($scope.currentUser){
    $scope.getUserBuckets();
  }



  $scope.addItem = function(){
    $scope.newItem.createdBy = $scope.currentUser.name;
    if($scope.newItem.createdFor){
      $scope.newItem.createdFor = $scope.newItem.createdFor.name;
    }
    $scope.newItem.completed = false;
    console.log("latest new Item", $scope.newItem);
    BucketFactory.addBucket($scope.newItem, function(data){
      console.log(data);
    })
    $scope.getUserBuckets();
  }


  $scope.changeStatus = function(id, status){
    var updatingBucket = {id: id, status: status};
    console.log("Changing the status", updatingBucket);
    BucketFactory.updateBucket(updatingBucket, function(data){
      console.log(data);
    })
    $scope.getUserBuckets();
  }//closes changeStatus

})//closes dashboardController
