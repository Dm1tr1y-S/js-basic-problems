export default (str, timesRepeat) => {
    if (typeof str !== 'string' || typeof timesRepeat !== 'number') {
        throw new TypeError(`Invalid arguments: first argument should be a string, second argument should be a number.\nReceived: ${str}, ${timesRepeat}.`);
    }

    return timesRepeat <= 0 ? '' : str.repeat(timesRepeat);
};