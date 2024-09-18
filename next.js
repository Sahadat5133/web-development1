var next=[9,8,7,3,2];
var n=next.length;
for(let i=0;i<n-1;i++){
    var min=i;
    for(let j=i+1;j<n;j++){
        if(next[j] < next[min]){
            min=j;
        } 
    }
    var temp=next[i];
    next[i]=next[min];
    next[min]=temp;
}
for(let i=0;i<n;i++){
    console.log(next[i]+" ");
}