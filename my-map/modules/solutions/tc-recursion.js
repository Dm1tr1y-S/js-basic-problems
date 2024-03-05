export default(arr, callback) => {
    if (!Array.isArray(arr) || typeof callback !== 'function') {
        throw new TypeError(`Invalid arguments: first arguments shold be an array, second argument should be a function.\nReceived : ${arr}, ${callback}.`);
    }


    const iter = (index, mapedArr) => {
        if (mapedArr.length === arr.length) {
            return mapedArr;
        }

        const element = arr[index];   
        mapedArr.push(callback(element, index, arr));
        return iter(index + 1, mapedArr);
    };

    return iter(0, []);
};