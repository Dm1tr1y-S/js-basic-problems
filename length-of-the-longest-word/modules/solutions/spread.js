export default str => {
    if (typeof str !== 'string') {
        throw new TypeError(`Invalid argument: first argument should be a string.\nReceived: ${str}.`);
    }

    return Math.max(...str
                        .split(' ')
                        .map(word => word.length));
};