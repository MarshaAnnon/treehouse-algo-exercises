function quickSort(array) {
    if(array.length <= 1) {
        return array;
    }
    let pivot = array[0];
    let lessThanPivot = []
    let greaterThanPivot = []

    // i=1 because pivot = 0
    for (let i = 1; i < array.length; i++) {
        if (array[i] <= pivot) {
            lessThanPivot.push(array[i]);
        } else {
            greaterThanPivot.push(array[i]);
        }
    }
    return quickSort(lessThanPivot).concat(pivot, quickSort(greaterThanPivot));
}
 
quickSort([4,6,3,2,9,7,3,5])