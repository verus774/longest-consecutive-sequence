module.exports = function longestConsecutiveLength(array) {
    let counter = 1;
    let longestCounter = 1;

    array.sort((a, b) => a - b);

    if (array.length === 0) return 0;
    if (array.length === 1) return 1;

    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1]) continue;
        if (array[i] - array[i - 1] === 1) {
            counter++;
        } else {
            counter = 1;
        }
        longestCounter = Math.max(counter, longestCounter);
    }
    return longestCounter;
};
