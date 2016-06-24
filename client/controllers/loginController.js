beltExam.controller('LoginController', function($scope, UserFactory, $location){

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

  // UserFactory.index(function(data){
  //   $scope.products = data;
  // })
  // OrderFactory.index(function(data){
  //   $scope.orders = data;
  //   for(var i=0; i<$scope.orders.length; i++){
  //     var date = new Date($scope.orders[i].createdAt);
  //     $scope.orders[i].createdAt = date.toDateString();
  //   }
  // })
  // CustomerFactory.index(function(data){
  //   $scope.customers = data;
  //   for(var i=0; i<$scope.customers.length; i++){
  //     var diff = $scope.mstohuman($scope.customers[i].createdAt);
  //     $scope.customers[i].timeHere = diff;
  //   }
  // })
  //
  // $scope.mstohuman = function(date){
  //   var diff = new Date() - new Date(date);
  //   var hours = 0;
  //   var days = 0;
  //   var weeks = 0;
  //   var minutes = 0;
  //   diff = Math.floor(diff / 60000); //how many minutes ago
  //   while(diff >= 0){
  //     if(5 > diff && diff >= 0){
  //       minutes = "Less than 5";
  //       diff = -1;
  //     }
  //     if(60 > diff && diff >= 5){
  //       minutes = diff;
  //       diff=-1;
  //     }
  //     if(1440 > diff && diff >= 60){
  //         diff -= 60;
  //         hours ++;
  //     }
  //     if(10080 > diff && diff >= 1440){
  //       diff -= 1440;
  //       days ++;
  //     }
  //     if(diff >= 10080){
  //       diff -= 10080;
  //       weeks ++;
  //     }
  //   }
  //   return {weeks: weeks, days: days, hours: hours, minutes: minutes}
  // }
  //
  // $scope.displayPicNum = 4;
  // $scope.updatePicNum = function(){
  //   $scope.displayPicNum += 4;
  // }
  // $scope.show = true;
  // $scope.orderNum = 3;
  // $scope.updateOrderNum = function(){
  //   if($scope.show){
  //     $scope.orderNum = $scope.orders.length;
  //     $scope.show = false;
  //   }
  //   else{
  //     $scope.orderNum = 3;
  //     $scope.show = true;
  //   }
  // }
  // $scope.showCust = true;
  // $scope.custNum = 3;
  // $scope.updateCustNum = function(){
  //   if($scope.showCust){
  //     $scope.custNum = $scope.customers.length;
  //     $scope.showCust = false;
  //   }
  //   else{
  //     $scope.custNum = 3;
  //     $scope.showCust = true;
  //   }
  // }


}); //closes DashController
