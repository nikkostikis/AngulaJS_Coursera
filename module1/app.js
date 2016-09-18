(function(){
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchItemsStr = "";
    $scope.msg = "";
    $scope.checkItems = function(){
      var lunchItemsArray = $scope.lunchItemsStr.split(",");
      console.log(lunchItemsArray);
      lunchItemsArray = lunchItemsArray.map(function(item){
        return item.trim();
      });
      console.log(lunchItemsArray);
      var filteredLunchItemsArray = lunchItemsArray.filter(function(item){
        return (item !== (""));
      });
      console.log(filteredLunchItemsArray);
      if (filteredLunchItemsArray.length <= 3) {
        $scope.msg = filteredLunchItemsArray.length + " items. Enjoy!";
      } else {
        $scope.msg = filteredLunchItemsArray.length + " items. Too much!";
      }
    };

  }
})();
