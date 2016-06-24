beltExam.controller('ProductsController', function($scope, ProductFactory){

  ProductFactory.index(function(data){
    $scope.products = data;
    if($scope.products.length > 15){
      $scope.moreToShow = true;
    }
    else{
      $scope.moreToShow = false;
    }
  })



  $scope.message = false;
  $scope.initialQuantity = [];
  for(var i=1; i<=200; i++){
    $scope.initialQuantity.push(i);
  }

  $scope.addProduct = function(){
    $scope.message = false;
    ProductFactory.create($scope.newProduct, function(data){
      $scope.message = data;
    })
    $scope.newProduct = {};
    ProductFactory.index(function(data){
      $scope.products = data;
    })
  }
  $scope.prodToShow = 15;
  $scope.atEnd = false;
  $scope.moreProducts = function(){
    $scope.prodToShow += 15;
    if($scope.prodToShow >= $scope.products.length){
      $scope.moreToShow = false;
      if($scope.prodToShow > 15){
        $scope.atEnd = true;
      }
    }
  }
  $scope.collapseProducts = function(){
    $scope.prodToShow = 15;
    $scope.moreToShow = true;
    $scope.atEnd = false;
  }
}); //closes productsController
