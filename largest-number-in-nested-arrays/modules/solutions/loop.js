export default array2D => {
    if (!Array.isArray(array2D)) {
        throw new TypeError(`Invalid argument: first argument should be an array.\nReceived ${array2D}.`);
    }

    const largestNumbers = [];

    for (const nestedArray of array2D) {
        let largestNumber = -Infinity;

        for (const number of nestedArray) {
            if (number > largestNumber) {
                largestNumber = number;
            }
        }
        
        largestNumbers.push(largestNumber);
    }

    return largestNumbers;
};