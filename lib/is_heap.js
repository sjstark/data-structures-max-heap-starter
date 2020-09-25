// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx = 1) {

  if (array[idx] === undefined) return true;
  let leftChildIdx = idx * 2;
  let rightChildIdx = idx * 2 + 1;

  return (array[idx] > array[leftChildIdx] || array[leftChildIdx] === undefined) &&
    (array[idx] > array[rightChildIdx] || array[rightChildIdx === undefined]) &&
    isMaxHeap(array, leftChildIdx) &&
    isMaxHeap(array, rightChildIdx)

  // if(array.length <= 1) return true;
  // for(let i = array.length - 1; i > 0; i--) {
  //   let parentIdx = Math.floor(idx / 2);
  //   console.log(array[idx], array[parentIdx]);
  //   if(array[idx] > array[parentIdx]) {
  //     return false;
  //   }
  // }
  // return true;
}

console.log(isMaxHeap([null, 50, 42, 27, 32, 24]));

module.exports = {
  isMaxHeap
};
