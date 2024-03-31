export default (arr, size) => {
    if (!Array.isArray(arr) || typeof size !== 'number') {
        throw new TypeError(`Invalid arguments: first argument should be an array, second argument should be a number.\nReceived: ${arr}, ${size}.`);
    }

    const iter = (remainingArr, resultArr) => {
        return remainingArr.length === 0 
            ? resultArr 
            : iter(remainingArr.slice(size), [...resultArr, remainingArr.slice(0, size)]);
    };

    return iter(arr, []);
};