export default (arr, size) => {
    if (!Array.isArray(arr) || typeof size !== 'number') {
        throw new TypeError(`Invalid arguments: first argument should be an array, second argument should be a number.\nReceived: ${arr}, ${size}.`);
    }

    const localArr = [...arr];
    const resultArr = [];

    while (localArr.length !== 0) {
        resultArr.push(localArr.splice(0, size));
    }

    return resultArr;
};