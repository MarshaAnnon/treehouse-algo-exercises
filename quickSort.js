function quickSort(array) {
    if(array.length === 0) {
        return 0;
    }
    let pivot = [0];
    let lessThanPivot = []
    let greaterThanPivot = []

    for (value of array) {
        if (value <= pivot) {
            lessThanPivot.push(value)
        } else {
            greaterThanPivot.push(value)
        }
    }
    return quickSort(lessThanPivot) + pivot + quickSort(greaterThanPivot)
}
 
quickSort([4,6,3,2,9,7,3,5])