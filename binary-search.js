function binarySearch(array, key) {
    let first = 0;
    let last = array.length -1;

    while(first <= last) {
        const midPoint = first + Math.floor((first + last) / 2);
        
        if (array[midPoint] === key) {
            return midpoint;
        }
        
        if (array[midPoint] < key) {
            first = midpoint + 1
        }else {
            last = midpoint - 1
        }
    }
    return -1;
}

