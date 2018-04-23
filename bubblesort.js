function bubbleSort(array) {
  let resultArr = [];



  if (!array) {
    return array;
  } else {
    for (let j = array.length - 1; j > 0; j--) {
      for (let i = 0; i < array.length - 1; i++) {
        let swapResult = swap(array[i], array[i + 1])
        array[i] = swapResult[0]
        array[i + 1] = swapResult[1]
      }
    }
  }
  return array;

}

console.log(bubbleSort([6, 5, 4, 3, 2, 1]))

function swap(num1, num2) {
    if (num2 < num1) {
      return [num2, num1];
    } else {
      return [num1, num2]
    }
}
