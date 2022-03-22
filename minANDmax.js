function swap(arr,min,i){
    var temp=arr[i];
    arr[i]=arr[min];
    arr[min]=temp;
}

var arr=[2,3,1,5,4]
var N=arr.length;//size of array
var M=1;//N-M to be solved
  for(var i=0;i<arr.length-1;i++)
  {
    var min=i;
    for(var j=i+1;j<arr.length;j++)
      {
        if(arr[j]<arr[min])
        {
          min=j;
        }
      }
    swap(arr,min,i);
  }
console.log(arr.join(" "));

var min=0;
        for(var i=0;i<N-M;i++)
        {
            min=min+arr[i];
        }
        // console.log(min);
        
        var max=0;
        var count=0;
        for(var i=arr.length-1;i>=0 && count< N-M;i--)
        {
            max=max+arr[i];
            count++;
        }
        // console.log(max);
        var diff=max-min;
        console.log(diff);
