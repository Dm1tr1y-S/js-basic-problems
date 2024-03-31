export default (arr, size) => {
    if (!Array.isArray(arr) || typeof size !== 'number') {
        throw new TypeError(`Invalid arguments: first argument should be an array, second argument should be a number.\nReceived: ${arr}, ${size}.`);
    }

    const localArr = [...arr];

    const iter = (remainingArr, resultArr) => {
        if (remainingArr.length === 0) {
            return resultArr;
        }

        resultArr.push(remainingArr.splice(0, size));
        return iter(remainingArr, resultArr);
    };

    return iter(localArr, []);
};