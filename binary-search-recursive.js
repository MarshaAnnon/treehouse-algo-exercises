function recursiveBinarySearch(array, key) {
    if (array.length === 0) {
        return false;
    }
        
    let midPoint = Math.floor(array.length / 2);
    
    if (array[midPoint] === key) {
        return true;
    }else {
        if (array[midPoint] < key) {
            return true;
        }else {
            if(array[midPoint] < key) {
                return recursiveBinarySearch(array.slice(midPoint + 1), key);
            } else if (list[midPoint] > key) {
                return recursiveBinarySearch(array.slice(0,midPoint), key);
            }
        }
    }
}