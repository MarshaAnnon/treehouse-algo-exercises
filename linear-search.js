function linearSearch(array, key) {
    if(array === []) {
        return;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] === key) {
            return i;
        } 
        return -1;
    }
}