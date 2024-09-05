function mergeSort(arr) {
  if (arr.length === 0) return;
  if (arr.length === 1) return arr;
  let leftHalf = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  let rightHalf = mergeSort(arr.slice(Math.floor(arr.length / 2)));

  return merge(leftHalf, rightHalf);
}

function merge(left, right) {
  let arr = [];
  if (left.length === 0) return right;
  if (right.length === 0) return left;
  if (left[0] < right[0]) {
    let item = left.shift();
    arr.push(item);
  } else {
    let item = right.shift();
    arr.push(item);
  }
  return arr.concat(merge(left, right));
}
