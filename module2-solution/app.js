// JavaScript Document
(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);



ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
 var showList = this;

  showList.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();
  
  showList.buyItem = function (itemIndex) {
	  ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
		var showBoughtList = this;

  		showBoughtList.itemsBought = ShoppingListCheckOffService.getItemsBought();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemsToBuy = [{ name: "cookies", quantity: 10 }, { name: "chips", quantity: 5 }, { name: "apples", quantity: 10 }, { name: "oranges", quantity: 8 }, { name: "bananas", quantity: 4 }, { name: "green peppers", quantity: 20 }, { name: "lettuce", quantity: 10 }];

var itemsBought = [];


  service.buyItem = function (itemIndex) {
   
    itemsBought.push(itemsToBuy[itemIndex]);
	itemsToBuy.splice(itemIndex, 1);
  };


  service.getItemsToBuy = function () {
    return itemsToBuy;
  };
  
  service.getItemsBought = function () {
    return itemsBought;
  };
}

})();
