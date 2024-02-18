export default (str, maxLength) => {
    if (typeof str !== 'string' || typeof maxLength !== 'number') {
        throw new TypeError(`Invalid arguments: first argument should be a string, second argument should be a number.\nReceived ${str}, ${maxLength}.`);
    }

    if (maxLength >= str.length) {
        return str;
    } else if (maxLength <= 0) {
        return '';
    }

    const rec = i => i === maxLength ? '' : `${str[i]}${rec(i + 1)}`;
    return `${rec(0)}...`;
};
