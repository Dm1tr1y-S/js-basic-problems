export default (arr, callback) => {
    if (!Array.isArray(arr) || typeof callback !== 'function') {
        throw new TypeError(`Invalid arguments: first argument should be an array, second argument should be a function.\nReceived: ${arr}, ${callback}.`);
    }

    for (const [index, element] of arr.entries()) {
        if (callback(element, index, arr)) {
		return element;
        }
    }

    return undefined;
};
