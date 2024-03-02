export default(arr, callback, acc) => {
    if (!Array.isArray(arr) || typeof callback !== 'function') {
        throw new TypeError(`Invalid arguments: first arguments shold be an array, second argument should be a function.\nReceived : ${arr}, ${callback}.`);
    }
    if (arr.length === 0 && acc === undefined) {
        throw new TypeError(`Invalid arguments: reduce of empty array with no initial value`);
    }

    const startIndex = (acc !== undefined && acc !== null) ? 0 : 1;
    const initialResult = (acc !== undefined && acc !== null) ? acc : arr[0];

    const iter = (index, result) => {
        if (index === arr.length) {
            return result;
        }

        const element = arr[index];
        const updatedResult = callback(result, element, index, arr)

        return iter(index + 1, updatedResult);
    };

    return iter(startIndex, initialResult);
};