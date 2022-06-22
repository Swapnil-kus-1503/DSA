function binarySearch(arr, start, end, key, count) {
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);

  if (key === arr[mid]) {
    return arr[mid];
  } else if (key < arr[mid]) {
    return binarySearch(arr, start, mid - 1, key, count + 1);
  } else {
    return binarySearch(arr, mid + 1, end, key, count + 1);
  }
}

let arr = [1, 3, 4, 8, 9, 11, 13, 20, 42, 49, 50];
// console.log(arr.length);
let start = 0;
let count = 0;
let end = arr.length - 1;
let key = 42;
let res = binarySearch(arr, start, end, key, count);

console.log(res, count);
