export default str => {
    if (typeof str !== 'string') {
        throw new TypeError(`Invalid argument: first argument should be a string.\nReceived: ${str}.`);
    }

    const lengthsOfWords = str
        .split(' ')
        .map(word => word.length);
    
    const iter = (remainingArr, longestLength) => {
        return remainingArr.length === 0 
            ? longestLength 
            : iter(remainingArr.slice(1), Math.max(longestLength, remainingArr[0]));
    };
    
    return iter(lengthsOfWords, 0);
};