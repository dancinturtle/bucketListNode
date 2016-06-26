beltExam.controller('LoginController', function($scope, UserFactory, $location){

  $scope.currentUser = [];

  $scope.checkUser = function(){
    console.log("Got the user logging in", $scope.loggingIn);

    UserFactory.findUser($scope.loggingIn.name, function(data){

      $scope.currentUser = data;

      if($scope.currentUser.length > 0 ){
        $scope.currentUser = $scope.currentUser[0];
        console.log("going with this", $scope.currentUser);
        $location.url('/dashboard');
      }
      else {
        $scope.addUser();
      }

    })
  }//closes checkUser
  //if they don't exist, add them to database
  $scope.addUser = function(){
    UserFactory.create($scope.loggingIn, function(data){
      console.log(data);
    });
    $scope.checkUser();
  }



}); //closes LoginController
