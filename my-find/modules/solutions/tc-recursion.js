export default (arr, callback) => {
    if (!Array.isArray(arr) || typeof callback !== 'function') {
        throw new TypeError(`Invalid arguments: first arguments shold be an array, second argument should be a function.\nReceived : ${arr}, ${callback}.`);
    }

    const iter = i => {
        if (i === arr.length) {
            return undefined;
        }

        const element = arr[i];

        if (callback(element, i, arr)) {
            return element;
        }

        return iter(i + 1);
    };

    return iter(0);
};