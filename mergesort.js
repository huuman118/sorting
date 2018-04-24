function split(wholeArray) {
    let firstHalf, secondHalf;
    let mid = Math.floor(wholeArray.length/2);
    firstHalf = wholeArray.slice(0,mid);
    secondHalf = wholeArray.slice(mid);
    return [firstHalf, secondHalf];
  }
function merge(array1, array2) {
    let sortedArray = [];
    while(array1[0] && array2[0]) {
        let element = array1[0] < array2[0] ? array1[0] : array2[0];
        //console.log(element);
        sortedArray.push(element);
        if(element === array1[0]) array1.shift();
        else array2.shift();
    }
    return [...sortedArray,...array1,...array2];
}
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    else {
        const storedValue = split(array);
        return merge(mergeSort(storedValue[0]), mergeSort(storedValue[1]))
    }
}
