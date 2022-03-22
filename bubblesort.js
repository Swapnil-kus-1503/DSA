function swap(arr,j,min)
  {
    var temp=arr[j];
    arr[j]=arr[min];
    arr[min]=temp;
  }

var arr=[3,5,0,9,-3,8,-1];
var N=arr.length;
for(var i=0;i<N;i++)
  {
    for(var j=0;j<N-i-1;j++)
      {
        if(arr[j]>arr[j+1])
        {
           swap(arr,j,j+1);        }
      }
  }
// console.log(arr);

console.log(arr.join(" "));