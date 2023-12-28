app.controller("signinCtrl",["$scope","SigninService",function($scope,SigninService){
    $scope.e;
    $scope.p;

    $scope.Comparr;

    $scope.Sdata=function(){
        SigninService.getUser(function(data){
            $scope.Comparr=data
            let flag = 0
            for(let ele of $scope.Comparr){
                if(ele.email==$scope.e && ele.pass==$scope.p)
                {
                    window.localStorage.setItem(ele.id,ele.email)
                    alert("Login Successfull")
                    window.location.href="#!home"
                    flag=1
                    break;
                }
            }
            if(flag==0){
                alert("Invalid Credentials")
            }

        })
        


    }
}])