function indexOfMin(list) {
    let minIndex = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] < list[minIndex]) {
            minIndex = i;
        }
    }
    return minIndex
}

function selectionSort(list) {
    let sortedList = []

    while(list.length > 0) {
        let indexToMove = indexOfMin(list);
        sortedList.push(list.splice(indexToMove, 1)[0]);
    }
    return sortedList
}

const unsortedArray = [29, 100, 1, 2, 57, 28, 88, 3, 50, 67, 37, 1, 32, 20];

const sorted = selectionSort(unsortedArray);
console.log(sorted);


// use two arrays, 1. unsorted array and 2. sorted. (
// Sorted = [], 
// Move values from unsorted array to the sorted one at a time. 
// With each pass, look through all values in the unsorted array 
// Find the smallest, move it to the end of the sorted array. .push()
// Start with the first value in the unsorted array, and say that's the smallest, value we've seen so far. 
// Then look at the next value and see if that's smaller than the current minimum. 
// If it is, as the new minimum. 
// Then move to the next value, compare to the minimum again. 
// If it's smaller, that becomes the new minimum. Continue until end of the array. 
// At that point, we know whatever value we have marked as the minimum is the smallest
// value in the whole list.