export default (str, target) => {
    if (typeof str !== 'string' || typeof target !== 'string') {
        throw new TypeError(`Invalid arguments: both arguments should be strings.\nReceived ${str}, ${target}.`);
    }

    if (target.length > str.length) {
        return false;
    }
    
    const startIndex = str.length - target.length;
    const iter = (i, substr) => i === str.length ? substr : iter(i + 1, `${substr}${str[i]}`);
    return iter(startIndex, '') === target;
};