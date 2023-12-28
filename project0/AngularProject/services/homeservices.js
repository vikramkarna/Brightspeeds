app.service("HomeService",["$http",function($http) {
    this.getData=function (cb,data) {
        var apiUrl =`https://newsapi.org/v2/everything?q=${data}&from=2023-11-27&sortBy=publishedAt&apiKey=0b1d9983e5dc4214a236bd4264276189`;
        $http
        (
            {
            method: 'GET',
            url: apiUrl,
        })
        .then(function (response) {
            cb(response.data.articles)
        }),function(error) {
            console.log(error);
            
        }
        
    }

}])