export default str => {
    if (typeof str !== 'string') {
        throw new TypeError(`Invalid argument: first argument should be a string.\nReceived: ${str}.`);
    }

    return str
            .split(' ')
            .map(word => word.length)
            .reduce(((longestLength, currentLen) => Math.max(longestLength, currentLen)), 0);
};