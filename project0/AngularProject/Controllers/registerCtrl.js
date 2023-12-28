
app.controller("registerCtrl",["$scope","RegisterService",function($scope,RegisterService){
    $scope.name;
    $scope.email;
    $scope.pass;

    $scope.Rdata=function(){
        console.log("hello")
        let userObj={}
        userObj.name=$scope.name
        userObj.email=$scope.email
        userObj.pass=$scope.pass
        console.log(userObj)
        RegisterService.sendUser(userObj)
    }

}])