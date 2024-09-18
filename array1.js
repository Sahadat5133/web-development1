var sandwich=["peanut butter","jelly","bread"];

var teams=[["Bulls",23],["White Sox",45]];

console.log(sandwich[1]);
sandwich[1]="bananas";
console.log(sandwich);

console.log(teams[1][0]);
teams[1][0]="red sox";

console.log(teams);

sandwich.forEach(function(element){
    console.log(element);
});

var arr=["a","b","c"];
arr.push("d");
console.log(arr);
console.log(arr.pop());
console.log(arr);

var arr2=["g","q"];
console.log(arr.concat(arr2));
console.log(arr2);
console.log(arr.join(""));
console.log(arr.reverse());
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.unshift("p"));//number of elements in an array
console.log(arr);
console.log(arr.slice(1,2));//slice index 1

arr.push("i");
arr.push("f");
console.log(arr.sort());
console.log(arr);
console.log(arr.splice(2,2,"JS Nuggets"));
