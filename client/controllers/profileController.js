beltExam.controller('ProfileController', function($scope, BucketFactory, UserFactory,  $routeParams, $location){
  console.log("Route params!!!!!", $routeParams);


  $scope.getUserBuckets = function(){
    // console.log("current user on profile page", $scope.currentUser.name);
    // console.log("viewed user on profile page", $scope.viewedUser.name);
    $scope.othercompletedBuckets = [];
    $scope.otherpendingBuckets = [];
    $scope.ourcompletedBuckets = [];
    $scope.ourpendingBuckets = [];
    BucketFactory.userBuckets($routeParams.name, function(data){
      $scope.buckets = data;
      console.log("USER BUCKETS", $scope.buckets);
      for(var i=0; i<$scope.buckets.length; i++){
        if(($scope.buckets[i].completed == true && $scope.buckets[i].createdBy == $scope.currentUser.name) || ($scope.buckets[i].completed == true && $scope.buckets[i].createdFor == $scope.currentUser.name)){
          $scope.ourcompletedBuckets.push($scope.buckets[i]);
        }
        else if($scope.buckets[i].completed == true && $scope.buckets[i].createdBy != $scope.currentUser.name && $scope.buckets[i].createdFor != $scope.currentUser.name){
          $scope.othercompletedBuckets.push($scope.buckets[i]);
        }
        else if(($scope.buckets[i].completed == false && $scope.buckets[i].createdBy == $scope.currentUser.name) || ($scope.buckets[i].completed == false && $scope.buckets[i].createdFor == $scope.currentUser.name)){
          $scope.ourpendingBuckets.push($scope.buckets[i]);
        }
        else {
          $scope.otherpendingBuckets.push($scope.buckets[i]);
        }
      }
      console.log("our completed", $scope.ourcompletedBuckets, "other completed", $scope.othercompletedBuckets, "our pending", $scope.ourpendingBuckets, "other pending", $scope.otherpendingBuckets);
    })
  }


  UserFactory.shareUser(function(data){
    $scope.currentUser = data;

    $scope.currentUser = $scope.currentUser[0];
    console.log("The current user on profile page", $scope.currentUser)
  })

  UserFactory.findUserforProfile($routeParams.name, function(data){
    $scope.viewedUser = data;
    $scope.viewedUser = $scope.viewedUser[0];
    console.log("THE user to VIEW", $scope.viewedUser, $scope.currentUser);
    $scope.getUserBuckets();
  });



  $scope.changeStatus = function(id, status){
    var updatingBucket = {id: id, status: status};
    console.log("Changing the status", updatingBucket);
    BucketFactory.updateBucket(updatingBucket, function(data){
      console.log(data);
    })
    $scope.getUserBuckets();
  }//closes changeStatus


})//closes profileController
