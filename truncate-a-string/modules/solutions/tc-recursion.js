export default (str, maxLength) => {
    if (typeof str !== 'string' || typeof maxLength !== 'number') {
        throw new TypeError(`Invalid arguments: first argument should be a string, second argument should be a number.\nReceived ${str}, ${maxLength}.`);
    }

    if (maxLength >= str.length) {
        return str;
    } else if (maxLength <= 0) {
        return '';
    }

    const iter = (i, result) => (i === maxLength) ? result : iter(i + 1, `${result}${str[i]}`);
    return `${iter(0, '')}...`;
};
