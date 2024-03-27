export default arr => {
    if (!Array.isArray(arr) || arr.length !== 2) {
        throw new TypeError(`Invalid arguments: first argument should be an array with two elements.\nReceived ${arr}`);
    }

    const [ str, target ] = arr;
    const normalizedStr = str.toLowerCase();

    return target
            .toLowerCase()
            .split('')
            .every(char => normalizedStr.includes(char));
};       