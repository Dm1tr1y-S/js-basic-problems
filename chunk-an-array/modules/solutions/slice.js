export default (arr, size) => {
    if (!Array.isArray(arr) || typeof size !== 'number') {
        throw new TypeError(`Invalid arguments: first argument should be an array, second argument should be a number.\nRecived ${arr}, ${size}.`)
    }

    const resultArr = [];

    for (let i = 0; i < arr.length; i += size) {
        resultArr.push(arr.slice(i, i + size));
    }

    return resultArr;
};