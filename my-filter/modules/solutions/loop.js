export default(arr, callback) => {
    if (!Array.isArray(arr) || typeof callback !== 'function') {
        throw new TypeError(`Invalid arguments: first arguments shold be an array, second argument should be a function.\nReceived : ${arr}, ${callback}.`);
    }

    const filteredArr = [];

    for (const [ index, element ] of arr.entries()) {
        if (callback(element, index, arr)) {
            filteredArr.push(element);
        }
    }

    return filteredArr;
};