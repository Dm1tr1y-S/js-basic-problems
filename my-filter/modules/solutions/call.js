export default(arr, callback) => {
    if (!Array.isArray(arr) || typeof callback !== 'function') {
        throw new TypeError(`Invalid arguments: first arguments shold be an array, second argument should be a function.\nReceived : ${arr}, ${callback}.`);
    }

    const filter = Array.prototype.filter;
    return filter.call(arr, callback);
};