export default (str, target) => {
    if (typeof str !== 'string' || typeof target !== 'string') {
        throw new TypeError(`Invalid arguments: both arguments should be strings.\nReceived ${str}, ${target}.`);
    }

    if (target.length > str.length) {
        return false;
    }

    const startIndex = str.length - target.length;
    const rec = i => i === str.length ? '' : `${str[i]}${rec(i + 1)}`;
    return rec(startIndex) === target;
};