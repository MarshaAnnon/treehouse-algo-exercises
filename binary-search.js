function binarySearch(array, key) {
    let first = 0;
    let last = array.length -1;

    while(first <= last) {
        const midPoint = first + Math.floor((first + last) / 2);
        
        if (array[midPoint] === key) {
            return midPoint;
        }
        
        if (array[midPoint] < key) {
            first = midPoint + 1
        }else {
            last = midPoint - 1
        }
    }
    return -1;
}

