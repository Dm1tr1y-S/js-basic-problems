export default (str, timesRepeat) => {
    if (typeof str !== 'string' || typeof timesRepeat !== 'number') {
        throw new TypeError(`Invalid arguments: first argument should be a string, second argument should be a number.\nReceived: ${str}, ${timesRepeat}.`);
    }

    const iter = (i, result) => i <= 0 ? result : iter(i - 1, `${result}${str}`);
    return iter(timesRepeat, '');
};