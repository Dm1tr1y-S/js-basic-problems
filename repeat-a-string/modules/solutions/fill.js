export default (str, timesRepeat) => {
    if (typeof str !== 'string' || typeof timesRepeat !== 'number') {
        throw new TypeError(`Invalid arguments: first argument should be a string, second argument should be a number.\nReceived: ${str}, ${timesRepeat}.`);
    }

    if (timesRepeat <= 0) {
        return '';
    }

    const arr = new Array(timesRepeat);
    return arr
        .fill(str)
        .join('');
};