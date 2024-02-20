export default (str, target) => {
    if (typeof str !== 'string' || typeof target !== 'string') {
        throw new TypeError(`Invalid arguments: both arguments should be strings.\nReceived ${str}, ${target}.`);
    }

    return str.endsWith(target);
};