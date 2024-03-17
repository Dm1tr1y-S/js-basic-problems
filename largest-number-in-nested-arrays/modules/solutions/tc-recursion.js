export default arr => {
    if (!Array.isArray(arr)) {
        throw new TypeError(`Invalid argument: first argument should be an array.\nReceived ${arr}.`);
    }

    const iter = (remainingArr, largestNums) => {
        if (remainingArr.length === 0) {
            return largestNums;
        }

        largestNums.push(Math.max(...remainingArr[0]))
        return iter(remainingArr.slice(1), largestNums);
    };

    return iter(arr, []);
};