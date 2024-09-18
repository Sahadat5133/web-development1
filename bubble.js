var numbers=[4,7,3,2,1];
let n=numbers.length;
console.log(n);
for(let i=0;i<n-1;i++){
    for(let j=0;j<n-i-1;j++){
        if(numbers[j] > numbers[j+1]){
            var temp=numbers[j];
            numbers[j]=numbers[j+1];
            numbers[j+1]=temp;
        }
    }
}
for(let i=0;i<n;i++){
    console.log(numbers[i]+" ");
}
