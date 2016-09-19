(function(){
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchItemsStr = "";
    $scope.msg = "";
    $scope.checkItems = function(){
      $scope.colorClass = "green";
      var filteredLunchItemsArray = cleanArray($scope.lunchItemsStr);
      if (filteredLunchItemsArray.length == 0) {
        $scope.msg = "Please enter data first";
        $scope.colorClass = "red";
      } else if (filteredLunchItemsArray.length <= 3) {
        $scope.msg = filteredLunchItemsArray.length
        + " item"
        + (filteredLunchItemsArray.length == 1?"":"s")
        +". Enjoy!";
      } else {
        $scope.msg = filteredLunchItemsArray.length + " items. Too much!";
      }
    }; //checkItems
  } //LunchCheckController

  var cleanArray = function(input){
    var lunchItemsArray = input.split(",");
    lunchItemsArray = lunchItemsArray.map(function(item){
      return item.trim();
    });
    var filteredLunchItemsArray = lunchItemsArray.filter(function(item){
      // return (item !== (""));
      return (item);
    });
    return filteredLunchItemsArray;
  }; //cleanArray

})();
