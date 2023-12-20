var app=angular.module("app",[]);
        app.controller("myCtrl",["$scope",function($scope){
            $scope.name="vikram"
            $scope.isLogin=true;

            $scope.isRegister=true;
            $scope.arr1=[1,2,3,4,5,6]
            $scope.arr=[{num:1},{num:2},{num:3},{num:3}]

            $scope.count=0;
            $scope.incre=function()
            {
                $scope.count++;
            }
        }])

        app.controller("dispName",["$scope",function($scope){
            $scope.name;
            $scope.disp=function()
            {
                console.log($scope.name);
            }

            $scope.isRed=true;
        }])

        app.controller("dispImg",["$scope",function($scope){
            $scope.displaying=function()
            {
            $scope.img="https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg";
            }
        }])

        app.controller("dispObj",["$scope",function($scope){
            $scope.obj;
            $scope.disp=function(){
            obj=[
                {
                    "id":3,
                    "name":"vikram",
                    "city":"Ongole"
                },
                {
                    "id":4,
                    "name":"pavan",
                    "city":"Nellore"
                },
                {
                    "id":1,
                    "name":"ramu",
                    "city":"prakasam"
                },
                {
                    "id":2,
                    "name":"vijay",
                    "city":"Guntur"
                }

            ]
            console.log(obj);

            
            $scope.arr1;
            $scope.sorted=function()
            {
                arr1=[...obj];
                arr1.sort((a,b)=>a.id-b.id)   
                console.log(arr1); 
            }
            
        }}])