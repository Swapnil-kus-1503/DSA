let arr = [1, 2, 4, 5, 4, 4, 4];
let n = arr.length;

let max_count = 0;
let max_item = -1;

for (let i = 0; i < n; i++) {
  let count = 0;
  for (let j = 0; j < n; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }
  if (count > max_count) {
    max_count = count;
    max_item = arr[i];
  }
}
console.log(max_item,n);

if (max_count >= Math.floor((n / 2) + 1)) {
  console.log(max_item);
} else {
  console.log(-1);
}
