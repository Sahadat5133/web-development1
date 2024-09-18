var arr=[7,8,1,3,2];
var n=arr.length;

for(let i=0;i<n;i++){
    var current=arr[i];
    let j=i-1;
    while(j >= 0 && arr[j] > current){
        arr[j+1]=arr[j];
        j--;
    }
    arr[j+1]=current;
}
for(let i=0;i<n;i++){
    console.log(arr[i]+" ");
}