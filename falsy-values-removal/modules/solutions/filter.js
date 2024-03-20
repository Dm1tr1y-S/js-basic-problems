export default arr => {
    if (!Array.isArray(arr)) {
        throw new TypeError(`Invalid arguments: first argument should be an array.\nReceived ${arr}.`);
    }

    return arr.filter(element => Boolean(element));
};