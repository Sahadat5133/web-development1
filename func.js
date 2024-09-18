function square(number){
    return number*number;
}
var result=square(6);
console.log(result);

var someVar="Hat";//global variable
function myFun(){
    var someVar="Shoes";
    console.log(someVar);
}
myFun();
console.log(someVar);


function addSquares(a,b){
    function square(x){
        return x*x;
    }
    return square(a)+square(b);
}
a=addSquares(2,3);
b=addSquares(3,2);
c=addSquares(2,1);
console.log(a);
var fact=1;
function factorial(n){
    for(let i=1;i<=n;i++){
         fact = fact*i; 
    }
    return fact;
}
console.log(factorial(5));