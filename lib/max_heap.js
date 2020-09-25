class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2)
  }

  getLeftChild(idx) {
    return idx * 2
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }

  swap(array, idx1, idx2) {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]]
  }

  siftUp(idx) {
    if (this.array[idx] < this.array[this.getParent(idx)] ||
      idx <= 1) {
      return;
    }
    this.swap(this.array, idx, this.getParent(idx))
    this.siftUp(this.getParent(idx))
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1)
  }

  siftDown(idx) {
    let valueLeft = this.array[this.getLeftChild(idx)];
    let valueRight = this.array[this.getRightChild(idx)];

    if (valueLeft === undefined) {
      valueLeft = -Infinity
    }
    if (valueRight === undefined) {
      valueRight = -Infinity
    }

    if (this.array[idx] > valueRight &&
      this.array[idx] > valueLeft) {
      return
    }

    if (valueLeft > valueRight) {
      this.swap(this.array, idx, this.getLeftChild(idx))
      this.siftDown(this.getLeftChild(idx))
    } else {
      this.swap(this.array, idx, this.getRightChild(idx))
      this.siftDown(this.getRightChild(idx))
    }
  }

  deleteMax() {
    if(this.array.length <= 1) {
      return null;
    }
    if(this.array.length === 2) {
      return this.array.pop();
    }
    let max = this.array[1]
    this.array[1] = this.array.pop();
    this.siftDown(1);    
    return max;
  }
}

module.exports = {
  MaxHeap
};
