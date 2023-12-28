app.controller('HomeCtrl', ["$scope", "$location", 'HomeService', function ($scope, $location, HomeService) {
    $scope.validLogout = function () {
        $location.path('/signin');
    }
    $scope.SampleArr;
    $scope.fn;
    $scope.arr = [];
    $scope.name = "";
    $scope.search = function () {
        HomeService.getData($scope.fn,$scope.name)
    
    }
    $scope.fn=function(data)
    {
        console.log($scope.name)
        $scope.SampleArr=data
       if( $scope.SampleArr.length>0)
       {
        for(let i=0;i<=20;i++)
        {
            $scope.arr.push($scope.SampleArr[i])
        }
       }
       console.log($scope.arr)
    }
    $scope.value;
    $scope.sort=function(v)
    {
        $scope.value=v;
        console.log("hello")
    }

}])




