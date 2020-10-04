// 3 ways to add numbers in JavaScript

// Loop

function sum(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]

    }
        return sum;
}
sum([1, 2, 7, 9])

// Reduce

array = [1, 2, 7, 9]
const sum = array.reduce((a,b) => {
    return a + b
})

// Recursion

function sum(array) {
    if (array.length === 0 ) {
        return 0;
    } else {
        return array[0] + sum(array.slice(1))
    } 
}
sum([1, 2, 7, 9])