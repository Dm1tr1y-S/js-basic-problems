export default str => {
    if (typeof str !== 'string') {
        throw new TypeError(`Invalid argument: first argument should be a string.\nReceived: ${str}.`);
    }

    const lengthsOfWords = str
        .split(' ')
        .map(word => word.length);
    
    const rec = remainingArr => {
        return remainingArr.length === 0 
            ? 0 
            : Math.max(remainingArr[0], rec(remainingArr.slice(1)));
    };

    return rec(lengthsOfWords);
};