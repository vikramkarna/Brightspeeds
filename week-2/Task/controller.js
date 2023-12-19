var app=angular.module("calculator",[]);
app.controller("userCtrl",function(){
    this.name="vikram"
    this.age=23
    this.city="Nellore"

    var a=10;
    var b=20;
    this.sum= a+b;
    this.add=function()
    {
        return a+b;
    }
})

app.controller("productCtrl",function(){
    this.pName="shirt"
    this.price=500
    this.brand="trends"

    let color="red"
    this.addp=function(){
        return color;
    }
})