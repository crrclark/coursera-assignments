(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
 // $scope.menuItems = "list comma separated dishes you usually have for lunch";
	$scope.messageToUser = "";
  
  $scope.checkItemCount = function () {
	  
	  if($scope.menuItems){
		var arrayItemsInMenu = $scope.menuItems.split(',');
		console.log("NUM ITEMS "+arrayItemsInMenu.length);
		  if (arrayItemsInMenu.length <= 3) {
			  $scope.messageToUser = "Enjoy!"
		  } else if (arrayItemsInMenu.length > 3) {
			  $scope.messageToUser = "Too Much!" 
		  }
	  }else {
		 	$scope.messageToUser = "Please enter data first"  
		} 
  }
  
}

})();
