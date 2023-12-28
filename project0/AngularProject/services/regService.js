app.service("RegisterService",["$http",function($http){

    this.sendUser=function(Ub){
        $http({
            method:"POST",
            url:("http://localhost:3000/data"),
            data:Ub
        })
        .then(function(respons){
            alert("Registration Succesfull!")
            window.location.href="#!signin"
            console.log(respons);
        },function(error){
            alert("Registration Incomplete!")
            console.log(error);
        })
    }
}])