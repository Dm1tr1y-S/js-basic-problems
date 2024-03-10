export default(arr, callback) => {
    if (!Array.isArray(arr) || typeof callback !== 'function') {
        throw new TypeError(`Invalid arguments: first arguments shold be an array, second argument should be a function.\nReceived : ${arr}, ${callback}.`);
    }


    const iter = (index, filteredArr) => {
        if (index === arr.length) {
            return filteredArr;
        }

        const element = arr[index];

        if (callback(element, index, arr)) {
            filteredArr.push(element);
        }

        return iter(index + 1, filteredArr);
    };

    return iter(0, []);
};