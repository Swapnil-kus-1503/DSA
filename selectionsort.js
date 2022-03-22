function swap(arr,min,i)
  {
    var temp=arr[i];
    arr[i]=arr[min];
    arr[min]=temp;
  }

arr=[3,5,0,9,8];
for(var i=0;i<arr.length;i++)
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