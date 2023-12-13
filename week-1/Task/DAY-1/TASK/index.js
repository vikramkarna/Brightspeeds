// function say()
// {
// var s=document.getElementById('p1');
// s.style.color='blue'
// }
// function say()
// {
//     var a=document.getElementById("p1").innerHTML="hii"
//     console.log(a)
// }

// // function declaration
// function add(a,b)
// {
//     return a+b;
// }
// let res=add(10,20);
// console.log(res);


// function sub(a,b)
// {
//     return a-b;
// }
// let res1=sub(20,10);
// console.log(res1);

//function Expression
// var addition=function(a,b)
// {
//     return a+b;
// }
// let res=addition(10,20);
// console.log(res);


// var sub=function(a,b)
// {
//     return a-b;
// }
// let res1=sub(20,10);
// console.log(res1);

//Arrow function
// var calc=(a,b)=>
// {
//     let op=prompt("Enter which operation you want")
//     switch(op)
//     {
//         case 'add':
//             return a+b;
//             break;
//         case 'sub':
//             return a-b;
//     }
// }
// let a=prompt("Enter first number");
// let b=prompt("Enter second number");
// let res=parseInt(calc(a,b));
// console.log(res);

//Rest Operator
// function addition(...abc)
// {
//     for(let i of abc)
//     {
//         console.log(i);
//     }
// }
// addition(10,20,30);
// addition(10.5,34,56,67);

//Spread Operator
// function sp(a,b,c,d)
// {
//     console.log(a+" "+b+" "+c+" "+d);
// }
// let arr=[10,20,5,45];
// sp(...arr)
// sp(10,20,30);


//Hoisting
console.log(a);
var a=10;
console.log(a);
var res=add(10,20)
console.log(res);
function add(a,b)
{
    console.log(a);
    console.log(b);
    return a+b;   
}
