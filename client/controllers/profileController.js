beltExam.controller('ProfileController', function($scope, UserFactory, BucketFactory, $routeParams){
  console.log("Route params!!!!!", $routeParams);
  $scope.completedBuckets = [];
  $scope.pendingBuckets = [];
  UserFactory.findUserforProfile($routeParams.name, function(data){
    $scope.viewedUser = data;
    $scope.viewedUser = $scope.viewedUser[0];
    console.log("THE user to VIEW", $scope.viewedUser);
    console.log("the user's bucket list", $scope.viewedUser.bucketlist.length);
    var bucketlist = $scope.viewedUser.bucketlist;
    for(var i=0; i<bucketlist.length; i++){
      if(bucketlist[i].completed){
        $scope.completedBuckets.push(bucketlist[i]);
      }
      else {
        $scope.pendingBuckets.push(bucketlist[i]);
      }
    }
    console.log("Completed", $scope.completedBuckets);
    console.log("pending", $scope.pendingBuckets);
  });
  // UserFactory.getUser(function(data){
  //   $scope.viewedUser = data;
  //   console.log("Want to view", $scope.viewedUser);
  // });
  // OrderFactory.index(function(data){
  //   $scope.placedOrders = data;
  //   for(var i=0; i<$scope.placedOrders.length; i++){
  //     var date = new Date($scope.placedOrders[i].createdAt);
  //     $scope.placedOrders[i].createdAt = date.toDateString();
  //   }
  // })
  //
  // ProductFactory.index(function(data){
  //   $scope.orderItems = data;
  // })
  // //set order quantity options from 1 - 30
  // $scope.orderQuantity = [];
  // for(var i=1; i<=30; i++){
  //   $scope.orderQuantity.push(i);
  // }
  //
  // // $scope.orderItems = ['Nike Shoes', 'Black Belts', 'Ice Cream', 'Candy'];
  //
  // $scope.placeOrder = function(){
  //   console.log("placing an order");
  //   $scope.message = false;
  //   var fulfill = false;
  //   var i=0;
  //   while(i<$scope.orderItems.length){
  //     if($scope.orderItems[i].name == $scope.newOrder.product.name){
  //         console.log("Found it!");
  //
  //       if($scope.orderItems[i].quantity < $scope.newOrder.quantity){
  //         $scope.message = "We don't have enough!";
  //         console.log("We don't have enough!");
  //         return false;
  //       }
  //       else {
  //         console.log("Should be fine!");
  //         var orderToPlace = {name: $scope.newOrder.name.name, product: $scope.newOrder.product.name, quantity: $scope.newOrder.quantity};
  //         fulfill = true;
  //       }
  //     }//closes if($scope.orderItems[i].name....)
  //   i++;
  //   }//closes while loop
  //   console.log("gonna place", orderToPlace);
  //   OrderFactory.create(orderToPlace, function(data){
  //     $scope.message = data;
  //   });
  //   OrderFactory.index(function(data){
  //     $scope.placedOrders = data;
  //   })
  //   ProductFactory.updateQuantity({id:$scope.newOrder.product._id, amount: $scope.newOrder.quantity}, function(data){
  //     console.log(data);
  //   });
  //   ProductFactory.index(function(data){
  //     $scope.orderItems = data;
  //     for(var i=0; i<$scope.placedOrders.length; i++){
  //       var date = new Date($scope.placedOrders[i].createdAt);
  //       $scope.placedOrders[i].createdAt = date.toDateString();
  //     }
  //   })
  // } //closes placeOrder

})//closes OrdersController
