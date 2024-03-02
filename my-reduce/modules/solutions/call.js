export default(arr, callback, acc) => {
    if (!Array.isArray(arr) || typeof callback !== 'function') {
        throw new TypeError(`Invalid arguments: first arguments shold be an array, second argument should be a function.\nReceived : ${arr}, ${callback}.`);
    }
    if (arr.length === 0 && acc === undefined) {
        throw new TypeError(`Invalid arguments: reduce of empty array with no initial value`);
    }

    const reduce = Array.prototype.reduce;
    return acc !== undefined && acc !== null 
        ? reduce.call(arr, callback, acc)
        : reduce.call(arr, callback);
};