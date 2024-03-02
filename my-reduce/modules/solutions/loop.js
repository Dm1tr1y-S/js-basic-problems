export default(arr, callback, acc) => {
    if (!Array.isArray(arr) || typeof callback !== 'function') {
        throw new TypeError(`Invalid arguments: first arguments shold be an array, second argument should be a function.\nReceived : ${arr}, ${callback}.`);
    }
    if (arr.length === 0 && acc === undefined) {
        throw new TypeError(`Invalid arguments: reduce of empty array with no initial value`);
    }

    const startIndex = (acc !== undefined && acc !== null) ? 0 : 1;
    let result = (acc !== undefined && acc !== null) ? acc : arr[0];

    for (let index = startIndex; index < arr.length; index++) {
        const element = arr[index];
        result = callback(result, element, index, arr);
    }

    return result;
};