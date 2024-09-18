var selection=[6,2,8,9,3];
let n=selection.length;
for(let i=0;i<n-1;i++){
    var min=i;
    for(let j=i+1;j<n;j++){
        if(selection[j] < selection[min]){
            min=j;
        }    
    }
    var temp=selection[i];
    selection[i]=selection[min];
    selection[min]=temp;
}
for(let i=0;i<n;i++){
    console.log(selection[i]+" ");
}



