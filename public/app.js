/**
 * Created by muigai on 1/15/17.
 */
(function(){

    /* your code */
    angular
        .module("HomeApp", [])
        .controller("HomeCtrl", HomeCtrl);

    function HomeCtrl($scope) {
        $scope.test = "connected";
    }
})();
