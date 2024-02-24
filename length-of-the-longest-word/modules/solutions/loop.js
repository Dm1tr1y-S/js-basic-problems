export default str => {
    if (typeof str !== 'string') {
        throw new TypeError(`Invalid argument: first argument should be a string.\nReceived: ${str}.`);
    }

    const words = str.split(' ');
    let longestLength = 0;

    for (const word of words) {
        if (word.length > longestLength) {
            longestLength = word.length;
        }
    }
    
    return longestLength;
};