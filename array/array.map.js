/**
 * creates a new array populated with the results of calling a provided function
 * on every element in the calling array.
 *
 * @param {Function} callback - Function that produces an element of the new Array, 
 *   -  takes three arguments:
 *      - `currentValue`: The current element being processed in the array.
 *      - `index` (optional): The index of the current element being processed.
 *      - `array` (optional): The array `map` was called upon.
 *
 * @param {Object} [thisArg] - Object to use as `this` when executing the callback function.
 *
 * @returns {Array} - A new array with each element being the result of the callback function.
 *
 * @example
 * // Squaring each element in an array
 * const numbers = [1, 2, 3, 4, 5];
 * const squaredNumbers = numbers.map(function (num) {
 *   return num * num;
 * });
 * // squaredNumbers is now [1, 4, 9, 16, 25]
 */
Array.prototype.myMap = function (callback) {
    const result = [];
    for (let index = 0; index < this.length; index++) {

        // checks if item exists in array or not
        if (this.indexOf(this[index]) > -1) {
            result[index] = callback(this[index], index, this);
        }
    }
    return result;
}

// example
const arr = [1, 2, 3, 4];

arr[5] = 6;

const doubledArr = arr.myMap((item, index) => {
    return item * 2;
})
console.log(doubledArr);
// doubledArr = [2, 4, 6, 8, empty, 12]