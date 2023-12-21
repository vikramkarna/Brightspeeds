var app = angular.module("app", []);
// app.controller("myCtrl",["$scope",function(s){
// s.text=false;
// s.print=function()
// {
//    if(s.text===false)
//    {
//     s.text=true;
//    }
//    else{
//     s.text=false;
//    }
// }

// s.check=false;
// s.toggle=function()
// {

// if(s.check==false)
// {
//     s.check=true;
// }
// else{
//     s.check=false;
// }
//}

// s.person=[{id:1,name:"vikram"},
//           {id:2,name:"ramu"},
//           {id:3,name:"raju"},
//           {id:4,name:"rakesh"},
//           {id:5,name:"rajesh"}
//         ]
// }])
 

app.controller("form", ["$scope", function ($scope) {

    $scope.flag = true;
    $scope.click = function () {
        if ($scope.flag == true) {
            $scope.flag = false;
        }
        else {
            $scope.flag = true;
        }
    }

    $scope.user=[];
    $scope.id = "";
    $scope.name = "";
    $scope.email = "";
    $scope.password = "";
    $scope.address = "";
    $scope.registerForm = function () {
        var regObj = {};
        regObj.id = $scope.id;
        regObj.name = $scope.name;
        regObj.email = $scope.email;
        regObj.password = $scope.password;
        regObj.address = $scope.address;
        $scope.user.push(regObj);
        console.log(regObj);
    }


    $scope.e
    $scope.p
    $scope.loginForm = function () {
        for( let ele of $scope.user)
        {
            if(ele.email==$scope.e && ele.password==$scope.p)
            {
                console.log("Login SuccessFull")
                break;
            }
            else
            {
                console.log("Invalid credentials")
            }
        }
       
    }
    
}])
