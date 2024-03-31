export default (arr, size) => {
    if (!Array.isArray(arr) || typeof size !== 'number') {
        throw new TypeError(`Invalid arguments: first argument should be an array, second argument should be a number.\nReceived: ${arr}, ${size}.`);
    }

    if (arr.length === 0) {
        return [];
    }

    const rec = remainingArr => {
        return remainingArr.length <= size 
            ? [remainingArr] 
            : [
                remainingArr.slice(0, size),
                ...rec(remainingArr.slice(size))
              ];
    };

    return rec(arr);
};